import React from 'react';
import './About.css';
import AboutImage from '../../../assets/images/About.jpg';
import AboutBanner from '../../../assets/images/AboutBanner.jpg';

function About() {
  return (
    <>
    {/* About hero image */}
    <div className="about-banner">
        <img src={AboutBanner} alt="About Us Banner" />
        <div className="about-banner-text">
        </div>
    </div>

    <section className="about-section">
      <div className="about-container">
        {/* Image section */}
        <div className="about-image">
          <img src={AboutImage} alt="About Us" />
        </div>

        <div className="about-text">
          <h2>About Us</h2>
          <p>
            Welcome to Bowhle, where we specialize in creating stunning and functional websites tailored to your needs. Our team of experienced developers and designers are dedicated to delivering high-quality web solutions that not only look great but also perform exceptionally well.
          </p>
          <p>
            At Bowhle, we believe in the power of collaboration and innovation. We work closely with our clients to understand their vision and goals, ensuring that every project is a true reflection of their brand. Whether you need a simple landing page or a complex e-commerce platform, we have the expertise to bring your ideas to life.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}

export default About;