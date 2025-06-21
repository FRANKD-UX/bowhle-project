import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Imports the React Router routing tools

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomeIntro from './components/pages/homepage/HomeIntro/HomeIntro';
import PortfolioCards from './components/pages/homepage/PortfolioCards/PortfolioCards';
import Brands from './components/pages/homepage/Brands/Brands';
import Testimonials from './components/pages/homepage/Testimonials/Testimonials';
import About from './components/pages/about/About';
import Login from './components/auth/Login';


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
  console.log('AppWithRoutes component is being rendered');
  return (
    <>
    <div className='page-wrapper'>
    <Header />
    <main className='main-content'>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </main>
    <Footer />
    </div>
    </>
  );
}

export default AppWithRoutes;