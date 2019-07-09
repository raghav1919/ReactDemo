import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
//import index from "./js/index"
import { Provider } from "react-redux"
import store from  '../src/js/store/index';


//import { Router, Route, hashHistory } from 'react-router';
ReactDOM.render( <Provider store={store}>
    <App />
  </Provider>, document.getElementById('App')
  );
serviceWorker.unregister();
