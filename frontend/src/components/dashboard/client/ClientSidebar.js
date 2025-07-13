import React from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import './ClientSidebar.css';

function ClientSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="client-sidebar">
      <div className="sidebar-top">
        <ul className="sidebar-nav-links">
          <li className={isActive('/client-dashboard') ? 'active' : ''}>
            <Link to="/client-dashboard" style={linkStyle}>
              <i className="fas fa-home"></i>
              <span>Dashboard</span>
            </Link>
          </li>

          <li className={isActive('/client-dashboard/downloads') ? 'active' : ''}>
            <Link to="/client-dashboard/downloads" style={linkStyle}>
              <i className="fas fa-download"></i>
              <span>Downloads</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="sidebar-bottom">
        <ul className="sidebar-nav-links">
          <li className={isActive('/client-dashboard/account') ? 'active' : ''}>
            <Link to="/client-dashboard/account" style={linkStyle}>
              <i className="fas fa-user"></i>
              <span>Account</span>
            </Link>
          </li>
          <li>
            <i className="fas fa-bell"></i>
            <span>Notifications</span>
          </li>
          <li className="sidebar-logout-link">
            <Link to="/home" onClick={handleLogout} style={linkStyle}>
              <i className="fas fa-sign-out-alt"></i>
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

const linkStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  textDecoration: 'none',
  color: 'inherit',
  width: '100%',
};

export default ClientSidebar;
