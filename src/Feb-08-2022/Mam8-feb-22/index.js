import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import store from './store'
import AppRed from './AppRed';


ReactDOM.render(
    <Provider store={store}>  
    <AppRed/> 
  </Provider>,  document.getElementById('root')
);

