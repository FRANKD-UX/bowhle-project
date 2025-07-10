import React from 'react';
import './EmployeeProjects.css';
import project1Img from '../../../assets/images/Project1.png';
import project2Img from '../../../assets/images/Project2.png';
import project3Img from '../../../assets/images/Project3.png';

// This component displays the employee's current project status and past projects with thumbnails.
// It includes a progress bar for the current project and a gallery of past project thumbnails.

function ClientProjects() {
  const steps = ["Brief Received", "Design Started", "Design In Review", "Design Completed"];
  const thumbnails = [project1Img, project2Img, project3Img];
  // The steps array represents the stages of the current project.
  // The thumbnails array contains the image URLs for past projects.

  return (
    <div className="employee-projects">
      <h2>DASHBOARD</h2>
      <div className="timeline-card">
        <h4>Current Brief: Brief 0001</h4>
        <div className="progress-bar">
          {steps.map((step, index) => (
            <div className="progress-step" key={index}>{step}</div>
          ))}
        </div>
      </div>

      <div className="past-projects-card">
        <h4>Current Projects</h4>
        <div className="project-gallery">
          {thumbnails.map((img, index) => (
            <div className="thumbnail" key={index}>
              <img src={img} alt={`Project ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClientProjects;