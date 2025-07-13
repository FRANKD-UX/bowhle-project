import React from 'react';
import './EmployeeDashboard.css';

import EmployeeHeader from './EmployeeHeader';
import EmployeeSidebar from './EmployeeSidebar';
import EmployeeProjects from './EmployeeProjects';
import EmployeeStatusBox from './EmployeeStatusBox';

import { Outlet, useLocation } from 'react-router-dom';

// This component defines the structure of the employee dashboard layout.
// It mirrors the ClientDashboard layout and uses <Outlet /> for nested routing.

function EmployeeDashboard() {
  const location = useLocation();
  const isOnDashboardRoot = location.pathname === '/employee-dashboard';

  return (
    <div className="employee-dashboard-wrapper">
      <EmployeeSidebar />

      <div className="employee-dashboard-content">
        <EmployeeHeader />

        <main className="employee-main">
          {isOnDashboardRoot ? (
            <>
              <section className="employee-projects-section">
                <EmployeeProjects />
              </section>

              <aside className="employee-status-sidebar">
                <EmployeeStatusBox />
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

export default EmployeeDashboard;