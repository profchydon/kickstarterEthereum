const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');

const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider (
    'nuclear state eight idle unusual organ knee town whisper always riot park',
    'https://rinkeby.infura.io/7WTVHPp5gmU7DeImMFMD'
)

const web3 = new Web3(provider);


const deploy = async () => {

  const accounts = await new web3.eth.getAccounts();

  const factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
  .deploy({ data : '0x' + compiledFactory.bytecode })
  .send({ from : accounts[0] , gas : '1000000' });

  console.log('Contract deployed to' , factory.options.address);
};

deploy();
