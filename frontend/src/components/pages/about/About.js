import React from 'react';
import './About.css';
import AboutBanner from '../../../assets/images/AboutBanner.jpg';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  return (
    <div className="about-wrapper">
      {/* Header Banner */}
      <div className="about-banner">
        <img src={AboutBanner} alt="Bowhle About Us Banner" />
      </div>

      {/* Main About Section */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-text">
            <h2 className="about-heading">
              Some say we’re the agency of the future. We’re just brewing the next big thing.
            </h2>
            <p>
              We craft more than websites — we shape digital love letters from brands to their people.
              We blend design, code and a sprinkle of brilliance to make work that’s not only functional but freakin’ unforgettable.
            </p>
            <p>
              <strong>Our mission?</strong> Keep it human, clean and wildly effective. We believe great design should feel like a good conversation,
              warm, intentional and deeply you.
            </p>
            <p>
              From pixel to prototype, copy to code, we bring bold ideas to life with sass, soul and strategy. 
              Whether you need a brand glow-up, a website that works overtime, or a team that just *gets it* — we’re your people.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <h3>Our Journey</h3>
        <div className="timeline-container">
          <div className="timeline-item">
            <span className="year">2018</span>
            <p>Just me, a laptop, and a whole lot of coffee. Bowhle began as a one-person freelance dream.</p>
          </div>
          <div className="timeline-item">
            <span className="year">2021</span>
            <p>Grew into a tiny team! Took on clients, polished our design chops, and began thinking bigger.</p>
          </div>
          <div className="timeline-item">
            <span className="year">2024</span>
            <p>We leveled up. Mastered our crafts, expanded our services, and built things we once only imagined.</p>
          </div>
          <div className="timeline-item">
            <span className="year">2025</span>
            <p>We built this very app. The Bowhle vision is now a shared journey — let’s make magic together.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="cta-sparkles">
          <span className="sparkle sparkle-1"></span>
          <span className="sparkle sparkle-2"></span>
          <span className="sparkle sparkle-3"></span>
        </div>
        <h2 className="cta-heading">Let’s Create Some Magic</h2>
        <button className="cta-button" onClick={() => navigate('/connect')}>
          Let’s Connect
        </button>
      </section>
    </div>
  );
}

export default About;
