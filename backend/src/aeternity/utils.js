import { AeSdk, Node, MemoryAccount, CompilerHttp ,Tag} from '@aeternity/aepp-sdk';
import fetch from 'node-fetch';
import aci from './acl.js'
import aex9_acl from './aex9.js';
import guard_acl from './guard_acl.js';
import smart_dao from './SmartDao_aci.js';

// replace with your key pair
const ACCOUNT_KEYPAIR = {
  publicKey: '',
  secretKey: '',
};


const NODE_URL = 'https://testnet.aeternity.io';
const COMPILER_URL = 'https://v7.compiler.stg.aepps.com';
const Wrap_AE = "ct_JDp175ruWd7mQggeHewSLS1PFXt9AzThCDaFedxon8mF8xTRF"
const account = new MemoryAccount(ACCOUNT_KEYPAIR.secretKey);
const node = new Node(NODE_URL);
const newUserAccount = MemoryAccount.generate();
console.log(newUserAccount)
const aeSdk = new AeSdk({
  nodes: [{ name: 'testnet', instance: node }],
  accounts: [account,newUserAccount],
  onCompiler: new CompilerHttp(COMPILER_URL),
});
let contract;

let guard_contract;

async function init() {

    contract = await aeSdk.initializeContract(
      {
        aci: aci,
        address: "ct_MLXQEP12MBn99HL6WDaiTqDbG4bJQ3Q9Bzr57oLfvEkghvpFb"
      }
    )

    guard_contract = await aeSdk.initializeContract(
      {
        aci: guard_acl,
        address:"ct_27qrt48PFVihQWSLneiMJByXA92PiymFdR2nBJN8rwoNLQ1a4z"
      }
    )
 //await guard_contract.join({amount:1})
  }
  
  
  async function getAllowance(contractaddr, amount) {
  
    let tokp1 = await aeSdk.initializeContract({
      aci: aex9_acl,
      address: contractaddr
    })
    let trial = await tokp1.allowance({ "from_account": aeSdk.address, "for_account": "ak_MLXQEP12MBn99HL6WDaiTqDbG4bJQ3Q9Bzr57oLfvEkghvpFb" })
    if (trial['decodedResult'] != undefined) {
      console.log("i am here")
      let abs = await tokp1.change_allowance("ak_MLXQEP12MBn99HL6WDaiTqDbG4bJQ3Q9Bzr57oLfvEkghvpFb", amount)
  
    }
    else {
      console.log("i am here")
      let abs = await tokp1.create_allowance("ak_MLXQEP12MBn99HL6WDaiTqDbG4bJQ3Q9Bzr57oLfvEkghvpFb", amount)
  
    }
  
  
  
  }
  
  export async function swapfromAE(daoaddress,tokenaddress, amount) {
    await init()
    let myct = await getContract(daoaddress)
    await myct.requestToken(amount,undefined)
    let routes = await fetch(`https://dex-backend-testnet.prd.aepps.com/pairs/swap-routes/${Wrap_AE}/${tokenaddress}`)
    routes = await routes.json()
  
    let list = ["ct_JDp175ruWd7mQggeHewSLS1PFXt9AzThCDaFedxon8mF8xTRF", routes[0][0]['token1']]
    let opt = { options: { omitUnkown: true }, amount: amount }
    console.log("the amount is "+ amount)
    let ans = await contract.swap_exact_ae_for_tokens(1, list, daoaddress.replace("ct_","ak_"), getCurrentTimestamp(), undefined, opt)
    return ans['decodedResult']
  }
  
  async function getContract(contractaddr){
    let myct = await aeSdk.initializeContract({
      aci:smart_dao,
      address:contractaddr
    })
    return myct;
  }

  export async function swaptoAE(daoaddress,tokenaddress, amount) {
    await init()
    let myct = await getContract(daoaddress)
    await myct.requestToken(amount,tokenaddress)

    let routes = await fetch(`https://dex-backend-testnet.prd.aepps.com/pairs/swap-routes/${Wrap_AE}/${tokenaddress}`)
    routes = await routes.json()
    let list = [routes[0][0]['token1'], Wrap_AE]
    let tokp = await aeSdk.initializeContract({
      aci: aex9_acl,
      address: routes[0][0]['token1']
    })
    let trial = await tokp.allowance({ "from_account": aeSdk.address, "for_account": "ak_MLXQEP12MBn99HL6WDaiTqDbG4bJQ3Q9Bzr57oLfvEkghvpFb" })
    if (trial['decodedResult'] != undefined) {
      let abs = await tokp.change_allowance("ak_MLXQEP12MBn99HL6WDaiTqDbG4bJQ3Q9Bzr57oLfvEkghvpFb", amount)
    }
    else {
  
      let abs = await tokp.create_allowance("ak_MLXQEP12MBn99HL6WDaiTqDbG4bJQ3Q9Bzr57oLfvEkghvpFb", amount)
    }

    let ans = await contract.swap_exact_tokens_for_ae(amount, 1, list, daoaddress.replace("ct_","ak_"), getCurrentTimestamp(), undefined)
    console.log(ans['decodedResult'])
    return(ans['decodedResult'])
  }
  
  
  export async function swapfromToken(daoaddress,tokenaddress1, tokenaddress2, amount) {
    await init()
    let myct = await getContract(daoaddress)
    await myct.requestToken(amount,tokenaddress1)

    let list = [tokenaddress1, tokenaddress2]
    let tokp = await aeSdk.initializeContract({
      aci: aex9_acl,
      address: tokenaddress1
    })
   
    let trial = await tokp.allowance({ "from_account": aeSdk.address, "for_account": "ak_MLXQEP12MBn99HL6WDaiTqDbG4bJQ3Q9Bzr57oLfvEkghvpFb" })
   
    if (trial['decodedResult'] != undefined) {
      let abs = await tokp.change_allowance("ak_MLXQEP12MBn99HL6WDaiTqDbG4bJQ3Q9Bzr57oLfvEkghvpFb", amount)
    }
    else {
  
      let abs = await tokp.create_allowance("ak_MLXQEP12MBn99HL6WDaiTqDbG4bJQ3Q9Bzr57oLfvEkghvpFb", amount)
    }
    let opt = { options: { omitUnkown: true } }
    let ans = await contract.swap_exact_tokens_for_tokens(amount, 1, list, daoaddress.replace("ct_","ak_"), getCurrentTimestamp(), undefined, opt)
   return ans['decodedResult']
  }
  
  export async function addLiquiditytoToken(daoaddress,tokenaddress1, tokenaddress2, amount) {
    await init()
    let myct = await getContract(daoaddress)

    let routes = await fetch(`https://dex-backend-testnet.prd.aepps.com/pairs/swap-routes/${tokenaddress1}/${tokenaddress2}`)
    routes = await routes.json()
    let address = routes[0][0]['address']
    let val = await fetch(`https://dex-backend-testnet.prd.aepps.com/pairs/by-address/${address}`)
    val = await val.json()
    let liquid = val['liquidityInfo']
    let ration = {}
    if (val["token0"]["address"] == tokenaddress1) {
      ration[tokenaddress1] = liquid['reserve0']
      ration[tokenaddress2] = liquid['reserve1']
    }
  
    else if (val["token0"]["address"] == tokenaddress2) {
      ration[tokenaddress1] = liquid['reserve1']
      ration[tokenaddress2] = liquid['reserve0']
    }
  
    let ratio = ration[tokenaddress2] / ration[tokenaddress1]
  
    await myct.requestToken(tokenaddress1,parseInt(amount))
  
    await myct.requestToken(tokenaddress2,parseInt(parseInt(ratio)))
  
  
  
    await getAllowance(tokenaddress1, amount)
    await getAllowance(tokenaddress2, parseInt(amount * ratio))
    let opt = { options: { omitUnkown: true } }
    let ans = await contract.add_liquidity(tokenaddress1, tokenaddress2, amount, parseInt(amount * ratio), amount, parseInt(amount * ratio), daoaddress.replace("ct_","ak_"), undefined, getCurrentTimestamp(), opt)
    return ans['decodedResult']
  
  }
  
  
 export async function LiquiditytoAE(daoaddress,tokenaddress2, amount) {
    await init()
    let myct = await getContract(daoaddress)
    await myct.requestToken(amount,undefined)

    let routes = await fetch(`https://dex-backend-testnet.prd.aepps.com/pairs/swap-routes/${Wrap_AE}/${tokenaddress2}`)
    routes = await routes.json()
    let address = routes[0][0]['address']
    let val = await fetch(`https://dex-backend-testnet.prd.aepps.com/pairs/by-address/${address}`)
    val = await val.json()
    let liquid = val['liquidityInfo']
    let ration = {}
    if (val["token0"]["address"] == Wrap_AE) {
      ration[Wrap_AE] = liquid['reserve0']
      ration[tokenaddress2] = liquid['reserve1']
    }
  
    else if (val["token0"]["address"] == tokenaddress2) {
      ration[Wrap_AE] = liquid['reserve1']
      ration[tokenaddress2] = liquid['reserve0']
    }
  
    let ratio = ration[tokenaddress2] / ration[Wrap_AE]
    await myct.requestToken(tokenaddress2,parseInt(ratio))
  
  
  
    await getAllowance(tokenaddress2, parseInt(amount * ratio))
    let opt = { options: { omitUnkown: true }, amount: amount }
    let ans = await contract.add_liquidity_ae(tokenaddress2, parseInt(amount * ratio) + parseInt(amount * ratio * 0.3), parseInt(amount * ratio) - parseInt(amount * ratio * 0.7), amount, daoaddress.replace("ct_","ak_"), undefined, getCurrentTimestamp(), opt)
    
    return ans['decodedResult']
  
  }
  
  export async function removeLiquidity(daoaddr,tokenaddress1, tokenaddress2, amount) {
    await init()
    let routes = await fetch(`https://dex-backend-testnet.prd.aepps.com/pairs/swap-routes/${tokenaddress1}/${tokenaddress2}`)
    routes = await routes.json()
    let address = routes[0][0]['address']
  
    await getAllowance(address, amount)
  
    let opt = { options: { omitUnkown: true } }
    let ans = await contract.remove_liquidity(tokenaddress1, tokenaddress2, amount, 0, 0, daoaddress.replace("ct_","ak_"), getCurrentTimestamp(), opt)
    return ans['decodedResult']
  
  }
  
  
  
  export async function transferAe(daoaddress,address, amount) {
    let myct = await getContract(daoaddress)
    await myct.requestToken(amount,undefined)
    const tx = await aeSdk.spend(amount, address);
    return tx
    
  }
  
  export async function transferToken(daoaddress,tokenaddress,address, amount) {
    console.log("here")
    console.log("the dao address is "+ daoaddress)
    let myct = await getContract(daoaddress)

    console.log("here the amount is" +  amount)
    await myct.requestToken(amount,tokenaddress)
    console.log("this is don")
    let tokp = await aeSdk.initializeContract({
      aci: aex9_acl,
      address: tokenaddress
    })
    let ans = await tokp.transfer(address, amount)
    return ans
  }
  
  
  export async function getBalance(address) {
    let balance = await aeSdk.getBalance(address);
    return balance
  }
  
  export async function getTokenBalance(address,tokenaddress) {
    let tokp = await aeSdk.initializeContract({
      aci: aex9_acl,
      address: tokenaddress
    })
    let balance = await tokp.balance(address,{callStatic:true})
    return balance['decodedResult']
  }


  export async function createVoteTx(){
    await init()
   let contract = await getContract("ct_2LEU3W9cdF9AYT5H9vZX6q9x9EGvigSP6bjPQt42rjpBb8JkNp")
  /**  let calldata = guard_contract._calldata.encode('Guard','unstake',[])
   console.log("the tag is "+ Tag.ContractCallTx)
   console.log(guard_contract.address)**/

   //let abc = await contract.vote(0,false,{innerTx:false,onAccount:aeSdk.accounts.ak_21A27UVVt3hDkBE5J7rhhqnH5YNb4Y1dqo4PnSybrH85pnWo7E,nonce:620})
   let abc = await guard_contract.createVotingProposal("ak_21A27UVVt3hDkBE5J7rhhqnH5YNb4Y1dqo4PnSybrH85pnWo7E",{innerTx:false,nonce:620})
   console.log(abc.txData.rawTx)

  /** const contractCallTx = await aeSdk.buildTx( {
    tag:43,
    callerId:  aeSdk.accounts.ak_21A27UVVt3hDkBE5J7rhhqnH5YNb4Y1dqo4PnSybrH85pnWo7E.address,
    contractId: "ct_27qrt48PFVihQWSLneiMJByXA92PiymFdR2nBJN8rwoNLQ1a4z",
    callData: calldata,
  });
  const signedContractCallTx = await aeSdk.signTransaction(
    contractCallTx,
    { onAccount: aeSdk.accounts.ak_21A27UVVt3hDkBE5J7rhhqnH5YNb4Y1dqo4PnSybrH85pnWo7E, innerTx: true },
  ); **/

  const payForTx = await aeSdk.payForTransaction(abc.txData.rawTx, { onAccount: aeSdk.accounts.ak_21A27UVVt3hDkBE5J7rhhqnH5YNb4Y1dqo4PnSybrH85pnWo7E });
  console.log(payForTx);
  }


  export async function becomeValidator(){
    
  }
  
  
  export async function getBlockHeight() {

    let lastheight = await aeSdk.getHeight();
    return lastheight
  }
  
  


  export async function getTxinfo(txHash){
    await init()
    let txInfo = await aeSdk.api.getTransactionInfoByHash(txHash)
    let decode = await guard_contract.$decodeEvents(txInfo.callInfo.log)
    return decode
  }
  
  //swapfromToken("ct_28w7VyXS6UDNbyWZxZLtxpDKJorfpYyBQM4f9quseFEByUeDpb","ct_b7FZHQzBcAW4r43ECWpV3qQJMQJp5BxkZUGNKrqqLyjVRN3SC",31)
   //swaptoAE("ct_b7FZHQzBcAW4r43ECWpV3qQJMQJp5BxkZUGNKrqqLyjVRN3SC",1000)
  //addLiquiditytoAE("ct_b7FZHQzBcAW4r43ECWpV3qQJMQJp5BxkZUGNKrqqLyjVRN3SC", 1000)
  //removeLiquidity("ct_b7FZHQzBcAW4r43ECWpV3qQJMQJp5BxkZUGNKrqqLyjVRN3SC",Wrap_AE,2782)
  //transferAe("ak_cqfheQ2kjmJZTWYjPAax8nyH11eGmKG73VqSbTmazzsbjowm3", 100)
  //getBalance("ak_cqfheQ2kjmJZTWYjPAax8nyH11eGmKG73VqSbTmazzsbjowm3")
  //getTokenBalance("ak_cqfheQ2kjmJZTWYjPAax8nyH11eGmKG73VqSbTmazzsbjowm3","ct_b7FZHQzBcAW4r43ECWpV3qQJMQJp5BxkZUGNKrqqLyjVRN3SC")
  function getCurrentTimestamp() {
  
    return Date.now() + 30 * 60 * 1000
  }

