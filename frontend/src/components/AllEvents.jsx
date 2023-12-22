import React from 'react';

const AllEvents = ({ events }) => {
  return (
    <div>
      <h2>All Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <h3>{event.title}</h3>
            <p>{event.category}</p>
            <p>{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllEvents;
