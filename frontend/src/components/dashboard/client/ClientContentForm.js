import React from 'react';
import './ClientContentForm.css';

function ClientContentForm() {
  return (
    <div className="content__main-page">
      <div className="box">
        <ul className="file-list">
          <li><a href="#">📝 Logo Redesign.pdf</a></li>
          <li><a href="#">📊 PitchDeck.pptx</a></li>
          <li><a href="#">📷 Brochure.jpg</a></li>
        </ul>
      </div>
    </div>
  );
}

export default ClientContentForm;
