import React from 'react';
import { Menu , Button , Icon} from 'semantic-ui-react';

export default () => {
    return (
      <Menu>

        <Menu.Item>
            CrowdCoin
        </Menu.Item>

        <Menu.Menu position="right">
            <Menu.Item>
                Campaigns
            </Menu.Item>

            <Menu.Item>
            <Button animated='vertical' primary>
              <Button.Content visible><Icon name='add circle' />Create Campaign</Button.Content>
              <Button.Content hidden>
                <Icon name='shop' />
              </Button.Content>
            </Button>
            </Menu.Item>
        </Menu.Menu>

      </Menu>
    );
}
