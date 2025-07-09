import React from 'react';
import './Services.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import AboutBanner from '../../../assets/images/AboutBanner.jpg';

const designServices = [
  'Brand Identity',
  'Newsletter Design',
  'Print',
  'Social Media',
  'Illustration',
  'Campaigns'
];

const uiuxServices = [
  'Wireframing',
  'ERD Diagrams',
  'Web Design',
  'PWAs'
];

export default function Services() {
  const navigate = useNavigate();
  const handleClick = () => navigate('/portfolio');

  return (
    <div className="services-page">
      {/* Hero Banner with animation */}
      <motion.div
        className="services-banner"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <img src={AboutBanner} alt="Bowhle Services Banner" />
      </motion.div>

      {/* Header Section */}
      <section className="services-header">
        <h1>Our Services</h1>
        <p>Cleanly split between brand design and software development. Just how we like it.</p>
      </section>

      {/* Split Grid */}
      <div className="services-grid-split">
        <div className="service-column">
          <div className="category-title design-title">Design</div>
          <div className="tile-group">
            {designServices.map((service, i) => (
              <motion.div
                className="service-tile design-tile"
                key={`design-${i}`}
                onClick={handleClick}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: [0, -2, 2, -1, 1, 0] }}
              >
                {service}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="service-column">
          <div className="category-title uiux-title">
            UI/UX
            <div className="subtitle">Design & Software Development</div>
          </div>
          <div className="tile-group">
            {uiuxServices.map((service, i) => (
              <motion.div
                className="service-tile uiux-tile"
                key={`uiux-${i}`}
                onClick={handleClick}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: [0, 2, -2, 1, -1, 0] }}
              >
                {service}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
