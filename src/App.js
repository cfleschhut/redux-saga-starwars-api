import React from 'react';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <h1>Star Wars API</h1>
      <div>
        {props.starWars.people.results.map((person, i) => (
          <h4 key={i}>{person.name}</h4>
        ))}
      </div>

      <button onClick={props.fetchStarWarsRequest}>Load more</button>
    </div>
  );
}

export default App;
