import { call, put, take } from 'redux-saga/effects';
import * as TYPES from '../types';

export const api = url => fetch(url).then(response => response.json());

export const fetchStarWarsPeopleRequest = () => ({
  type: TYPES.FETCH_STAR_WARS_PEOPLE_REQUEST,
});

export const fetchStarWarsPlanetsRequest = () => ({
  type: TYPES.FETCH_STAR_WARS_PLANETS_REQUEST,
});

export const confirmFetchRequest = () => ({
  type: TYPES.CONFIRMATION,
});

export function* fetchPeople(action) {
  try {
    yield take(TYPES.CONFIRMATION);
    const people = yield call(api, 'https://swapi.co/api/people/');
    yield put({
      type: TYPES.FETCH_STAR_WARS_PEOPLE_SUCCESS,
      data: people.results,
    });
  } catch (error) {
    console.log(error);
  }
}

export function* fetchPlanets(action) {
  try {
    const planets = yield call(api, 'https://swapi.co/api/planets/');
    yield put({
      type: TYPES.FETCH_STAR_WARS_PLANETS_SUCCESS,
      data: planets.results,
    });
  } catch (error) {
    console.log(error);
  }
}
