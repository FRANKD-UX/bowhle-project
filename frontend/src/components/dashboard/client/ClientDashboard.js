import React from 'react';
import './ClientDashboard.css';
import ClientHeader from './ClientHeader';
import ClientProjects from './ClientProjects';
import ClientStatusBox from './ClientStatusBox';

function ClientDashboard() {
  return (
    <div className="client-dashboard">
      <ClientHeader />
      <main className="client-main">
        <section className="client-projects-section">
          <ClientProjects />
        </section>
        <aside className="client-status-sidebar">
          <ClientStatusBox />
        </aside>
      </main>
    </div>
  );
}

export default ClientDashboard;