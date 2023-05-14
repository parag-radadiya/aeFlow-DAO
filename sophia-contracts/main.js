const {AeSdk, Node, MemoryAccount, generateKeyPair, CompilerHttp} = require('@aeternity/aepp-sdk');
const { utils } = require('@aeternity/aeproject');

const fs = require('fs');
const path = require('path');

const GUARD_CONTRACT_SOURCE = './contracts/Guard.aes';

// a filesystem object must be passed to the compiler if the contract uses custom includes
const guardfileSystem = utils.getFilesystem(GUARD_CONTRACT_SOURCE);

// get content of contract
const guardSource = utils.getContractContent(GUARD_CONTRACT_SOURCE);


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
let aeSdk;

const deploy = async () =>{
    aeSdk = await init()
    if(process.argv[2]=="account"){
        return;
    }
    guardContract = await aeSdk.initializeContract({ sourceCode: guardSource, fileSystem: guardfileSystem });
    const deployInfo = await guardContract.$deploy([1]);
    console.log(`Guard: ${deployInfo.address}`)
}

deploy()
