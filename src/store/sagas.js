import { takeLatest } from 'redux-saga/effects';
import * as TYPES from '../types';
import { fetchPeople } from '../actions';

function* mySaga() {
  yield takeLatest(TYPES.FETCH_STAR_WARS_REQUEST, fetchPeople);
}

export default mySaga;
