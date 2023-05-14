const {AeSdk, Node, MemoryAccount, generateKeyPair, CompilerHttp} = require('@aeternity/aepp-sdk');
const { utils } = require('@aeternity/aeproject');

const fs = require('fs');
const path = require('path');

const CONTRACT_SOURCE = process.argv[2];

// a filesystem object must be passed to the compiler if the contract uses custom includes
const fileSystem = utils.getFilesystem(CONTRACT_SOURCE);

// get content of contract
const Source = utils.getContractContent(CONTRACT_SOURCE);


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

let aeSdk;

const generate = async () =>{
    aeSdk = await init()
    if(process.argv[2]=="account"){
        return;
    }
    let contarct = await aeSdk.initializeContract({ sourceCode: Source, fileSystem: fileSystem });
    fs.writeFileSync(process.argv[3], JSON.stringify(contarct._aci))
}

generate()
