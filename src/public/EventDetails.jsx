import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EventDetails = () => {
    const { id } = useParams(); // Change eventId to id here
    const [event, setEvent] = useState(null);

    useEffect(() => {
        const fetchEventDetails = async () => {
            try {
                const response = await fetch(`http://localhost:3001/events/${id}`); // Use id here
                const data = await response.json();
                setEvent(data);
            } catch (error) {
                console.error('Error fetching event details:', error);
            }
        };
        fetchEventDetails();
    }, [id]);

    if (!event) return <div>Loading...</div>;

    return (
        <div style={detailsContainerStyle}>
            <h2>{event.title}</h2>
            <img src={event.image} alt={event.title} style={imageStyle} />
            <p>{event.date}</p>
            <p>{event.location}</p>
            <p>{event.price}</p>
        </div>
    );
};

const detailsContainerStyle = {
    padding: '20px',
    textAlign: 'center',
    marginTop:"120px",
};

const imageStyle = {
    width: '100%',
    maxHeight: '400px',
    objectFit: 'cover',
};

export default EventDetails;
