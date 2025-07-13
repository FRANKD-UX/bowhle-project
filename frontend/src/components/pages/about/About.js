// src/components/pages/about/About.js
import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import AboutBanner from '../../../assets/images/AboutBanner.jpg';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as StarIcon } from '../../../assets/icons/star.svg';

function About() {
  const navigate = useNavigate();

  return (
    <div className="about-wrapper">
      {/* Header Banner with parallax animation */}
      <motion.div
        className="about-banner"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <img src={AboutBanner} alt="Bowhle About Us Banner" />
      </motion.div>

      {/* Main About Section */}
      <section className="about-section">
        <motion.div
          className="about-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
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
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          Our Journey
        </motion.h3>
        <div className="timeline-container">
          {[{
            year: '2018',
            text: 'Just me, a laptop, and a whole lot of coffee. Bowhle began as a one-person freelance dream.'
          }, {
            year: '2021',
            text: 'Grew into a tiny team! Took on clients, polished our design chops, and began thinking bigger.'
          }, {
            year: '2024',
            text: 'We leveled up. Mastered our crafts, expanded our services, and built things we once only imagined.'
          }, {
            year: '2025',
            text: 'We built this very app. The Bowhle vision is now a shared journey — let’s make magic together.'
          }].map((item, idx) => (
            <motion.div
              key={item.year}
              className="timeline-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <StarIcon className="timeline-icon" />
              <span className="year">{item.year}</span>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="about-cta"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="cta-sparkles">
          <span className="sparkle sparkle-1"></span>
          <span className="sparkle sparkle-2"></span>
          <span className="sparkle sparkle-3"></span>
        </div>
        <h2 className="cta-heading">Let’s Create Some Magic</h2>
        <motion.button
          className="cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate('/connect')}
        >
          Let’s Connect
        </motion.button>
      </motion.section>
    </div>
  );
}

export default About;
