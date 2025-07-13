import React from 'react';
import './ClientDownloads.css';

const mockFiles = [
  { name: 'Design_Mockup_001.pdf', url: '/files/Exuviance_Campaign_Poster.pdf' },
  { name: 'Final_Logo.zip', url: '/files/Bella_Prospecting_Statics.zip' },
  { name: 'Social_Posts.png', url: '/files/Consumer_Instagram_Post.png' }
];

// This component displays a list of downloadable files for the client.
// Each file has a name and a download link.

function ClientDownloads() {
  return (
    <div className="client-downloads">
      <h2>Your Downloadable Files</h2>
      <ul className="file-list">
        {mockFiles.map((file, index) => (
          <li key={index} className="file-item">
            <span>{file.name}</span>
            <a href={file.url} download className="download-btn">
              Download
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientDownloads;
