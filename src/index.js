import React from 'react';
import ReactDOM from 'react-dom';
import i18n from 'bem-react-i18n-core';
import App from 'b:App';
import './index.css';

i18n.lang('ru');

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
