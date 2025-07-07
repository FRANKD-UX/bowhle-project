import React from 'react';
import './PortfolioCards.css';

const cards = [
  { title: 'Design', description: 'Visual branding & assets', image: 'https://via.placeholder.com/600' },
  { title: 'Email Marketing', description: 'Emails that convert', image: 'https://via.placeholder.com/600' },
  { title: 'Copywriting', description: 'Voice with vibes', image: 'https://via.placeholder.com/600' },
  { title: 'Wireframing', description: 'Blueprints that flow', image: 'https://via.placeholder.com/600' },
  { title: 'Prototyping', description: 'Interactive magic', image: 'https://via.placeholder.com/600' },
  { title: 'Web Development', description: 'Functional, fast, fabulous', image: 'https://via.placeholder.com/600' },
];

function PortfolioCards() {
  return (
    <section className="portfolioCards">
      <div className="portfolio-header">
        <h2>Let’s Work</h2>
        <p>We’ve nailed these skills so you don’t have to.</p>
        <ul className="portfolio-submenu">
          <li>Campaign Design</li>
          <li>Social Media</li>
          <li>Branding</li>
          <li>Video Content</li>
        </ul>
      </div>

      <div className="portfolio-grid">
        {cards.map((card, index) => (
          <div key={index} className="portfolio-card">
            <img src={card.image} alt={card.title} />
            <div className="card-overlay">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="cta-button-wrapper">
        <button className="cta-button">View Our Work</button>
      </div>
    </section>
  );
}

export default PortfolioCards;
