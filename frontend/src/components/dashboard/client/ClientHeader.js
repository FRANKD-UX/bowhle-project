import React from 'react';
import './ClientHeader.css';
import logo from '../../../Bowhle-WHITE.png';
import avatar from '../../../assets/images/Avatar-1.png';

function ClientHeader() {
  const currentDate = new Date().toLocaleDateString('en-GB');

  return (
    <header className="client-header">
      <div className="header-left">
        <img src={logo} alt="Bowhle Logo" className="logo" />
      </div>
      <div className="header-center">
        <span>{currentDate}</span>
      </div>
      <div className="header-right">
        <span className="welcome-text">WELCOME, CLIENT</span>
        <img src={avatar} alt="Client Avatar" className="avatar" />
        <button className="submit-btn">Submit a Brief</button>
      </div>
    </header>
  );
}

export default ClientHeader;