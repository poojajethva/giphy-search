import React, { useState } from 'react';

function Image({ src, alt }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="image-wrapper">
      {!isLoaded && <div className="image-overlay" />}
      <img
        src={src}
        alt={alt}
        className={`grid-item ${isLoaded ? 'loaded' : ''}`}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}

export default Image;
