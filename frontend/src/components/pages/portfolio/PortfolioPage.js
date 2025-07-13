import React, { useEffect } from 'react';
import './PortfolioPage.css';
import placeholder from '../../../assets/images/portfolio/portfolioplaceholder.png';

const sections = [
  {
    id: 'campaign-design',
    title: 'Campaign Design',
    intro: 'A strategy-led showcase for Bowhle’s campaign storytelling.',
    description: `This campaign captures the spirit of Bowhle’s design studio — playful, precise, and deeply rooted in brand identity. Bold layouts, storytelling-driven art direction, and custom design languages form the core of these showcases.`,
  },
  {
    id: 'email-marketing',
    title: 'Email Marketing',
    intro: 'Where performance meets visual delight.',
    description: `At Bowhle, emails aren’t just templates — they’re interactive, beautiful experiences crafted to drive engagement and brand memory. This section showcases modular design systems and conversion-focused layouts.`,
  },
  {
    id: 'wireframing',
    title: 'Wireframing',
    intro: 'Blueprints that fuel user-first experiences.',
    description: `We believe structure fuels creativity. Our wireframes show how we map journeys that feel effortless. This section dives into our UX-first mindset — mobile flows, user pathways, and storyboarding.`,
  },
  {
    id: 'prototyping',
    title: 'Prototyping',
    intro: 'Testing real interactions before real code.',
    description: `Rapid prototyping is core to Bowhle's iterative design process. With tools like Figma and Framer, we validate motion, interaction, and flow before a single line of code.`,
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    intro: 'Design-to-code with performance at the core.',
    description: `From pixel to production — we bring Bowhle’s design vision to life with performance-focused development. This section features responsive builds, animation, and accessibility best practices.`,
  },
];

function PortfolioPage() {
  useEffect(() => {
    const blocks = document.querySelectorAll('.portfolio-section');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.2 });

    blocks.forEach(block => observer.observe(block));
    return () => blocks.forEach(block => observer.unobserve(block));
  }, []);

  return (
    <div className="portfolio-page">
      <header className="portfolio-header">
        <h1>Work That Speaks Volumes</h1>
      </header>

      {sections.map(section => (
        <section className="portfolio-section" key={section.id} id={section.id}>
          <div className="portfolio-text-layout">
            <div className="section-heading">
              <h2>{section.title}</h2>
            </div>

            <div className="section-body">
              <p><em>{section.intro}</em></p>
              <p>{section.description}</p>
              <ul>
                <li><strong>Brand Background</strong></li>
                <li><strong>Wardrobe & Styling</strong></li>
                <li><strong>Location Scouting</strong></li>
                <li><strong>Platform-Specific Posting Style</strong></li>
              </ul>
              <p>Below are select images and mock campaign visuals from the shoot that bring this vision to life.</p>
            </div>
          </div>

          <div className="portfolio-image-wrapper">
            <img src={placeholder} alt={section.title} />
          </div>
        </section>
      ))}
    </div>
  );
}

export default PortfolioPage;
