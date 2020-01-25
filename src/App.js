import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchStarWarsRequest, confirmFetchRequest } from './actions';
import './App.css';

function App({ starWars, fetchStarWarsRequest, confirmFetchRequest }) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleFetchClick = () => {
    setModalOpen(true);
    fetchStarWarsRequest();
  };

  const handleConfirmClick = () => {
    confirmFetchRequest();
    setModalOpen(false);
  };

  return (
    <div className="App">
      <h1>Star Wars API</h1>
      <div>
        {starWars.people.map((person, i) => (
          <h4 key={i}>{person.name}</h4>
        ))}
      </div>

      <div className="modal" style={modalOpen ? {} : { display: 'none' }}>
        <button onClick={handleConfirmClick}>Confirm</button>
      </div>

      <button onClick={handleFetchClick}>Load more</button>
    </div>
  );
}

const mapStateToProps = state => ({
  starWars: state.starWars,
});

const mapDispatchToProps = dispatch => ({
  fetchStarWarsRequest: () => dispatch(fetchStarWarsRequest()),
  confirmFetchRequest: () => dispatch(confirmFetchRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
