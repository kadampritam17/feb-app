import React from 'react';
import ReactDOM from 'react-dom';
import App1C from './App1C';
//import {Little,Big} from './App';
//import App,{Little,Big} from './App';
//import App,* as mylibrary from './App'
//import {PI} from './APP'
//import App from './App';


//console.log(mylibrary.PI)
ReactDOM.render(
  <React.StrictMode>
    {/* <App></App>
    <mylibrary.Big></mylibrary.Big> */}
  <App1C></App1C>

  </React.StrictMode>,
  document.getElementById('root')
);

