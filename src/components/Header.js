import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav>
      <div className="logo-container">
        <img src={process.env.PUBLIC_URL + '/images/header_logo.png'} alt="Get Set Move Logo" className="header-logo" />
      </div>
      <div className="logo-text">GET SET MOOVE</div>
      <div className={`hamburger-menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>
      {menuOpen && (
        <div className="mobile-menu-popover">
          <ul className="mobile-nav-links">
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#services" onClick={closeMenu}>Our Services</a></li>
            <li><a href="#quote" onClick={closeMenu}>Get Quote</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;