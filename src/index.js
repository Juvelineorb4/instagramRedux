import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {store} from "./store/configure"
import './index.css';
import App from './App';
import 'bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.render(<App store={store}/>, document.getElementById('root'));


