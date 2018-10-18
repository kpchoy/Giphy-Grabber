import {RECEIVE_ALL_GIFS} from '../actions/gif_actions';

const gifReducer = (state={}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_GIFS:
      return {gifs: action.gifs}
    default:
      return state;
  }
}

export default gifReducer;