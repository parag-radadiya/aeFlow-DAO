const {AeSdk, Node, MemoryAccount, generateKeyPair, CompilerHttp, toAettos } = require('@aeternity/aepp-sdk');

const fs = require('fs');
const path = require('path');


const NODE_URL = 'https://testnet.aeternity.io/';
const COMPILER_URL = 'https://v7.compiler.stg.aepps.com';


const getKeyPair = (location) => {
    const keypairFile = path.resolve(__dirname, location);
    const persisted = fs.existsSync(keypairFile);
    if (persisted) {
      return JSON.parse(fs.readFileSync(keypairFile), "utf-8");
    } else {
      const keypair = generateKeyPair();
      fs.writeFileSync(keypairFile, JSON.stringify(keypair), "utf-8");
      return keypair;
    }
};

const init = async () => {
    let keypair = getKeyPair("./myWallet.json");
    let client = new AeSdk({
        onCompiler: new CompilerHttp(COMPILER_URL),
        nodes: [
        {
            name: 'node',
            instance: new Node(process.env.NODE_URL || NODE_URL),
        }]
    });
    await client.addAccount(new MemoryAccount(keypair.secretKey), { select: true })
    
    return client;
}

let guardContract;
let dao;
let aeSdk;


const createDao = async () =>{
    let dao = (await guardContract.createDao("TEST", "TST", "Smart dao", { "ak_aFHvYcjkMYEm56TjFSD38wH5t1vs7yi9X7L34NbuhXSW2exA5": 100 }, 10000, 50)).decodedResult
    return dao
}

const setValidatorFee = async () =>{
    let res = (await guardContract.setStakeAmount(1))
    console.log(res)
}

const join = async () =>{
    let res = (await guardContract.join({ amount: 1 }))
    console.log(res)
}

const createProposal = async () => {
    let res = await dao.createProposal("knock knock", "tera baap aaya")
    console.log(res)
}

const vote = async () => {
    let res = await dao.vote(1, true)
    console.log(res)
}

const execute = async () => {
    let res = await dao.executeProposal(1)
    console.log(res)
}

const start = async () => {
    aeSdk = await init()
    if(process.argv[2]=="account"){
        return;
    }
    guardContract = await aeSdk.initializeContract({ aci: JSON.parse(fs.readFileSync('./aci/Guard_aci.json')), address: 'ct_27qrt48PFVihQWSLneiMJByXA92PiymFdR2nBJN8rwoNLQ1a4z' });
}


const startDao = async (addr) => {
    console.log(addr)
    dao = await aeSdk.initializeContract({ aci: JSON.parse(fs.readFileSync('./aci/SmartDao_aci.json')), address: addr });
}


const daotest = async () => {
    await createProposal()
    await vote()
    //await execute()
}

start().then(async ()=>{
    await join()
    let daoaddr = await createDao()
    await startDao(daoaddr)
    await daotest()
})
