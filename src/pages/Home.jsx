import React from 'react';
import './styles/Home.scss'; 


const Home = () => {
  const locations = require ('../utils/data.json')
  
  return (
    <div className="home">
      <div className="banner">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <div className="locations">
        {locations.map((location) => (
          <div key={location.id} className="location-card">

            <h2>{location.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;