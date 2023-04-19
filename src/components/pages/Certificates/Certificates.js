import React from 'react';
import certificateData from './assets/js/certificateData.js';
import './Certificates.css';

export default function Certificates() {
  return (
    <div className="container">
      {certificateData.map((cert, index) => (
        <div key={index} className="img-container">
          <a href={cert.link} target="_blank" rel="noopener noreferrer">
            <img src={cert.image} alt={cert.id} />
          </a>
        </div>
      ))}
    </div>
  );
}
