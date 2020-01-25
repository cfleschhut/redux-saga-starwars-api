import { combineReducers } from 'redux';
import * as TYPES from '../types';

const initialState = {
  people: [],
  planets: [],
};

const starWars = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.FETCH_STAR_WARS_PEOPLE_SUCCESS:
      return {
        ...state,
        people: action.data,
      };

    case TYPES.FETCH_STAR_WARS_PLANETS_SUCCESS:
      return {
        ...state,
        planets: action.data,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  starWars,
});

export default rootReducer;
