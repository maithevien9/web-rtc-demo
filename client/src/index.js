import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import App from './App';
import { ContextProvider } from './Context';

import './styles.css';

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById('root')
);
