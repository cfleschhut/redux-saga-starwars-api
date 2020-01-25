import { call, put, take } from 'redux-saga/effects';
import * as TYPES from '../types';

const api = url => fetch(url).then(response => response.json());

export const fetchStarWarsRequest = () => ({
  type: TYPES.FETCH_STAR_WARS_REQUEST,
});

export const confirmFetchRequest = () => ({
  type: TYPES.CONFIRMATION,
});

export function* fetchPerson(action) {
  try {
    yield take(TYPES.CONFIRMATION);
    const person = yield call(api, 'https://swapi.co/api/people/');
    yield put({ type: TYPES.FETCH_STAR_WARS_SUCCESS, data: person.results });
  } catch (error) {
    console.log(error);
  }
}
