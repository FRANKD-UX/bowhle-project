import React from 'react';
import './EmployeeDashboard.css';

function EmployeeDashboard() {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Dashboard</h2>
        <nav>
          <ul>
            <li>Upload Design</li>
            <li>Notifications</li>
            <li>Logout</li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <header className="dashboard-header">
          <h1>Welcome, Employee 👋</h1>
        </header>

        <section className="upload-area">
          <h2>Upload a Design</h2>
          <input type="file" accept=".pdf,.doc,.docx,.jpg,.png,.ppt,.pptx" />
          <input type="url" placeholder="Or paste an external link (e.g. WeTransfer)" />
          <button>Submit</button>
        </section>
      </main>
    </div>
  );
}

export default EmployeeDashboard;
