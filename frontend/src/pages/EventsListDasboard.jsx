import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DashboardNavBar from "../components/DashboardNavBar";
import {
  FaEye,
  FaEdit,
  FaTrash,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";

const EventsListDasboard = () => {
  const [events, setEvents] = React.useState([]);

  // Function to fetch events
  useEffect(() => {
    axios
      .get("http://localhost:3000/events")
      .then((response) => {
        console.log(response.data);
        setEvents(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <DashboardNavBar />
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Events list
            </h1>
          </div>
          <div>
            <Link
              to="/dashboard/events/create"
              className="text-sm font-semibold leading-6 text-gray-900 bg-red-700 text-white px-4 py-2 rounded-full hover:bg-red-600"
            >
              + Create new event
            </Link>
          </div>
        </div>
      </header>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
        {events.map((event, index) => (
          <div
            key={index}
            className="max-w-md bg-white shadow-lg rounded-md m-4"
          >
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
              <p className="text-blue-700 text-base mb-2">{event.category}</p>
              <p className="text-gray-500 text-base mb-2">
                {event.description}
              </p>
              <div className="flex items-center text-gray-900 text-base mb-2">
                <FaMapMarkerAlt className="mr-2" />
                {event.location}
              </div>
              <div className="flex items-center text-gray-900 text-base mb-2">
                <FaCalendarAlt className="mr-2" />
                {event.date}
              </div>
            </div>
            <div className="flex justify-end p-4">
              <Link
                to={`/dashboard/events/edit/${event._id}`}
                className="text-green-500 hover:text-green-700 mx-2"
              >
                <FaEdit />
              </Link>
              <Link
                to={`/dashboard/events/delete/${event._id}`}
                className="text-red-500 hover:text-red-700 mx-2"
              >
                <FaTrash />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsListDasboard;
