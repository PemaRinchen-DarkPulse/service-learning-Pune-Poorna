import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavComponent } from '../components/navbar/navComponents.jsx';
import Footer from '../components/footer/footer.jsx';
import Banner from '../components/body/banner.jsx';

export const Category = () => {
  return (
    <div>
      <NavComponent />
      <h1 style={{ marginTop: '130px' }}>Welcome to Category</h1>
      <MarathonEvents />
      <VirtualSportEvents />
      <Banner/>
      <CyclingEvents />
      <TrekEvents />
      
      <ToursEvents />
      <Footer/>
    </div>
  );
};

const EventSection = ({ title, location, events }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const eventsToShow = events.slice(currentIndex, currentIndex + 5);

  const handleNext = () => {
    if (currentIndex + 5 < events.length) {
      setCurrentIndex(currentIndex + 5); // Adjust to move by 5 events
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 5); // Adjust to move by 5 events
    }
  };

  return (
    <div className="popular-events-container row">
      <div className="header col-2 d-flex flex-column">
        <div className='mt-3'>
          <h3>{title}</h3>
          <span className="location">{location}</span>
        </div>
        <div className='mt-auto'>
          <Link to="#" className='mt-auto'>VIEW ALL <span className="arrow">→</span></Link>
        </div>
      </div>

      <div className="event-navigation col-10">
        <button className="nav-button" onClick={handlePrev} disabled={currentIndex === 0}>
          <span className="arrow">←</span>
        </button>
        <div className="event-list">
          {eventsToShow.map((event, index) => (
            <div key={index} className="d-flex justify-content-center">
              <div className="event-card shadow-sm">
                <div className="event-details p-3 col-2">
                  <h5 className="event-title">{event.title}</h5>
                </div>
                <div>
                    <button>view All</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="nav-button" onClick={handleNext} disabled={currentIndex + 5 >= events.length}>
          <span className="arrow">→</span>
        </button>
      </div>
    </div>
  );
};

export const MarathonEvents = () => {
  const events = [
    {
      title: "Pune Hill Half Marathon - Practice Run",
      date: "Sep 15",
      location: "Pune",
      price: "Free",
    },
    {
      title: "Pune Hill Half Marathon",
      date: "Sep 29",
      location: "Pune",
      price: "₹399 onwards",
    },
    {
      title: "COC Entrepreneurs Meetup-Pune",
      date: "Sep 22",
      location: "Koregaon Park, Pune",
      price: "Free",
    },
    {
      title: "Tech Conference 2024",
      date: "Oct 10",
      location: "Mumbai",
      price: "₹499 onwards",
    },
    {
      title: "Music Festival",
      date: "Nov 05",
      location: "Goa",
      price: "₹799 onwards",
    },
  ];

  return (
    <EventSection
      title="Marathon Events"
      location="In Pune"
      events={events}
    />
  );
};

export const VirtualSportEvents = () => {
  const events = [
    {
      title: "Pune Hill Half Marathon - Practice Run",
      date: "Sep 15",
      location: "Pune",
      price: "Free",
    },
    {
      title: "Pune Hill Half Marathon",
      date: "Sep 29",
      location: "Pune",
      price: "₹399 onwards",
    },
    {
      title: "COC Entrepreneurs Meetup-Pune",
      date: "Sep 22",
      location: "Koregaon Park, Pune",
      price: "Free",
    },
    {
      title: "Tech Conference 2024",
      date: "Oct 10",
      location: "Mumbai",
      price: "₹499 onwards",
    },
    {
      title: "Music Festival",
      date: "Nov 05",
      location: "Goa",
      price: "₹799 onwards",
    },
  ];

  return (
    <EventSection
      title="Virtual Sport Events"
      location="In Pune"
      events={events}
    />
  );
};

export const CyclingEvents = () => {
  const events = [
    {
      title: "Pune Hill Half Marathon - Practice Run",
      date: "Sep 15",
      location: "Pune",
      price: "Free",
    },
    {
      title: "Pune Hill Half Marathon",
      date: "Sep 29",
      location: "Pune",
      price: "₹399 onwards",
    },
    {
      title: "COC Entrepreneurs Meetup-Pune",
      date: "Sep 22",
      location: "Koregaon Park, Pune",
      price: "Free",
    },
    {
      title: "Tech Conference 2024",
      date: "Oct 10",
      location: "Mumbai",
      price: "₹499 onwards",
    },
    {
      title: "Music Festival",
      date: "Nov 05",
      location: "Goa",
      price: "₹799 onwards",
    },
  ];

  return (
    <EventSection
      title="Cycling Events"
      location="In Pune"
      events={events}
    />
  );
};

export const TrekEvents = () => {
  const events = [
    {
      title: "Pune Hill Half Marathon - Practice Run",
      date: "Sep 15",
      location: "Pune",
      price: "Free",
    },
    {
      title: "Pune Hill Half Marathon",
      date: "Sep 29",
      location: "Pune",
      price: "₹399 onwards",
    },
    {
      title: "COC Entrepreneurs Meetup-Pune",
      date: "Sep 22",
      location: "Koregaon Park, Pune",
      price: "Free",
    },
    {
      title: "Tech Conference 2024",
      date: "Oct 10",
      location: "Mumbai",
      price: "₹499 onwards",
    },
    {
      title: "Music Festival",
      date: "Nov 05",
      location: "Goa",
      price: "₹799 onwards",
    },
  ];

  return (
    <EventSection
      title="Trek Events"
      location="In Pune"
      events={events}
    />
  );
};

export const ToursEvents = () => {
  const events = [
    {
      title: "Pune Hill Half Marathon - Practice Run",
      date: "Sep 15",
      location: "Pune",
      price: "Free",
    },
    {
      title: "Pune Hill Half Marathon",
      date: "Sep 29",
      location: "Pune",
      price: "₹399 onwards",
    },
    {
      title: "COC Entrepreneurs Meetup-Pune",
      date: "Sep 22",
      location: "Koregaon Park, Pune",
      price: "Free",
    },
    {
      title: "Tech Conference 2024",
      date: "Oct 10",
      location: "Mumbai",
      price: "₹499 onwards",
    },
    {
      title: "Music Festival",
      date: "Nov 05",
      location: "Goa",
      price: "₹799 onwards",
    },
    {
        title: "Music Festival",
        date: "Nov 05",
        location: "Goa",
        price: "₹799 onwards",
      },
  ];

  return (
    <EventSection
      title="Tours Events"
      location="In Pune"
      events={events}
    />
  );
};
