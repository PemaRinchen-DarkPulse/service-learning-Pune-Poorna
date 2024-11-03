import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';

const EventSection = ({ title, location, eventType }) => {
    const [events, setEvents] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const eventsToShow = events.slice(currentIndex, currentIndex + 3);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3001/events');
                const data = await response.json();
                const filteredEvents = data.filter(event => event.type === eventType);
                setEvents(filteredEvents);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };
        fetchData();
    }, [eventType]);

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
        <div style={containerStyle}>
            <div style={headerStyle}>
                <h3>{title}</h3>
                <span style={locationStyle}>{location}</span>
                <Link to={`/viewall/${eventType}`} style={{ ...viewAllStyle, textDecoration: 'none' }}>VIEW ALL →</Link>
            </div>
            <div style={eventNavStyle}>
                <button
                    style={buttonStyle}
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                >
                    ←
                </button>
                <div style={eventListStyle}>
                    {eventsToShow.map((event) => (
                        <Link to={`/eventDetails/${event.id}`} key={event.id} style={cardContainerStyle}>
                            <div
                                className="card"
                                style={cardStyle}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <img src={event.image} alt={event.title} style={imageStyle} />
                                <div style={detailsStyle}>
                                    <h5 style={titleStyle}>{event.title}</h5>
                                    <p style={detailTextStyle}>{event.date}</p>
                                    <p style={detailTextStyle}>{event.location}</p>
                                    <p style={priceStyle}>{event.price}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <button
                    style={buttonStyle}
                    onClick={handleNext}
                    disabled={currentIndex + 3 >= events.length}
                >
                    →
                </button>
            </div>
        </div>
    );
};

const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    margin: '20px 0',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#f8f9fa',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const headerStyle = {
    flex: '2',
    paddingRight: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
};

const locationStyle = {
    fontSize: '14px',
    color: '#6c757d',
};

const viewAllStyle = {
    color: '#007bff',
    fontWeight: 'bold',
    marginTop: 'auto',
};

const eventNavStyle = {
    flex: '8',
    display: 'flex',
    alignItems: 'center',
    padding: '20px 0', 
};

const buttonStyle = {
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '18px',
    margin: '0 10px',
};

const eventListStyle = {
    display: 'flex',
    flexDirection: 'row',
    overflowX: 'hidden',
    width: '100%',
    gap: '20px',
};

const cardContainerStyle = {
    flex: 'none',
    display: 'flex',
    justifyContent: 'center',
    cursor: 'pointer',
    margin: '0 5px', 
};

const imageStyle = {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
};

const detailsStyle = {
    padding: '15px',
};

const titleStyle = {
    fontSize: '18px',
    marginBottom: '10px',
    color: '#333',
};

const detailTextStyle = {
    fontSize: '14px',
    color: '#6c757d',
};

const priceStyle = {
    fontSize: '16px',
    color: '#28a745',
    fontWeight: 'bold',
};

const cardStyle = {
    padding: '15px',
    width: '300px', 
    height: '350px', 
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
    overflow: 'hidden',
    transition: 'transform 0.2s',
    margin: '10px 0',
};

const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'scale(1.05)'; 
};

const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)'; 
};

const eventCategories = [
    { title: "Marathon Events", location: "In Pune", eventType: "marathon" },
    { title: "Virtual Sport Events", location: "In Pune", eventType: "virtual-sports" },
    { title: "Cycling Events", location: "In Pune", eventType: "cycling" },
    { title: "Tours Events", location: "In Pune", eventType: "tours" },
    { title: "Monthly Challenge Events", location: "In Pune", eventType: "monthly-challenge" },
    { title: "Adventure Events", location: "In Pune", eventType: "adventure" },
    { title: "Health Events", location: "In Pune", eventType: "health" },
    { title: "AI Events", location: "In Pune", eventType: "ai" },
    { title: "Art Events", location: "In Pune", eventType: "art" },
    { title: "Women Events", location: "In Pune", eventType: "women" },
    { title: "Big Data Events", location: "In Pune", eventType: "bigdata" },
    { title: "Project Management Events", location: "In Pune", eventType: "project-management" },
    { title: "Treks Events", location: "In Pune", eventType: "treks" },
    { title: "Dance Events", location: "In Pune", eventType: "dance" },
    { title: "Finance Events", location: "In Pune", eventType: "finance" },
    { title: "Party Events", location: "In Pune", eventType: "party" },
    { title: "Cricket Events", location: "In Pune", eventType: "cricket" },
    { title: "Agile Events", location: "In Pune", eventType: "agile" },
    { title: "Bollywood Events", location: "In Pune", eventType: "bollywood" },
    { title: "Education Events", location: "In Pune", eventType: "education" },
    { title: "Environment Events", location: "In Pune", eventType: "environment" },
    { title: "Medical Events", location: "In Pune", eventType: "medical" },
    { title: "Python Events", location: "In Pune", eventType: "python" },
    { title: "Analytics Events", location: "In Pune", eventType: "analytics" },
    { title: "Music Events", location: "In Pune", eventType: "music" },
    { title: "Swimming Events", location: "In Pune", eventType: "swimming" },
];

const EventsPage = () => {
    return (
        <>
            {eventCategories.map((category, index) => (
                <React.Fragment key={index}>
                    <EventSection
                        title={category.title}
                        location={category.location}
                        eventType={category.eventType}
                    />
                    {(index + 1) % 3 === 0 && <Banner />}
                </React.Fragment>
            ))}
        </>
    );
};

export default EventsPage;
