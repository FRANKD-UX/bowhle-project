import React from 'react';
import './ClientSidebar.css';

function ClientSidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__sections">
        <ul>
          <li><a href="#"><span>📄</span> Files</a></li>
          <li><a href="#"><span>🔔</span> Notifications</a></li>
          <li><a href="#"><span>❓</span> Help</a></li>
        </ul>
      </div>
      <div className="sidebar__subsections">
        <div className="sidebar__subsections-brand">Client 1.0</div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Downloads</a></li>
          <li><a href="#">Account</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
      </div>
    </aside>
  );
}

export default ClientSidebar;
