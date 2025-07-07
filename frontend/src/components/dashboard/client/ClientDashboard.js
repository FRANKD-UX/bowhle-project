// src/components/dashboard/client/ClientDashboard.js
import React from 'react';
import './ClientDashboard.css';

import ClientHeader from './ClientHeader';
import ClientSidebar from './ClientSidebar';
import ClientProjects from './ClientProjects';
import ClientStatusBox from './ClientStatusBox';
import { Outlet, useLocation } from 'react-router-dom';

// This component defines the structure of the client dashboard layout.
// It uses <Outlet /> for nested routing and conditionally displays main widgets only at the dashboard root.

function ClientDashboard() {
  const location = useLocation();
  const isOnDashboardRoot = location.pathname === '/client-dashboard';

  return (
    <div className="client-dashboard-wrapper">
      <ClientSidebar />

      <div className="client-dashboard-content">
        <ClientHeader />

        <main className="client-main">
          {isOnDashboardRoot ? (
            <>
              <section className="client-projects-section">
                <ClientProjects />
              </section>

              <aside className="client-status-sidebar">
                <ClientStatusBox />
              </aside>
            </>
          ) : (
            <Outlet />
          )}
        </main>
      </div>
    </div>
  );
}

export default ClientDashboard;
