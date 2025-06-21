import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; // Imports the React Router routing tools

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomeIntro from './components/pages/homepage/HomeIntro/HomeIntro';
import PortfolioCards from './components/pages/homepage/PortfolioCards/PortfolioCards';
import Brands from './components/pages/homepage/Brands/Brands';
import Testimonials from './components/pages/homepage/Testimonials/Testimonials';
import About from './components/pages/about/About';
import Login from './components/auth/Login';
import Loader from './components/common/Loader';


// This is the homepage content only
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

// This App handles page routing
function AppWithRoutes() {
  // This is a debug log to check if the component is being rendered
  const location = useLocation();
  console.log('Current location:', location.pathname);
  const isLoginPage = location.pathname == '/login';
  console.log('AppWithRoutes component is being rendered');
  
  return (
    <>
    <div className='page-wrapper'>
      {!isLoginPage && <Header />}

    <main className='main-content'>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </main>

    {isLoginPage && <Footer />}
    </div>
    </>
  );
}

export default AppWithRoutes;