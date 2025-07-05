import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
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
        <ul className="sidebar-nav-links">
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
        <ul className="sidebar-nav-links">
          <li>
            <i className="fas fa-user"></i>
            <span>Account</span>
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
