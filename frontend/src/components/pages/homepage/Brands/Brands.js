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
        <h2>TITLE GOES HERE</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
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
    </section>
  );
}

export default Brands;
