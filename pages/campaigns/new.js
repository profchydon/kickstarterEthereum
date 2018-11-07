import React , { Component } from 'react';
import { Button, Form , Input, Message, Icon , Loader} from 'semantic-ui-react';
import reactDOM from 'react-dom';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';

export default class CreateCampaign extends Component {

  state = {
      minimumContribution : '',
      message : ''
  };

  message(title, message) {
    return (
      <Message icon>
        <Icon name='circle notched' loading />
        <Message.Content>
          <Message.Header>{ title }</Message.Header>
          { message }
        </Message.Content>
      </Message>
    )
  }

  onSubmit = async (event) => {
      event.preventDefault();

      try {
        const accounts = await web3.eth.getAccounts();
        this.setState({ message : this.message('Just one second' , 'Transaction in progress...') });
        await factory.methods.createCampaign(this.state.minimumContribution).send({
          from : accounts[0]
        });
        this.setState({ message : this.message('Voila' , 'Transaction completed.') , minimumContribution : '' });
      } catch (e) {
          this.setState({ message : this.message('Oops!' , e.message) });
      }

  }

  render() {
      return (
        <Layout>
          <div>
              <h2>Create a campaign</h2>

              <Form onSubmit={this.onSubmit}>
                <Form.Field>
                  <label>Enter minimum contribution</label>

                  <Input
                    label={{ basic: true, content: 'Wei' }}
                    labelPosition='right'
                    placeholder='Enter amount...'
                    value = {this.state.minimumContribution}
                    onChange={event => this.setState({ minimumContribution : event.target.value })}
                  />
                </Form.Field>

                <Button type='submit' primary><Icon name='add circle' />Create</Button>
              </Form>
              {this.state.message}
          </div>
        </Layout>
      )
  }
}
