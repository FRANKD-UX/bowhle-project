import React from 'react';
import { useNavigate } from 'react-router-dom'; // 🧭 import navigate hook
import './EmployeeHeader.css';
import logo from '../../../Bowhle-WHITE.png';
import avatar from '../../../assets/images/Avatar-1.png';

function EmployeeHeader() {
  const navigate = useNavigate(); // hook to programmatically navigate
  const currentDate = new Date().toLocaleDateString('en-GB');

  const handleUploadClick = () => {
    navigate('/employee-dashboard/uploads');
  };

  return (
    <header className="employee-header">
      <div className="header-left">
        <img src={logo} alt="Bowhle Logo" className="logo" />
      </div>
      <div className="header-center">
        <span>{currentDate}</span>
      </div>
      <div className="header-right">
        <span className="welcome-text">Welcome, Employee</span>
        <img src={avatar} alt="Employee Avatar" className="avatar" />
        <button className="submit-btn" onClick={handleUploadClick}>
          Upload Design
        </button>
      </div>
    </header>
  );
}

export default EmployeeHeader;
