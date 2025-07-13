import React from 'react';
import './ClientStatusBox.css';
import { useNavigate } from 'react-router-dom';

function ClientStatusBox() {
  const navigate = useNavigate();

  return (
    <div className="status-box">
      <div className="box__line">
        <h5>Status</h5>
        <span className="published">Active</span>
      </div>
      <div className="box__line">
        <h5>Account</h5>
        <a href="#">Profile</a>
      </div>
      <button className="button" onClick={() => navigate('/client-dashboard/downloads')}>
        Downloads
      </button>
    </div>
  );
}

export default ClientStatusBox;
