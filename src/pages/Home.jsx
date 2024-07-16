import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.scss'; 

const Home = () => {
  const locations = require('../utils/data.json');

  return (
    <div className="home">
      <div className="banner">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <div className="locations">
        {locations.map((location) => (
          <Link to={`/fiche/${location.id}`} key={location.id} className="location-card">
            <div 
              className="location-card-inner"
              style={{ backgroundImage: `url(${location.cover})` }}
            >
              <h2>{location.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
