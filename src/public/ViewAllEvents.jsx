import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 

const ViewAllEvents = () => {
    const { eventType } = useParams(); 
    const [events, setEvents] = useState([]);
    const [visibleCount, setVisibleCount] = useState(9);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('http://localhost:3001/events');
                const data = await response.json();
                const filteredEvents = data.filter(event => event.type === eventType);
                setEvents(filteredEvents);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };
        fetchEvents();
    }, [eventType]);

    const loadMore = () => {
        setVisibleCount(prevCount => prevCount + 3); 
    };

    const loadLess = () => {
        setVisibleCount(prevCount => Math.max(prevCount - 3, 9)); 
    };

    return (
        <div className='d-flex flex-column'>
            <h1 style={{marginTop:"120px"}}>All Events for {eventType}</h1>
            <div className="row container ms-auto">
                {events.slice(0, visibleCount).map(event => (
                    <EventCard key={event.id} event={event} />
                ))}
            </div>
            <div className="d-flex justify-content-center mt-3">
                {visibleCount < events.length && (
                    <button onClick={loadMore} className="btn btn-primary mx-2">
                        Load More
                    </button>
                )}
                {visibleCount > 9 && (
                    <button onClick={loadLess} className="btn btn-secondary mx-2">
                        Load Less
                    </button>
                )}
            </div>
        </div>
    );
};

const EventCard = ({ event }) => {
    const navigate = useNavigate(); 

    const handleCardClick = () => {
        navigate(`/eventDetails/${event.id}`); 
    };

    return (
        <div
            className="card col-3 mx-3 my-3"
            onClick={handleCardClick} 
            style={{ cursor: 'pointer', transition: 'transform 0.2s' }} 
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} 
        >
            <img src={event.image} className="card-img-top" alt={event.title} />
            <div className="card-body">
                <h5 className="card-title">{event.title}</h5>
                <p className="card-text">{event.date}</p>
                <p className="card-text">{event.location}</p>
                <p className="card-text">{event.price}</p>
            </div>
        </div>
    );
};

export default ViewAllEvents;
