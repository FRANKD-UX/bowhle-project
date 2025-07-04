import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ClientSidebar.css';

function ClientSidebar() {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <aside className="client-sidebar">
      <div className="sidebar-top">
        <ul className="nav-links">
          <li className="active">
            <i className="fas fa-home"></i>
            <span>Dashboard</span>
          </li>
          <li>
            <i className="fas fa-download"></i>
            <span>Downloads</span>
          </li>
          <li>
            <i className="fas fa-briefcase"></i>
            <span>Projects</span>
          </li>
        </ul>
      </div>

      <div className="sidebar-bottom">
        <ul className="nav-links">
          <li>
            <i className="fas fa-user"></i>
            <span>Account</span>
          </li>
          <li>
            <i className="fas fa-bell"></i>
            <span>Notifications</span>
          </li>
          <li onClick={handleLogout} className="logout-link">
            <i className="fas fa-sign-out-alt"></i>
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default ClientSidebar;
