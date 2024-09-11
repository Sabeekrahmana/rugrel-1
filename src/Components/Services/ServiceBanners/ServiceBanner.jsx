import React from 'react';
import './ServiceBanner.css';

const ServiceBanner = ({ imageUrl, heading }) => {
  return (
    <div className="serviceBanner" style={{ backgroundImage: `url(${imageUrl})`,height: '250px' }}>
      <h1 className="serviceHead">{heading}</h1>
    </div>
  );
};

export default ServiceBanner;
