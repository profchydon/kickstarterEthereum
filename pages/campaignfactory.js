import React , { Component } from 'react';
import campaignFactory from '../ethereum/factory';

class CampaignFactory extends Component {

  constructor(props) {
    super(props);

    state = {
      'campaign' : []
    };
  }

  async componentDidMount () {

    const campaign = await campaignFactory.methods.getDeployedCampaigns().call();

    this.setState({campaign});

  };

  render(){
      console.log(campaign);
  }

}
