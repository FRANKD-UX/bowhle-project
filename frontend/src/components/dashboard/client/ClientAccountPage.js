import React, { useState } from 'react';
import './ClientAccountPage.css';
import avatar from '../../../assets/images/Avatar-2.png';

// This component renders the account page for a client,
// allowing them to view and edit their personal information and settings.

function AccountPage() {
  const [activeTab, setActiveTab] = useState('personal');

  return (
    <div className="account-page">
      <aside className="account-sidebar">
        <div className="account-avatar-wrapper">
          <img src={avatar} alt="Client Avatar" className="avatar" />
          <button className="change-avatar-button">📷</button>
          <h3 className="client-name">Name Surname</h3>
          <p className="client-id">Client 0001</p>
        </div>

        <div className="account-tabs">
          <button
            className={`account-tab ${activeTab === 'personal' ? 'active' : ''}`}
            onClick={() => setActiveTab('personal')}
          >
            <i className="fas fa-user-circle"></i>
            Personal Information
          </button>
          <button
            className={`account-tab ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            <i className="fas fa-cog"></i>
            Settings
          </button>
        </div>
      </aside>

      <div className="account-content">
        {activeTab === 'personal' ? (
          <div className="personal-info">
            <h2>Personal Information</h2>
            <form className="info-form">
              <div className="form-group">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>
              <div className="form-group">
                <input type="text" placeholder="We Can Call You" />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email Address" />
                <input type="email" placeholder="Alternative Email Address" />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Business Address" className="full-width" />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Contact Tel Number" />
                <input type="text" placeholder="Contact Cell Number" />
              </div>
              <div className="form-buttons">
                <button type="button" className="btn-outline">Cancel</button>
                <button type="submit" className="btn-filled">Save Changes</button>
              </div>
            </form>
          </div>
        ) : (
          <div className="settings-info">
            <h2>Settings</h2>
            <form className="info-form">
              <div className="form-group">
                <input type="password" placeholder="Current Password" />
              </div>
              <div className="form-group">
                <input type="password" placeholder="New Password" />
              </div>
              <div className="form-group">
                <input type="password" placeholder="Confirm New Password" />
              </div>
              <div className="form-buttons">
                <button type="button" className="btn-outline">Cancel</button>
                <button type="submit" className="btn-filled">Save Changes</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default AccountPage;
