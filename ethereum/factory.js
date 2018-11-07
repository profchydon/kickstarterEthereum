import web3 from './web3';
import campaignFactory from './build/CampaignFactory.json';

const address = '0x96aF6572e13116CA1388Aa4aE1d021F455dCB299';

export default new web3.eth.Contract(JSON.parse(campaignFactory.interface) , address);
