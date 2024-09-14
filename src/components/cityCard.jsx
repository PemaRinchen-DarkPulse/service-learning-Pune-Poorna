import React from 'react';

const CityCard = ({ city }) => {
  return (
    <div className="city-card">
      <h3>{city.name}</h3>
      <p>{city.eventsCount} Events</p>
    </div>
  );
};

export default CityCard;
