import React from 'react';
import ReactDOM from 'react-dom';
import GiffExpert from './GiffExpertApp';
import './index.css';


const divRoot = document.querySelector('#root'); 
ReactDOM.render(
    <GiffExpert />,
    divRoot
  // document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
