import React, { Component } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Layout, Nav, Page, NavLogo } from '@vujable/react-layout';

import Home from 'pages/Home';

import logo from 'assets/images/logo.png';

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
                    <Router>
                        <Routes>
                            <Route path="/" exact element={<Home />} />
                        </Routes>
                    </Router>
                </Page>
            </Layout>
        );
    }
}

export default App;
