import React, { useState } from 'react';
import './SubmitBriefModal.css';

function SubmitBriefModal({ onClose }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <div className="brief-modal-overlay">
      <div className="brief-modal">
        {submitted ? (
          <div className="submitted-message">Brief submitted successfully</div>
        ) : (
          <form className="brief-form" onSubmit={handleSubmit}>
            <h2>Marketing Brief</h2>

            <label>For which client do you want to submit this brief?</label>
            <select required>
              <option value="">-- Please select --</option>
              <option value="Client 0001">Client 0001</option>
              <option value="Client 0002">Client 0002</option>
            </select>

            <label>Project Description</label>
            <textarea placeholder="Briefly explain what you're requesting..." required></textarea>

            <label>Medium</label>
            <div className="checkbox-group">
              <label><input type="checkbox" /> SMS</label>
              <label><input type="checkbox" /> WhatsApp</label>
              <label><input type="checkbox" /> Social Media Posts</label>
              <label><input type="checkbox" /> Email</label>
            </div>

            <label>Specific Print Requirements</label>
            <input type="text" placeholder="e.g. poster size, bleed area, format" />

            <label>Project Brief Information</label>
            <textarea placeholder="More detailed breakdown of the project..." required></textarea>

            <label>Upload Document</label>
            <input type="file" />

            <label>Delivery Pictures</label>
            <input type="file" />

            <label>Do you need assistance with printing?</label>
            <div className="radio-group">
              <label><input type="radio" name="printing" value="yes" /> Yes</label>
              <label><input type="radio" name="printing" value="no" /> No</label>
            </div>

            <button type="submit" className="submit-brief-btn">Submit Brief</button>
          </form>
        )}
        <button className="close-btn" onClick={onClose}>×</button>
      </div>
    </div>
  );
}

export default SubmitBriefModal;
