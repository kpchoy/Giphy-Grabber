import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as apiUtil from './utils/api_util';


document.addEventListener('DOMContentLoaded', () => {
  window.fetchGiphs = apiUtil.fetchGiphs;

  const root = document.getElementById('root');
  ReactDOM.render(<App />, root);


})