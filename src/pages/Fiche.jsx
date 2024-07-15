import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles/Fiche.scss';

const Fiche = () => {
  const { id } = useParams();
  const locations = require('../utils/data.json');
  const location = locations.find(loc => loc.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!location) {
    return <div>Logement non trouvé</div>;
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === location.pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? location.pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="fiche">
      <div className="carousel">
        <img src={location.pictures[currentImageIndex]} alt={location.title} className="carousel-image" />
        {location.pictures.length > 1 && (
          <>
            <button onClick={prevImage} className="carousel-button prev">&lt;</button>
            <button onClick={nextImage} className="carousel-button next">&gt;</button>
            <div className="carousel-counter">{currentImageIndex + 1} / {location.pictures.length}</div>
          </>
        )}
      </div>
      <div className="fiche-content">
        <h1>{location.title}</h1>
        <p>{location.location}</p>
        <div className="tags">
          {location.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        <div className="host">
          <p>{location.host.name}</p>
          <img src={location.host.picture} alt={location.host.name} />
        </div>
        <div className="rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className={star <= location.rating ? "star filled" : "star"}>★</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fiche;