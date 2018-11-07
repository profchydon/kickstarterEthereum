import React , { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';

const ButtonStyle = () => (
  <div>
  <Button animated='vertical' primary>
    <Button.Content hidden>Create Campaign</Button.Content>
    <Button.Content visible>
      <Icon name='shop' />
    </Button.Content>
  </Button>
  </div>

)

export default ButtonStyle;
