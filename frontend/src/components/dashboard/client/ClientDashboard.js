import React from 'react';
import './ClientDashboard.css';

import ClientHeader from './ClientHeader';
import ClientProjects from './ClientProjects';
import ClientStatusBox from './ClientStatusBox';
import ClientSidebar from './ClientSidebar';

// This code defines the main structure of the client dashboard, 
// integrating the sidebar, header, projects, and status box components.
function ClientDashboard() {
  return (
    <div className="client-dashboard-wrapper">
      <ClientSidebar />

      <div className="client-dashboard-content">
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
    </div>
  );
}

export default ClientDashboard;
