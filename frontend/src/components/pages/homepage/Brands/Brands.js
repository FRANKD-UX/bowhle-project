import React from 'react';
import './Brands.css';

function Brands() {
  return (
    <section className="Brands">
      <div className="brands-intro">
        <h2>TITLE GOES HERE</h2>
        <p>
          Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat anim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugait nulla facilisi.
        </p>
      </div>
      <div className="brands-grid">
        <div className="brand-row-1">
          <img src={require('../../../../assets/images/brand1.jpg')} alt="Brand Logo 1" />
          <img src={require('../../../../assets/images/brand2.jpg')} alt="Brand Logo 2" />
          <img src={require('../../../../assets/images/brand3.jpg')} alt="Brand Logo 3" />
          <img src={require('../../../../assets/images/brand4.jpg')} alt="Brand Logo 4" />
          <img src={require('../../../../assets/images/brand5.jpg')} alt="Brand Logo 5" />
          <img src={require('../../../../assets/images/brand6.jpg')} alt="Brand Logo 6" />
        </div>
        <div className="brand-row-2">
          <img src={require('../../../../assets/images/brand7.jpg')} alt="Brand Logo 7" />
          <img src={require('../../../../assets/images/brand8.jpg')} alt="Brand Logo 8" />
          <img src={require('../../../../assets/images/brand9.jpg')} alt="Brand Logo 9" />
          <img src={require('../../../../assets/images/brand10.jpg')} alt="Brand Logo 10" />
          <img src={require('../../../../assets/images/brand11.jpg')} alt="Brand Logo 11" />
          <img src={require('../../../../assets/images/brand12.jpg')} alt="Brand Logo 12" />
        </div>
      </div>
    </section>
  );
}

export default Brands;