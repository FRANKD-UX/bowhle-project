import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './ClientSidebar.css';

// This component renders the sidebar for the client dashboard,
// providing navigation links to different sections like Dashboard, Downloads, Projects, Account, Notifications, and Logout.

function ClientSidebar() {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <aside className="client-sidebar">
      <div className="sidebar-top">
        <ul className="sidebar-nav-links">
          <li className="active">
            <i className="fas fa-home"></i>
            <span>Dashboard</span>
          </li>
          <li>
            <i className="fas fa-download"></i>
            <span>Downloads</span>
          </li>
        </ul>
      </div>

      <div className="sidebar-bottom">
        <ul className="sidebar-nav-links">
          <li>
            <Link to="/client-dashboard/account" 
            className="sidebar-Account-link" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.75rem', 
              textDecoration: 'none', 
              color: 'inherit', 
              width: '100%' 
            }}>
              <i className="fas fa-user"></i>
              <span>Account</span>
            </Link>
          </li>
          <li>
            <i className="fas fa-bell"></i>
            <span>Notifications</span>
          </li>
          <li className="sidebar-logout-link">
            <Link
              to="/home"
              onClick={handleLogout}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                color: 'inherit',
                textDecoration: 'none',
                width: '100%',
              }}
            >
              <i className="fas fa-sign-out-alt"></i>
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default ClientSidebar;
