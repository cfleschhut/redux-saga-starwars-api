import React from 'react';
import { connect } from 'react-redux';
import { fetchStarWarsRequest } from './actions';
import './App.css';

function App({ starWars, fetchStarWarsRequest }) {
  return (
    <div className="App">
      <h1>Star Wars API</h1>
      <div>
        {starWars.people.map((person, i) => (
          <h4 key={i}>{person.name}</h4>
        ))}
      </div>

      <button onClick={fetchStarWarsRequest}>Load more</button>
    </div>
  );
}

const mapStateToProps = state => ({
  starWars: state.starWars,
});

const mapDispatchToProps = dispatch => ({
  fetchStarWarsRequest: () => dispatch(fetchStarWarsRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
