import { combineReducers } from 'redux';
import * as TYPES from '../types';

const initialState = {
  people: [],
};

const handleStarWarsFetchSuccess = (state, action) => ({
  ...state,
  people: action.data,
});

const starWars = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.FETCH_STAR_WARS_SUCCESS:
      return handleStarWarsFetchSuccess(state, action);

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  starWars,
});

export default rootReducer;
