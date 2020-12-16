import React from 'react';
import ReactDOM from 'react-dom';
import { store, history } from './store/configure';

import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App store = {store} history={history}/>
  </React.StrictMode>,
  document.getElementById('root')
);

