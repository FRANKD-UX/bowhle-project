import React from 'react';
import './ClientStatusBox.css';

function ClientStatusBox() {
  return (
    <aside className="content__main-sidebar" id="status">
      <div className="box">
        <div className="box__line">
          <h5>Status</h5>
          <span className="published">Active</span>
        </div>
        <div className="box__line">
          <h5>Account</h5>
          <a href="#">Profile</a>
        </div>
        <button className="button">Download All</button>
      </div>
    </aside>
  );
}

export default ClientStatusBox;
