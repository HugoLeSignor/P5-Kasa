import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.scss'; // On va créer ce fichier pour les styles

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Kasa</div>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </nav>
    </header>
  );
};

export default Header;