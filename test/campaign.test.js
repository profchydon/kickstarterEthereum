const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());


const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {

  accounts = await web3.eth.getAccounts();

  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data : compiledFactory.bytecode })
    .send({ from : accounts[0], gas : '1000000' });

    await factory.methods.createCampaign('100').send({ from : accounts[0], gas : '1000000' });

    [campaignAddress] = await factory.methods.getDeployedCampaigns().call();
    campaign = await new web3.eth.Contract(JSON.parse(compiledCampaign.interface) , campaignAddress);

});

describe('Campaigns' , () => {

  it('deploys a factory and a campaign' , () => {
    assert.ok(factory.options.address);
    assert.ok(campaign.options.address);
  });

  it('has a creator' , async () => {
    const creator = await campaign.methods.manager().call();
    assert.equal(accounts[0] , creator);
  });

  it('contributes to a campaign' , async () => {
    await campaign.methods.contribute().send({ from : accounts[1] , value : '200' });
    const isContributor = await campaign.methods.approvers(accounts[1]).call();
    assert(isContributor);
  });

  it('creates a request' , async () => {
      await campaign.methods.createRequest("To buy batteries", '200', accounts[2]).send({
        from : accounts[0],
        gas : '1000000'
      });
      const request = await campaign.methods.requests(0).call();
      assert.equal("To buy batteries" , request.description);
  });

  it('approves request' , async () => {
    await campaign.methods.contribute().send({ from : accounts[1] , value : web3.utils.toWei('10' , 'ether' ) });
    await campaign.methods.createRequest("To buy batteries", web3.utils.toWei('5' , 'ether' ), accounts[2]).send({ from : accounts[0], gas : '1000000' });
    await campaign.methods.approveRequest(0).send({ from : accounts[1] , gas : '1000000' });
    await campaign.methods.finalizeRequest(0).send({ from : accounts[0] , gas : '1000000' });

    let balance = await web3.eth.getBalance(accounts[2]);
    balance = await web3.utils.fromWei(balance , 'ether');
    balance = parseFloat(balance);
    const request = await campaign.methods.requests(0).call();
    assert.equal("1" , request.approvalCount);
    assert(request.complete);
    assert(balance >= 105);
  });



});
