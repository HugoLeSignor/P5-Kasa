import React from 'react';
import './styles/Home.scss'; // On va créer ce fichier pour les styles

const Home = () => {
  const locations = [
    { id: 1, title: 'Titre de la location 1' },
    { id: 2, title: 'Titre de la location 2' },
    { id: 3, title: 'Titre de la location 3' },
    { id: 4, title: 'Titre de la location 4' },
    { id: 5, title: 'Titre de la location 5' },
    { id: 6, title: 'Titre de la location 6' },
  ];

  return (
    <div className="home">
      <div className="hero">
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