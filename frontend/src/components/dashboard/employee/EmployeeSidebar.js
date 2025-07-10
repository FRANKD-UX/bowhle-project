import React from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import './EmployeeSidebar.css';

// Sidebar for Employee Dashboard - navigation between pages
function EmployeeSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <aside className="employee-sidebar">
      <div className="sidebar-top">
        <ul className="sidebar-nav-links">
          <li className={location.pathname === '/employee-dashboard' ? 'active' : ''}>
            <button
              onClick={() => navigate('/employee-dashboard')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                textDecoration: 'none',
                color: 'inherit',
                width: '100%',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
              }}
            >
              <i className="fas fa-home"></i>
              <span>Dashboard</span>
            </button>
          </li>

          <li className={location.pathname.startsWith('/employee-dashboard/uploads') ? 'active' : ''}>
            <Link
              to="/employee-dashboard/uploads"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                textDecoration: 'none',
                color: 'inherit',
                width: '100%',
              }}
            >
              <i className="fas fa-upload"></i>
              <span>Uploads</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="sidebar-bottom">
        <ul className="sidebar-nav-links">

          <li className={location.pathname.startsWith('/employee-dashboard/account') ? 'active' : ''}>
            <Link
              to="/employee-dashboard/account"
              className="sidebar-Account-link"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                textDecoration: 'none',
                color: 'inherit',
                width: '100%',
              }}
            >
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

export default EmployeeSidebar;

