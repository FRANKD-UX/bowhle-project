import React from 'react';
import './Brands.css';

function Brands() {
  const brandImages = [
    'brand1.jpg', 'brand2.jpg', 'brand3.jpg', 'brand4.jpg', 'brand5.jpg', 'brand6.jpg',
    'brand7.jpg', 'brand8.jpg', 'brand9.jpg', 'brand10.jpg', 'brand11.jpg', 'brand12.jpg'
  ];

  return (
    <section className="brands">
      <div className="brands-intro">
        <h2>Trusted by Brands That Get It</h2>
        <p>
          We’ve had the joy of creating for some bold, beautiful, and brilliant brands —
          and we’re just getting started. Whether you’re a fresh face or a seasoned player,
          we’d love to cook up something magic with you.
        </p>
      </div>

      <div className="brands-slider">
        <div className="brands-track">
          {brandImages.concat(brandImages).map((img, i) => (
            <div className="brand-slide" key={i}>
              <img src={require(`../../../../assets/images/${img}`)} alt={`Brand ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="cta-button-wrapper">
        <button className="cta-button">Let’s Work Together</button>
      </div>
    </section>
  );
}

export default Brands;
