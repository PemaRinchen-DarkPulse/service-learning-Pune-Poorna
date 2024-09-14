import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <img src={event.image} alt={event.name} />
      <h3>{event.name}</h3>
      <p>{event.location}</p>
      {event.date && <p>{event.date}</p>}
      <p>{event.price}</p>
    </div>
  );
};

export default EventCard;
