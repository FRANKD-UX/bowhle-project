import React from 'react';
import './ClientContentForm.css';

function ClientContentForm() {
  return (
    <section className="client-form">
      <div className="section-title">
        <h2>DASHBOARD</h2>
        <p>CURRENT PROJECT: BRIEF 0001</p>
      </div>
      <div className="project-stages">
        <div className="stage-circle active">Brief Received</div>
        <div className="stage-circle">Design Started</div>
        <div className="stage-circle">Design In Review</div>
        <div className="stage-circle">Design Completed</div>
      </div>

      <div className="past-projects">
        <h3>PAST PROJECTS</h3>
        <div className="project-thumbs">
          <img src="/assets/p1.jpg" alt="Project 1" />
          <img src="/assets/p2.jpg" alt="Project 2" />
          <img src="/assets/p3.jpg" alt="Project 3" />
        </div>
      </div>
    </section>
  );
}

export default ClientContentForm;
