// @flow
import * as React from 'react';

const { getGlobal } = require('electron').remote;

const reload = getGlobal('reload');

import {
  Alignment,
  Button,
  Classes,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  Tooltip,
  Position
} from '@blueprintjs/core';

type Props = {
  children: React.Node
};

export default class App extends React.Component<Props> {
  props: Props;

  reload = () => {
    reload();
  };

  render() {
    return (
      <div style={{ height: '100vh', display: 'flex', flexFlow: 'column' }}>

        <div style={{ flex: '0 1 auto' }}>
          <Navbar>

            <NavbarGroup align={Alignment.LEFT}>

              <Tooltip content="Do science" position={Position.BOTTOM}>
                <Button className={Classes.MINIMAL} active="true" icon="layout-auto" text="" />
              </Tooltip>
              <Tooltip content="Process list (soon)" position={Position.BOTTOM}>
                <Button className={Classes.MINIMAL} icon="application" text="" />
              </Tooltip>
              <Tooltip content="Server monitoring (soon)" position={Position.BOTTOM}>
                <Button className={Classes.MINIMAL} icon="doughnut-chart" text="" />
              </Tooltip>
              <Tooltip content="Replicated tables monitoring (soon)" position={Position.BOTTOM}>
                <Button className={Classes.MINIMAL} icon="layers" text="" />
              </Tooltip>
              <Tooltip content="Kafka tables monitoring (soon)" position={Position.BOTTOM}>
                <Button className={Classes.MINIMAL} icon="search-around" text="" />
              </Tooltip>

            </NavbarGroup>

            <NavbarGroup align={Alignment.RIGHT}>

              <Tooltip content="Reload" position={Position.BOTTOM}>
                <Button onClick={this.reload} className={Classes.MINIMAL} icon="refresh" text="" />
              </Tooltip>
              <Tooltip content="Database connection" position={Position.BOTTOM}>
                <Button className={Classes.MINIMAL} icon="cog" text="" />
              </Tooltip>

              <NavbarDivider />

              <Tooltip content="About" position={Position.BOTTOM}>
                <Button className={Classes.MINIMAL} icon="help" text="" />
              </Tooltip>

            </NavbarGroup>

          </Navbar>
        </div>


        <div style={{ flex: '1 1 auto' }}>
          {this.props.children}
        </div>

        <div style={{ flex: '0 1 auto' }}>
          <Navbar>

          </Navbar>
        </div>

      </div>
    );
  }
}
