import React, { useEffect, useState } from 'react';
import './HomeIntro.css';

function HomeIntro() {
  const rotatingWords = [
    { word: 'Magic', class: 'magic' },
    { word: 'Soul', class: 'soul' },
    { word: 'Strategy', class: 'strategy' },
    { word: 'Play', class: 'play' },
    { word: 'Chaos', class: 'chaos' }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const rotate = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(rotate);
  }, []);

  return (
    <section className="homeIntro">
      <div className="intro-content">
        <h2>
          Creativity Poured with{' '}
          <span className={`dynamic-word ${rotatingWords[index].class}`}>
            {rotatingWords[index].word}
          </span>
        </h2>
        <p>
          We’re Bowhle — a design studio built on beauty, brains, and a sprinkle of bold. <br />
          From scroll-stopping visuals to brand moments that actually mean something, we bring that rare mix of quirky and quality. <br />
          We craft digital experiences that don’t just look good, but also feel right. We’re all about making your brand shine with a touch of soul and a dash of strategy. <br />
          Our work isn’t just pretty — it’s Bowtiful.
        </p>
      </div>
    </section>
  );
}

export default HomeIntro;
