import React, { useState } from 'react';
import styled from 'styled-components';
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
        <Button onClick={handleConfirmClick}>Confirm</Button>
      </div>

      <Button onClick={handleFetchClick}>Load people</Button>
    </div>
  );
}

const Button = styled.button`
  cursor: pointer;
  padding: 0.75em 1.25em;
  border: 2px solid navy;
  color: navy;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -1px;
  background: white;

  &:hover {
    background-color: navy;
    color: white;
  }
`;

const mapStateToProps = state => ({
  starWars: state.starWars,
});

const mapDispatchToProps = dispatch => ({
  fetchStarWarsRequest: () => dispatch(fetchStarWarsRequest()),
  confirmFetchRequest: () => dispatch(confirmFetchRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
