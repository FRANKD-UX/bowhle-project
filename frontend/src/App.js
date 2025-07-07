// src/App.js
import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useLocation, Link } from 'react-router-dom';
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
import ClientAccountPage from './components/dashboard/client/ClientAccountPage';
import EmployeeDashboard from './components/dashboard/employee/EmployeeDashboard';

// Homepage layout only (public)
function HomePage() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [animatedSpans, setAnimatedSpans] = useState([]);

  const texts = [
    "Brewing Something Bowtiful",
    "Designing with Soul",
    "Crafting Digital Magic",
    "Where Ideas Come to Life",
    "Building Brands that Speak",
    "Art Meets Strategy"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    }, 4000); // rotate every 4 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const letters = texts[currentTextIndex].split('');
    const spans = letters.map((letter, index) => {
      const delay = Math.floor(Math.random() * 1000);
      return (
        <span key={index} style={{ animationDelay: `${delay}ms` }}>
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      );
    });
    setAnimatedSpans(spans);
  }, [currentTextIndex]);

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
          <h1 className="fancy-heading">{animatedSpans}</h1>
          <div style={{ marginTop: '2rem' }}>
            <Link to="/about" className="button light">
              Get to know us
            </Link>
          </div>
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

          {/* Nest routes under /client-dashboard */}
          <Route path="/client-dashboard" element={<ClientDashboard />}>
            <Route path="account" element={<ClientAccountPage />} />
          </Route>

          <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
        </Routes>
      </main>

      {!isDashboard && <Footer />}
    </div>
  );
}

export default AppWithRoutes;
