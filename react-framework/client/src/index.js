import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

/**
 * ReactDOM.render():
 * If the React element was previously rendered into container, 
 * this will perform an update on it and only mutate the DOM as 
 * necessary to reflect the latest React element. 
 */
ReactDOM.render(
  <App />,
  document.getElementById('root')
);


