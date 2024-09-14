import React from 'react';
import CityCard from './components/cityCard';
import EventCard from './components/eventCard';

const cities = [
  { name: "Bengaluru", eventsCount: 427 },
  { name: "Chennai", eventsCount: 101 },
  { name: "Delhi", eventsCount: 398 },
  { name: "Hyderabad", eventsCount: 113 },
  { name: "Mumbai", eventsCount: 211 },
  { name: "Pune", eventsCount: 139 }
];

const events = [
  { name: "Elements Photo Shoots", location: "Bengaluru", price: "₹390 onwards", image: "image1.jpg" },
  { name: "Pune Hill Half Marathon", location: "Pune", date: "Sep 15", price: "Free", image: "image2.jpg" },
  { name: "PROMO RUN 2", location: "Jalandhar", date: "Sep 15", price: "Free", image: "image3.jpg" }
];

const EventsPage = () => {
  return (
    <div className="events-page">
      <header>
        <h1>Popular Cities</h1>
        <div className="cities-grid">
          {cities.map((city, index) => (
            <CityCard key={index} city={city} />
          ))}
        </div>
      </header>

      <section className="popular-events">
        <h2>Popular Events</h2>
        <div className="events-grid">
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
