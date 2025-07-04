import React from 'react';
import './ClientProjects.css';

function ClientProjects() {
  const steps = ["Brief Received", "Design Started", "Design In Review", "Design Completed"];
  const thumbnails = [
    'https://via.placeholder.com/160x120',
    'https://via.placeholder.com/160x120',
    'https://via.placeholder.com/160x120'
  ];

  return (
    <div className="client-projects">
      <h2>DASHBOARD</h2>
      <div className="timeline-card">
        <h4>CURRENT PROJECT: BRIEF 0001</h4>
        <div className="progress-bar">
          {steps.map((step, index) => (
            <div className="progress-step" key={index}>{step}</div>
          ))}
        </div>
      </div>

      <div className="past-projects-card">
        <h4>PAST PROJECTS</h4>
        <div className="project-gallery">
          {thumbnails.map((url, index) => (
            <div className="thumbnail" key={index}>
              <img src={url} alt={`Project ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClientProjects;