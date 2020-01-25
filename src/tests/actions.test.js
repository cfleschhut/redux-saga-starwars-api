import { call, put } from 'redux-saga/effects';
import * as TYPES from '../types';
import { fetchPeople, api } from '../actions';

describe('fetchPeople', () => {
  const peopleGen = fetchPeople();

  it('should hit api', () => {
    expect(peopleGen.next().value).toEqual(
      call(api, 'https://swapi.co/api/people/'),
    );
  });

  it('on success dispatches success action', () => {
    const person = { results: [] };
    expect(peopleGen.next(person).value).toEqual(
      put({ type: TYPES.FETCH_STAR_WARS_SUCCESS, data: person.results }),
    );
  });
});
