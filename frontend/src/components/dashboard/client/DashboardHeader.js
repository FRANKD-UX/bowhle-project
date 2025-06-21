import React from 'react';
import './DashboardHeader.css';

function DashboardHeader() {
  return (
    <header className="header">
      <div className="header__search">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="header__date" id="date"></div>
      <div className="header__user">Welcome, Client</div>
    </header>
  );
}

export default DashboardHeader;
