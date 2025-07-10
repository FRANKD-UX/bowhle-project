import React, { useState } from 'react';
import './EmployeeUploads.css';
import { FaCloudUploadAlt } from 'react-icons/fa';

function EmployeeUploads() {
  const [file, setFile] = useState(null);
  const [link, setLink] = useState('');

  const handleFileDrop = (e) => {
    e.preventDefault();
    const uploadedFile = e.dataTransfer.files[0];
    if (uploadedFile && ['application/pdf', 'image/jpeg', 'image/png'].includes(uploadedFile.type)) {
      setFile(uploadedFile);
    }
  };

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile && ['application/pdf', 'image/jpeg', 'image/png'].includes(uploadedFile.type)) {
      setFile(uploadedFile);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Uploading:', { file, link });
    // upload logic will go here
  };

  return (
    <div className="upload-container">
      <h2>Upload Project File</h2>

      <div
        className="dropzone"
        onDrop={handleFileDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <FaCloudUploadAlt className="cloud-icon" />
        <p>Drag & drop a file here or click to browse</p>
        <input
          type="file"
          accept=".pdf, .jpg, .jpeg, .png"
          onChange={handleFileChange}
        />
        {file && <span className="file-name">Selected: {file.name}</span>}
      </div>

      <div className="link-upload">
        <label htmlFor="upload-link">External Link (WeTransfer, SwissTransfer)</label>
        <input
          type="url"
          id="upload-link"
          placeholder="https://wetransfer.com/yourfile"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      </div>

      <button className="submit-button" onClick={handleSubmit}>
        Submit Upload
      </button>
    </div>
  );
}

export default EmployeeUploads
