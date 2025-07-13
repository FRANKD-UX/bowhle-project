import React from 'react';
import './PortfolioCards.css';

// This component renders a portfolio section with cards showcasing various services.
// Each card includes an image, title, and description, along with a call-to-action button

import DesignImage from '../../../../assets/images/Design.png';
import EmailNewsletterImage from '../../../../assets/images/EmailNewsletter.png';
import CopywritingImage from '../../../../assets/images/Copywriting.png';
import WireframingImage from '../../../../assets/images/Wireframing.png';
import PrototypingImage from '../../../../assets/images/Prototyping.png';
import WebDevImage from '../../../../assets/images/WebDevelopment.png';

const cards = [
  { title: 'Design', description: 'Visual branding & assets', image: DesignImage },
  { title: 'Email Marketing', description: 'Emails that convert', image: EmailNewsletterImage },
  { title: 'Copywriting', description: 'Voice with vibes', image: CopywritingImage },
  { title: 'Wireframing', description: 'Blueprints that flow', image: WireframingImage },
  { title: 'Prototyping', description: 'Interactive design thinking magic', image: PrototypingImage },
  { title: 'Web Development', description: 'Functional, thoughtful, Samazing!', image: WebDevImage },
];

function PortfolioCards() {
  return (
    <section className="portfolioCards">
      <div className="portfolio-header">
        <h1>Let’s Work</h1>
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
