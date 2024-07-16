import React, { useState, useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import locations from '../utils/data.json';
import './styles/Fiche.scss';

const Fiche = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [openMenus, setOpenMenus] = useState([]);
  const [imageLoaded, setImageLoaded] = useState(false);

  const location = useMemo(() => locations.find(loc => loc.id === id), [id]);

  if (!location) {
    return <Navigate to="/error" />;
  }

  const nextImage = () => {
    setCurrentImageIndex(prevIndex => 
      prevIndex === location.pictures.length - 1 ? 0 : prevIndex + 1
    );
    setImageLoaded(false);
  };

  const prevImage = () => {
    setCurrentImageIndex(prevIndex => 
      prevIndex === 0 ? location.pictures.length - 1 : prevIndex - 1
    );
    setImageLoaded(false);
  };

  const toggleMenu = (menu) => {
    setOpenMenus(prevOpenMenus => 
      prevOpenMenus.includes(menu)
        ? prevOpenMenus.filter(item => item !== menu)
        : [...prevOpenMenus, menu]
    );
  };

  const menuItems = [
    {
      title: 'Description',
      content: <p>{location.description}</p>,
    },
    {
      title: 'Équipements',
      content: (
        <ul>
          {location.equipments.map((equipement, index) => (
            <li key={index}>{equipement}</li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <div className="fiche">
      <div className="carousel">
        {!imageLoaded && <div className="loading">Loading...</div>}
        <img 
          src={location.pictures[currentImageIndex]} 
          alt={`${location.title} - Image ${currentImageIndex + 1}`} 
          className={`carousel-image ${imageLoaded ? 'loaded' : ''}`}
          onLoad={() => setImageLoaded(true)}
        />
        {location.pictures.length > 1 && (
          <>
            <button onClick={prevImage} className="carousel-button prev" aria-label="Previous image">
              &lt;
            </button>
            <button onClick={nextImage} className="carousel-button next" aria-label="Next image">
              &gt;
            </button>
            <div className="carousel-counter" aria-live="polite">
              {currentImageIndex + 1} / {location.pictures.length}
            </div>
          </>
        )}
      </div>
      <div className="fiche-content">
        <div className="left-column">
          <h1>{location.title}</h1>
          <p>{location.location}</p>
          <div className="tags">
            {location.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>
        <div className="right-column">
          <div className="host">
            <p>{location.host.name}</p>
            <img src={location.host.picture} alt={`Host ${location.host.name}`} />
          </div>
          <div className="rating" aria-label={`Rating: ${location.rating} out of 5 stars`}>
            {[1, 2, 3, 4, 5].map(star => (
              <span key={star} className={star <= location.rating ? "star filled" : "star"}>
                ★
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className='menu-container'>
        {menuItems.map((item, index) => (
          <div key={index} className='menu-item'>
            <div className='menu-header'>
              <button 
                onClick={() => toggleMenu(item.title)} 
                className='menu-title'
                aria-expanded={openMenus.includes(item.title)}
              >
                {item.title}
                <span className={`arrow ${openMenus.includes(item.title) ? 'open' : ''}`}>
                  ▼
                </span>
              </button>
            </div>
            <div className={`menu-content ${openMenus.includes(item.title) ? 'open' : ''}`}>
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fiche;