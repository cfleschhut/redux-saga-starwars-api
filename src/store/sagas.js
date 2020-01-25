import { takeLatest, all } from 'redux-saga/effects';
import * as TYPES from '../types';
import { fetchPeople, fetchPlanets } from '../actions';

function* watchFetchData() {
  yield all([
    takeLatest(TYPES.FETCH_STAR_WARS_PEOPLE_REQUEST, fetchPeople),
    takeLatest(TYPES.FETCH_STAR_WARS_PLANETS_REQUEST, fetchPlanets),
  ]);
}

export default watchFetchData;
