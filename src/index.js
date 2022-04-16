//antes
// import React from 'react'
// import ReactDOM from 'react-dom'
// import PrimeraApp from './PrimeraApp';
// import CounterApp from './CounterApp';
// import './index.css';


// const divRoot = document.querySelector('#root');

// ReactDOM.render (<CounterApp value ={10} />,divRoot);

import React from 'react'
import { createRoot } from 'react-dom/client'
//import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css';


const divRoot = document.querySelector('#root');
const root = createRoot (divRoot)

root.render (<CounterApp value ={10} />);