import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './components/App';
import * as gifActions from './actions/gif_actions';
import configureStore from './store/store';


const Root = ({store}) => (
  <Provider store = {store}>
    <HashRouter>
      <App/>
    </HashRouter>
  </Provider>
)


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore()

  // window.fetchGifs = gifActions.fetchGifs;
  window.getState = store.getState;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);


})