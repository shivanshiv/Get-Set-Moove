import React from 'react';
import './Photos.css';

const Photos = () => {
  return (
    <section id="photos">
      <div className="photos-container">
        <h2 className="section-title">Photos</h2>
        <div className="photos-grid">
          {Array.from({ length: 28 }, (_, i) => {
            const photoIndex = i + 1;
            const photoSrc = `${process.env.PUBLIC_URL}/images/Photos_page/image${photoIndex}.png`;

            return (
              <div key={photoIndex} className="photo-placeholder">
                <img src={photoSrc} alt={`Gallery item ${photoIndex}`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Photos;