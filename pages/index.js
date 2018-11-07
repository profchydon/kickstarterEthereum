import React , { Component } from 'react';
import reactDOM from 'react-dom';
import { Card } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import { Button, Icon } from 'semantic-ui-react';
import Layout from '../components/Layout';
// import { ButtonStyle } from './button';

export default class CampaignIndex extends Component {

  static async getInitialProps () {
      // await ethereum.enable();
      const campaigns = await factory.methods.getDeployedCampaigns().call();
      return { campaigns };
  }


  renderButton () {
    return (
      <div>
      <Button floated="right" animated='vertical' primary>
        <Button.Content visible><Icon name='add circle' />Create Campaign</Button.Content>
        <Button.Content hidden>
          <Icon name='shop' />
        </Button.Content>
      </Button>
      </div>
    )
  }


  renderCampaigns() {
    const items = this.props.campaigns.map(address => {
      return {
          header: address,
          description: <a>View Campaign</a>,
          fluid: true
      };
    });
    return <Card.Group items={items} />;
  }

  render(){
    return (
      <Layout>
      <div>
        <h3>Open Campaigns</h3>
        { this.renderButton() }
        { this.renderCampaigns() }

      </div>
      </Layout>
    )

  }

}
