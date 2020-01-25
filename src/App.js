import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  fetchStarWarsPeopleRequest,
  fetchStarWarsPlanetsRequest,
  confirmFetchRequest,
} from './actions';
import './App.css';

function App({
  starWars,
  fetchStarWarsPeopleRequest,
  fetchStarWarsPlanetsRequest,
  confirmFetchRequest,
}) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleFetchPeopleClick = () => {
    setModalOpen(true);
    fetchStarWarsPeopleRequest();
  };

  const handleFetchPlanetsClick = () => {
    fetchStarWarsPlanetsRequest();
  };

  const handleConfirmClick = () => {
    confirmFetchRequest();
    setModalOpen(false);
  };

  return (
    <div className="App">
      <h1>Star Wars API</h1>
      <div className="container">
        <div>
          <div>
            {starWars.people.map((person, i) => (
              <h4 key={i}>{person.name}</h4>
            ))}
          </div>
          <div className="modal" style={modalOpen ? {} : { display: 'none' }}>
            <Button onClick={handleConfirmClick}>Confirm</Button>
          </div>

          <Button onClick={handleFetchPeopleClick}>Load people</Button>
        </div>

        <div>
          <div>
            {starWars.planets.map((planet, i) => (
              <h4 key={i}>{planet.name}</h4>
            ))}
          </div>

          <Button onClick={handleFetchPlanetsClick}>Load planets</Button>
        </div>
      </div>
    </div>
  );
}

const Button = styled.button`
  width: 100%;
  max-width: 200px;
  padding: 12px;
  border: 2px solid navy;
  color: navy;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -1px;
  background: white;
  cursor: pointer;

  &:hover {
    background-color: navy;
    color: white;
  }
`;

const mapStateToProps = state => ({
  starWars: state.starWars,
});

const mapDispatchToProps = dispatch => ({
  fetchStarWarsPeopleRequest: () => dispatch(fetchStarWarsPeopleRequest()),
  fetchStarWarsPlanetsRequest: () => dispatch(fetchStarWarsPlanetsRequest()),
  confirmFetchRequest: () => dispatch(confirmFetchRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
