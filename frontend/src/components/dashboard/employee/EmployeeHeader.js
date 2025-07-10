import React from 'react';
import './EmployeeHeader.css';
import logo from '../../../Bowhle-WHITE.png';
import avatar from '../../../assets/images/Avatar-1.png';

function EmployeeHeader() {
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
        <span className="welcome-text">WELCOME, EMPLOYEE</span>
        <img src={avatar} alt="Employee Avatar" className="avatar" />
        <button className="submit-btn">Upload Design</button>
      </div>
    </header>
  );
}

export default EmployeeHeader;