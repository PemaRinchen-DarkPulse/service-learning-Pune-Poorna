import React, { useState } from 'react';
import './style.css'; // Assuming your styles are defined here
import marathon from '../../assets/marathon.webp';
import event2 from '../../assets/marathon.jpg'; // Add more images
import event3 from '../../assets/marathon.jpg'; // Add 

const events = [
  {
    title: "Pune Hill Half Marathon - Practice Run",
    date: "Sep 15",
    location: "Pune",
    price: "Free",
    image: marathon,
  },
  {
    title: "Pune Hill Half Marathon",
    date: "Sep 29",
    location: "Pune",
    price: "₹399 onwards",
    image: event2,
  },
  {
    title: "COC Entrepreneurs Meetup-Pune",
    date: "Sep 22",
    location: "Koregaon Park, Pune",
    price: "Free",
    image: event3,
  },
  {
    title: "Tech Conference 2024",
    date: "Oct 10",
    location: "Mumbai",
    price: "₹499 onwards",
    image: event2, // Replace with actual image
  },
  {
    title: "Music Festival",
    date: "Nov 05",
    location: "Goa",
    price: "₹799 onwards",
    image: event3, // Replace with actual image
  },
  // Add more events as needed
];

const PopularEvents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const eventsToShow = events.slice(currentIndex, currentIndex + 3);

  const handleNext = () => {
    if (currentIndex + 3 < events.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="popular-events-container row">
      <div className="header col-2">
        <h2>Popular Events</h2>
        <span className="location">In Pune</span>
        <button className="view-all-button">
          VIEW ALL <span className="arrow">→</span>
        </button>
      </div>
      <div className="event-navigation col-10">
        <button className="nav-button" onClick={handlePrev} disabled={currentIndex === 0}>
          <span className="arrow">←</span>
        </button>
        <div className="event-list">
          {eventsToShow.map((event, index) => (
            <div key={index} className="col-12 col-md-4 mb-3 d-flex justify-content-center">
              <div className="event-card shadow-sm">
                <img src={event.image} alt={event.title} className="event-image" />
                <div className="event-details p-3">
                  <h5 className="event-title">{event.title}</h5>
                  <p className="event-date">{event.date}</p>
                  <p className="event-location">{event.location}</p>
                  <p className="event-price">{event.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="nav-button" onClick={handleNext} disabled={currentIndex + 3 >= events.length}>
          <span className="arrow">→</span>
        </button>
      </div>
    </div>
  );
};

export default PopularEvents;
