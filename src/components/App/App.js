import React, { Component } from 'react';
import logo from './logo.svg';
import Footer from '../Footer/Footer';
import './App.css';

import i18n from './App.i18n'
//-----
//const i18n = require('./App.i18n');
////
//const i18n_ru = require('./App.i18n/ru.js)
////.. en, uk
//const i18n = require('i18n-core')({ ru: i18n_ru })

class App extends Component {
  render() {
    return (
      <div className="App">
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
}

export default App;
