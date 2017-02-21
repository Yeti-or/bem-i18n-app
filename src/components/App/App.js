import React from 'react';
import logo from './logo.svg';
import {decl} from 'bem';

//import i18n from 't:i18n';
// eslint-disable-next-line
//import i18n_ from 'b:App t:i18n';
//
//i18n('text')

// import 'b:Footer m:theme=c'

import Footer from 'b:Footer m:theme=a';
// import 'b:textinput m:theme=normal|websearch m:size=m m:has-clear=yes';
import 'b:Footer m:theme=b'
// eslint-disable-next-line
import 'b:Footer e:tt'
// eslint-disable-next-line

function i18n() {
    return '42';
}

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
            <Footer theme="b" />
          </div>
        );
    }
});
