import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Rest from './Rest';
import InputNew from "./InputNew"
import reportWebVitals from './reportWebVitals';

const inputBar = ReactDOM.createRoot(
  document.getElementById('inputBar') as HTMLElement
);
const test = ReactDOM.createRoot(
  document.getElementById('test') as HTMLElement
);
inputBar.render(
  <React.StrictMode>
    <Rest />
    
  </React.StrictMode>
);
test.render(
  <React.StrictMode>
    <InputNew />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
