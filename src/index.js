import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as gifActions from './actions/gif_actions';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  // window.fetchGifs = gifActions.fetchGifs;
  const store = configureStore();
  window.getState = store.getState;

  const root = document.getElementById('root');
  ReactDOM.render(<App />, root);


})