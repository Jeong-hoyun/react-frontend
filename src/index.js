import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App8 from 'App8';
import App10 from 'App10';
import Usereducer from 'Usereducer';
import reportWebVitals from './reportWebVitals';
import TodoList from 'TodoList';
import ErrorBoundary from 'ErrorBoundary';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App10 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();