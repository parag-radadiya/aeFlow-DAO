const { assert } = require('chai');
const { utils } = require('@aeternity/aeproject');
const fs = require('fs')

const GUARD_CONTRACT_SOURCE = './contracts/Guard.aes';
const DAO_ACI = require('../aci/SmartDao_aci.json')
const TOKEN_ACI = require('../aci/TokenContract_aci.json')

describe('Guard', () => {
  let aeSdk;
  let contract;

  before(async () => {
    aeSdk = await utils.getSdk();

    // a filesystem object must be passed to the compiler if the contract uses custom includes
    const fileSystem = utils.getFilesystem(GUARD_CONTRACT_SOURCE);

    // get content of contract
    const sourceCode = utils.getContractContent(GUARD_CONTRACT_SOURCE);

    // initialize the contract instance
    contract = await aeSdk.initializeContract ({ sourceCode, fileSystem });
    fs.writeFileSync('./aci/Guard_aci.json', JSON.stringify(contract._aci))
    // create a snapshot of the blockchain state
    await utils.createSnapshot(aeSdk);
  });

  // after each test roll back to initial state
  afterEach(async () => {
    await utils.rollbackSnapshot(aeSdk);
  });

  it('Guard: init', async () => {
    await contract.init(1000)
    let dao = (await contract.createDao("TEST", "TST", "Smart dao", { "ak_aFHvYcjkMYEm56TjFSD38wH5t1vs7yi9X7L34NbuhXSW2exA5": 100 }, 10000, 50)).decodedResult
    let daoContract = await aeSdk.initializeContract({ aci: DAO_ACI, address: dao });
    let token =  (await daoContract.getTokenContract()).decodedResult
    let tokenContract = await aeSdk.initializeContract({ aci: TOKEN_ACI, address: token });
    let holders = (await tokenContract.getHolders()).decodedResult
    console.log(holders)
  });
});
