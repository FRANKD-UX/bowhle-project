import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Imports the React Router routing tools

import './App.css';
import Header from './components/header/header';
import Footer from './components/Footer/Footer';

/**
 * The main App component.
 * @returns {React.ReactElement} The JSX element to render.
 * This component renders the main hero section of the page,
 * which includes a background video, a header, a section with a heading
 * and a call-to-action button, a home intro section, and a section
 * with a list of portfolio cards.
 */

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
    </>
  );
}

// This App handles page routing
function AppWithRoutes() {
  console.log('AppWithRoutes component is being rendered');
  return (
    <>
    <Header />
    <Routes>
      <Route path="/home" element={<HomePage />} />
    </Routes>
    <Footer />
    </>
  );
}

export default AppWithRoutes;