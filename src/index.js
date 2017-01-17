import React from 'react';
import ReactDOM from 'react-dom';
import i18n from 'bem-react-i18n-core';
import App from './components/App/App.js';
import './index.css';

i18n.setLang('ru');

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
