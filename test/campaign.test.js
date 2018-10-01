const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const provider = ganache.provider();
const web3 = new Web3(provider);


const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {

  accounts = await web3.eth.getAccounts();

  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data : compiledFactory.btyecode })
    .send({ from : accounts[0], gas : '1000000' });

    await factory.methods.createCampaign('100').send({
      from : accounts[0],
      gas : '1000000'
    });

    const addresses = await factory.methods.getDeployedCampaigns().call();
    campaignAddress = addresses[0];
    campaign = await new web3.eth.Contract(JSON.parse(compiledCampaign.interface , campaignAddress));

    factory.setProvider(provider);

});

describe('Campaigns' , () => {

  it('deploys a factory' , () => {
    assert.ok(factory.options.address);
  });

  it('deploys a campaign' , () => {
    assert.ok(factory.options.address);
  });

});
