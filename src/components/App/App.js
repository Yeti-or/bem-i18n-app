import React from 'react';
import logo from './logo.svg';
import {decl} from 'bem';
import Footer from 'b:Footer';
import './App.css';

import i18n from './App.i18n'
//import i18n from 'b:App.i18n'
//
//i18n('text')

export default decl({
    block: 'App',
    content() {
        return (
          <div className="App-wrapper">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React</h2>
              <h3>{i18n('App', 'text')}</h3>
            </div>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <Footer></Footer>
          </div>
        );
    }
});
