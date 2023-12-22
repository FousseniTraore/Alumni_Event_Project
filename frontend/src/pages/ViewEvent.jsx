import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const ViewEvent = () => {
  const [event, setEvent] = React.useState([]);
  const { id } = useParams();
  // Fetch event data on component mount
  useEffect(() => {
    axios
    .get(`http://localhost:3000/events/${id}`)
    .then((response) => {
      setEvent(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);
  return (
    <div>
      <ul>
        <li>{event.title}</li>
        <li>{event.description}</li>
        <li>{event.category}</li>
      </ul>
    </div>
  )
}

export default ViewEvent
