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
    /* Header */
    <header className="sticky-header">
      <nav className="navbar">
        <div className='nav-left'>
        <div className="logo">
          <img src={logoImage} alt="Bowhle Logo" />
        </div>
        </div>

        {/* Navigation Links */}
        <div className='nav-center'>
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><Link to="/home" style={{ '--i': 0 }} onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" style={{ '--i': 1 }} onClick={toggleMenu}>About</Link></li>
          <li><Link to="/services" style={{ '--i': 2 }} onClick={toggleMenu}>Services</Link></li>
          <li><Link to="/portfolio" style={{ '--i': 3 }} onClick={toggleMenu}>Portfolio</Link></li>
          <li><Link to="/contact" style={{ '--i': 4 }} onClick={toggleMenu}>Let's Connect</Link></li>

          {/* Auth buttons (mobile only) */}
          <li className="mobile-auth">
            <Link to="/login" className="login-button" onClick={toggleMenu}>Login</Link>
            <Link to="/signup" className="signup-button" onClick={toggleMenu}>Sign Up</Link>
          </li>
        </ul>
        </div>

        {/* Authentication Buttons */}
        <div className='nav-right'>
        <div className='auth-buttons'>
          <Link to="/login" className="login-button">Login</Link>
          <Link to="/signup" className="signup-button">Sign Up</Link>
        </div>
        </div>
        
        <button className="hamburger-button" onClick={toggleMenu}>
          {/* Hamburger Menu strokes */}
          <svg viewBox="0 0 100 100">
            <path fill="none" stroke="#fff" strokeWidth="10" d="M 20 20 C 24 20 36 20 50 20 C 64 20 76 20 80 20">
              <animate attributeName="d" values="M 20 20 C 24 20 36 20 50 20 C 64 20 76 20 80 20; M 20 20 C 37 37 37 37 50 50 C 63 37 63 37 80 20" dur=".5s" begin="menuBtn.click" repeatCount="0" fill="freeze" />
              <animate attributeName="d" values="M 20 20 C 37 37 37 37 50 50 C 63 37 63 37 80 20; M 20 20 C 24 20 36 20 50 20 C 64 20 76 20 80 20" dur=".5s" repeatCount="none" begin="backToMenu.click" fill="freeze" />
            </path>
            <path stroke="#fff" strokeWidth="10" d="M20 50h30h30">
              <animate attributeName="d" values="M 20 50 h 30 h 30; M 50 50 h 0 h 0" dur=".5s" begin="menuBtn.click" repeatCount="0" fill="freeze" />
              <animate attributeName="d" values="M 50 50 h 0 h 0; M 20 50 h 30 h 30" dur=".5s" repeatCount="none" begin="backToMenu.click" fill="freeze" />
            </path>
            <path fill="none" stroke="#fff" strokeWidth="10" d="M 20 80 C 24 80 36 80 50 80 C 64 80 76 80 80 80">
              <animate attributeName="d" values="M 20 80 C 24 80 36 80 50 80 C 64 80 76 80 80 80; M 20 80 C 37 63 37 63 50 50 C 63 63 63 63 80 80" dur=".5s" begin="menuBtn.click" repeatCount="0" fill="freeze" />
              <animate attributeName="d" values="M 20 80 C 37 63 37 63 50 50 C 63 63 63 63 80 80; M 20 80 C 24 80 36 80 50 80 C 64 80 76 80 80 80" dur=".5s" repeatCount="none" begin="backToMenu.click" fill="freeze" />
            </path>

            {/* Cover squares for animation triggers */}
            <path id="backToMenu" d="M 0 0 h100v100h-100z" fill="rgba(0,0,0,0)" stroke="none">
              <animate attributeName="d" values="M 0 0 h0v0h0z; M 0 0 h100v100h-100z" dur="1ms" repeatCount="none" begin="menuBtn.click" fill="freeze" />
              <animate attributeName="d" values="M 0 0 h100v100h-100z; M 0 0 h0v0h0z" dur="1ms" repeatCount="none" begin="backToMenu.click" fill="freeze" />
            </path>
            <path id="menuBtn" d="M 0 0 h100v100h-100z" fill="rgba(0,0,0,0)">
              <animate attributeName="d" values="M 0 0 h100v100h-100z; M 0 0 h0v0h0z" dur="1ms" repeatCount="none" begin="menuBtn.click" fill="freeze" />
              <animate attributeName="d" values="M 0 0 h0v0h0z; M 0 0 h100v100h-100z" dur="1ms" repeatCount="none" begin="backToMenu.click" fill="freeze" />
            </path>
          </svg>
        </button>
      </nav>
    </header>
  );
}

export default Header;