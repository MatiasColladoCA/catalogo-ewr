import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ scrolled = false }) => {
  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <Link to="/" className="logo">
          <span className="logo-main">Catálogo</span>
          <span className="logo-accent">Educativo</span>
        </Link>
        
        <nav className="navigation">
          <Link to="/" className="nav-link">
            <span>Inicio</span>
            <div className="link-underline"></div>
          </Link>
          <Link to="/categorias" className="nav-link">
            <span>Categorías</span>
            <div className="link-underline"></div>
          </Link>
          <Link to="/buscar" className="nav-link">
            <span>Buscar</span>
            <div className="link-underline"></div>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
