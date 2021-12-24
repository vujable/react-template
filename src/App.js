import React, { Component } from "react";
import logo from 'assets/images/logo.png';
import { Layout, Nav, Page, NavLogo } from '@vujable/react-layout';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout>
        <Nav>
          <NavLogo>
            <img alt="logo" src={logo}></img>
          </NavLogo>
        </Nav>
        <Page>
          <h1>Down For Maintenance</h1>
          <p>Sorry for the inconvenience, but we’re performing a maintenance at the moment.</p>
          <p>We’ll be back online shortly!</p>
        </Page>
      </Layout>
    );
  }
}

export default App;
