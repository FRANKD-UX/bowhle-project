import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logoImage from '../../Bowhle-WHITE.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky-header">
      <nav className="header-navbar">
        <div className="header-nav-left">
          <div className="header-logo">
            <a href="/home">
            <img src={logoImage} alt="Bowhle Logo" />
            </a>
          </div>
        </div>

        <div className="header-nav-center">
          <ul className={`header-nav-links ${isMenuOpen ? 'open' : ''}`}>
            <li><Link to="/home" style={{ '--i': 0 }} onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/about" style={{ '--i': 1 }} onClick={toggleMenu}>About</Link></li>
            <li><Link to="/services" style={{ '--i': 2 }} onClick={toggleMenu}>Services</Link></li>
            <li><Link to="/portfolio" style={{ '--i': 3 }} onClick={toggleMenu}>Portfolio</Link></li>
            <li><Link to="/letsconnect" style={{ '--i': 4 }} onClick={toggleMenu}>Let's Connect</Link></li>

            <li className="header-mobile-auth">
              <Link to="/login" className="header-login-button" onClick={toggleMenu}>Login</Link>
              <Link to="/signup" className="header-signup-button" onClick={toggleMenu}>Sign Up</Link>
            </li>
          </ul>
        </div>

        <div className="header-nav-right">
          <div className="header-auth-buttons">
            <Link to="/login" className="header-login-button">Login</Link>
            <Link to="/signup" className="header-signup-button">Sign Up</Link>
          </div>
        </div>

        <button className="header-hamburger-button" onClick={toggleMenu}>
          <svg viewBox="0 0 100 100">
            <path fill="none" stroke="#fff" strokeWidth="10" d="M 20 20 C 24 20 36 20 50 20 C 64 20 76 20 80 20" />
            <path stroke="#fff" strokeWidth="10" d="M20 50h30h30" />
            <path fill="none" stroke="#fff" strokeWidth="10" d="M 20 80 C 24 80 36 80 50 80 C 64 80 76 80 80 80" />
          </svg>
        </button>
      </nav>
    </header>
  );
}

export default Header;
