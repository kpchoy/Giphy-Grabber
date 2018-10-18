import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { thunk } from 'redux-thunk';

import gifReducer from '../reducers/gif_reducer';

const configureStore  = (preloadedState = {}) => (
  createStore (
    gifReducer,
    preloadedState,
    applyMiddleware(thunk, logger)
  )
);

export default configureStore;