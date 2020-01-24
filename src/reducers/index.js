import { combineReducers } from 'redux';

const initialState = {
  people: [],
};

const starWars = (state = initialState, action) => {
  return state;
};

const rootReducer = combineReducers({
  starWars,
});

export default rootReducer;
