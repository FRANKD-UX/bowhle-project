import React, { useEffect } from 'react';
import './ClientDashboard.css';
import ClientSidebar from './ClientSidebar';
import DashboardHeader from './DashboardHeader';
import ClientContentForm from './ClientContentForm';
import ClientStatusBox from './ClientStatusBox';

function ClientDashboard() {
  useEffect(() => {
    const titleBar = document.getElementById("title-bar");
    const statusBox = document.getElementById("status");

    const handleScroll = () => {
      if (window.pageYOffset >= titleBar.offsetTop) {
        titleBar.classList.add("sticky");
      } else {
        titleBar.classList.remove("sticky");
      }

      if (window.pageYOffset >= 100) {
        statusBox.classList.add("stickyside");
      } else {
        statusBox.classList.remove("stickyside");
      }
    };

    window.addEventListener("scroll", handleScroll);

    const date = new Date();
    document.getElementById("date").textContent = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="dashboard-wrapper">
      <ClientSidebar />
      <div className="page">
        <DashboardHeader />
        <div className="content">
          <div className="title" id="title-bar">
            <div className="title__text">
              <span>Submissions</span>
              <h1>Submitted Files</h1>
            </div>
            <div className="title__extras">
              <span>⭐ Most Recent</span>
            </div>
          </div>
          <div className="content__main">
            <ClientContentForm />
            <ClientStatusBox />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientDashboard;
