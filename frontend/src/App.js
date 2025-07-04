import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import HomeIntro from './components/pages/homepage/HomeIntro/HomeIntro';
import PortfolioCards from './components/pages/homepage/PortfolioCards/PortfolioCards';
import Brands from './components/pages/homepage/Brands/Brands';
import Testimonials from './components/pages/homepage/Testimonials/Testimonials';
import About from './components/pages/about/About';

import Login from './components/auth/Login';
import Signup from './components/auth/Signup';

import ClientDashboard from './components/dashboard/client/ClientDashboard';
import EmployeeDashboard from './components/dashboard/employee/EmployeeDashboard';

// Homepage layout only (public)
function HomePage() {
  return (
    <>
      <div className="hero-container">
        <video autoPlay loop muted playsInline className="background-video">
          <source
            src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/82f375e7-244f-4c21-90ac-9abd7549ed05"
            type="video/mp4"
          />
        </video>
        <section className="content">
          <h1>BREWING SOMETHING BEAUTIFUL</h1>
          <a href="#" className="button light">EXPLORE OUR WORK</a>
        </section>
      </div>
      <Header />
      <HomeIntro />
      <PortfolioCards />
      <Brands />
      <Testimonials />
    </>
  );
}

function AppWithRoutes() {
  const location = useLocation();

  // Detect if we're on a dashboard route
  const isDashboard =
    location.pathname.startsWith('/client-dashboard') ||
    location.pathname.startsWith('/employee-dashboard');

  return (
    <div className="page-wrapper">
      {!isDashboard && <Header />}

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/client-dashboard" element={<ClientDashboard />} />
          <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
        </Routes>
      </main>

      {!isDashboard && <Footer />}
    </div>
  );
}

export default AppWithRoutes;
