import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const AdminEventDelete = () => {
  const navigate = useNavigate();
  const { id } = useParams(); 

  const handleDeleteEvent = () => {
    axios
      .delete(`http://localhost:3000/events/${id}`)
      .then(() => {
        navigate("/dashboard/events");
      })
      .catch((error) => {
        alert("An error happened. Please Chack console");
        console.log(error);
      });
  };
  return (
    <div className="p-4">
      <h1 className="text-3xl my-4">Delete Event</h1>
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">
          Are You Sure You want to delete this event?
        </h3>
        <button
          className="p-4 bg-red-600 text-white m-8 w-full"
          onClick={handleDeleteEvent}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  );
};

export default AdminEventDelete;


