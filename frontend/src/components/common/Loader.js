import React from 'react';
import { ClipLoader } from 'react-spinners';
import './Loader.css';

function Loader() {
  return (
    <div className="loader-overlay">
      <ClipLoader size={50} color="#a56ef7" />
    </div>
  );
}

export default Loader;
