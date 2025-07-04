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
      <div className="sidebar-logo">BOWHLE</div>
      <nav className="sidebar-nav">
        <ul>
          <li className="active"><i className="fas fa-home"></i> Dashboard</li>
          <li><i className="fas fa-download"></i> Downloads</li>
          <li><i className="fas fa-briefcase"></i> Projects</li>
          <li><i className="fas fa-user"></i> Account</li>
          <li><i className="fas fa-bell"></i> Notifications</li>
          <li><i className="fas fa-sign-out-alt"></i> <a href="/" onClick={handleLogout}>Logout</a></li>
        </ul>
      </nav>
    </aside>
  );
}

export default ClientSidebar;
