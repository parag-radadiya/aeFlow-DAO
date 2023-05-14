import { AeSdkAepp, Node,  walletDetector, BrowserWindowMessageConnection } from "@aeternity/aepp-sdk";

const TESTNET_NODE_URL = "https://testnet.aeternity.io";
const MAINNET_NODE_URL = "https://mainnet.aeternity.io";
const COMPILER_URL = "https://compiler.aepps.com";
const GUARD_CONTRACT = 'ct_9M6TAVYRGTwYCA2E3xrka5ccAcMYfm73Ba4M9sdQB8ez6wGoy'
const GUARD_ACI = require('../assets/Guard_aci.json')
const DAO_ACI = require('../assets/SmartDao_aci.json')
const TOKEN_ACI = require('../assets/TokenContract_aci.json')

const aeSdk = new AeSdkAepp({
  name: "aeFlow DAO",
  nodes: [
    { name: "testnet", instance: new Node(TESTNET_NODE_URL) },
    { name: "mainnet", instance: new Node(MAINNET_NODE_URL) },
  ],
  compilerUrl: COMPILER_URL,
  onNetworkChange: async ({ networkId }) => {
    window.location.replace(window.location.host)
  },
  onAddressChange: ({ current }) =>  { window.location.replace(window.location.host) },
  onDisconnect: () => { window.location.replace(window.location.host) }
});

const  scanForWallets = async () => {
    return new Promise((resolve) => {
      const handleWallets = async ({ wallets, newWallet }) => {
        newWallet = newWallet || Object.values(wallets)[0]
        stopScan()
        await aeSdk.connectToWallet(newWallet.getConnection())
        const { address: { current } } = await aeSdk.subscribeAddress('subscribe', 'connected')
        resolve(Object.keys(current)[0])
      }
      const scannerConnection = new BrowserWindowMessageConnection()
      const stopScan = walletDetector(scannerConnection, handleWallets)
    })
}

const createDao = async (tokeName, symbol, metadata, distribution, totalsupply, repercentage) => {
    let guardContract = await aeSdk.initializeContract({ aci: GUARD_ACI, address: GUARD_CONTRACT });
    await guardContract.createDao(tokeName, symbol, metadata, distribution, totalsupply, repercentage)
}

const getDaoList = async () => {
    let guardContract = await aeSdk.initializeContract({ aci: GUARD_ACI, address: GUARD_CONTRACT });
    return (await guardContract.getDaoList()).decodedResult
}

const getDaoToken = async (address) => {
    let daoContract = await aeSdk.initializeContract({ aci: DAO_ACI, address });
    return (await daoContract.getTokenContract()).decodedResult
}

const getMetaData = async (address) => {
  let daoContract = await aeSdk.initializeContract({ aci: DAO_ACI, address });
  return (await daoContract.getMetaData()).decodedResult
}

export const getBalance = async (address) => {
  let balance = await aeSdk.getBalance(address)
  return balance/10**18
}


const getAllDaos = async () => {
  let out = []
  let daoList = await getDaoList()
  let daoListLen = daoList.size
  await new Promise((res, rej)=>{
    if(daoListLen<=0){
      res()
    }
    daoList.forEach(async (val) => {
      let tc_contract = await getDaoToken(val)
      let tokenContract = await aeSdk.initializeContract({ aci: TOKEN_ACI, address: tc_contract });
      let metaData = JSON.parse(await getMetaData(val))
      metaData.address= val
      metaData.name = (await tokenContract.name()).decodedResult
      out.push(metaData)
      daoListLen --
      if(daoListLen==0){
        res()
      }
    })
  })

  return out
}

const getMyDaos = async (myAddr) => {
  let out = []
  let daoList = await getDaoList()
  let daoListLen = daoList.size
  await new Promise((res, rej)=>{
    if(daoListLen<=0){
      res()
    }
    daoList.forEach(async (val) => {
      let tc_contract = await getDaoToken(val)
      let tokenContract = await aeSdk.initializeContract({ aci: TOKEN_ACI, address: tc_contract });
      try{
        let balance = (await tokenContract.balance(myAddr)).decodedResult
        if( balance > 0) {
          let metaData = JSON.parse(await getMetaData(val))
          metaData.address= val
          metaData.name = (await tokenContract.name()).decodedResult
          out.push(metaData)
        }
      }catch(e){
        console.error('Ignore:',e)
      }

      daoListLen --
      if(daoListLen==0){
        res()
      }
    })
  })
  return out
}

const getAllProposals = async (address)=>{
  let out = []
  let daoContract = await aeSdk.initializeContract({ aci: DAO_ACI, address });
  let proposalList = (await daoContract.getAllProposal()).decodedResult
  let proposalListLen = proposalList.size
  await new Promise((res, rej)=>{
    if(proposalListLen<=0){
      res()
    }
    proposalList.forEach(async (val, key) => {
      console.log(val)
      if(val.description){
        val.description = JSON.parse(val.description)
        val.address = address
      }
      out.push([key, val])
      proposalListLen --
      if(proposalListLen==0){
        res()
      }
    })
  })
  return out
}

const getAllMembers = async (address)=>{
  let out = []
  let tc_contract = await getDaoToken(address)
  let tokenContract = await aeSdk.initializeContract({ aci: TOKEN_ACI, address: tc_contract });
  let  membersList = (await tokenContract.getHolders()).decodedResult
  let membersListLen = membersList.size
  await new Promise((res, rej)=>{
    if(membersListLen<=0){
      res()
    }
    membersList.forEach(async (value, key) => {
      out.push([value, key])
      membersListLen --
      if(membersListLen==0){
        res()
      }
    })
  })
  return out
}

const createProposal = async (address, description, flowId) =>{
  let daoContract = await aeSdk.initializeContract({ aci: DAO_ACI, address });
  await daoContract.createProposal(description, flowId)
}

const getTotalSupply = async (address) =>{
  let tc_contract = await getDaoToken(address)
  let tokenContract = await aeSdk.initializeContract({ aci: TOKEN_ACI, address: tc_contract });
  return (await tokenContract.totalSupply()).decodedResult
}

const getFlowName = async (id) => {
  let x = await(await fetch(`https://api.aeflowdao.cloud/escrow/escmodi/${id}`)).json()
  return x.name
}


const voteProposal = async (address, proposalId, vote) => {
  let daoContract = await aeSdk.initializeContract({ aci: DAO_ACI, address });
  await daoContract.vote(proposalId, vote)
}

export { scanForWallets, createDao, getAllProposals, getAllMembers, getDaoToken, getMyDaos, getAllDaos, createProposal, getTotalSupply, getFlowName, voteProposal }