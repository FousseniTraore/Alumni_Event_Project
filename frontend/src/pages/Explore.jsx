import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavBar2 from "../components/NavBar2";
import { FaEye, FaEdit, FaTrash, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const Explore = () => {
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
      <div>
        <NavBar2 />
      </div>
      <div className="py-20">
        <div className="py-20">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 text-center">
            All Events
          </h1>
        </div>
        <div>
          <div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="max-w-md bg-white shadow-lg rounded-md m-4"
                >
                  <div className="p-4">
                    <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
                    <p className="text-blue-700 text-base mb-2">
                      {event.category}
                    </p>
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
                      to={`/events/view/${event._id}`}
                      className="text-blue-500 hover:text-blue-700 mx-2"
                    >
                      <FaEye />
                    </Link>
                    <Link
                      to={`/events/edit/${event._id}`}
                      className="text-green-500 hover:text-green-700 mx-2"
                    >
                      <FaEdit />
                    </Link>
                    <Link
                      to={`/events/delete/${event._id}`}
                      className="text-red-500 hover:text-red-700 mx-2"
                    >
                      <FaTrash />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
