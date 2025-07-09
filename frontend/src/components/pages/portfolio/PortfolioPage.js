import React, { useEffect } from 'react';
import './PortfolioPage.css';

const portfolioItems = [
  { title: 'Campaign Design', image: 'https://via.placeholder.com/800x600' },
  { title: 'Email Marketing', image: 'https://via.placeholder.com/800x600' },
  { title: 'Wireframing', image: 'https://via.placeholder.com/800x600' },
  { title: 'Prototyping', image: 'https://via.placeholder.com/800x600' },
  { title: 'Web Development', image: 'https://via.placeholder.com/800x600' },
];

function PortfolioPage() {
  useEffect(() => {
    const blocks = document.querySelectorAll('.portfolio-block');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.15 }
    );
    blocks.forEach(block => observer.observe(block));
    return () => blocks.forEach(block => observer.unobserve(block));
  }, []);

  return (
    <div className="portfolio-page">
      <div className="portfolio-grid">
        {portfolioItems.map((item, index) => (
          <div className="portfolio-block" key={index}>
            <div className="portfolio-image-wrapper">
              <img src={item.image} alt={item.title} className="zoomable" />
              <div className="hover-overlay">
                <div className="hover-text">{item.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortfolioPage;
