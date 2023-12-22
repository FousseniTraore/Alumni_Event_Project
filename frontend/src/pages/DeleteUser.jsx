import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DeleteUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteUser = () => {
    axios
      .delete(`http://localhost:3000/users/${id}`)
      .then(() => {
        navigate("/dashboard/users");
      })
      .catch((error) => {
        alert("An error happened. Please Chack console");
        console.log(error);
      });
  };
  return (
    <div className="p-4">
      <h1 className="text-3xl my-4">Delete User</h1>
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">
          Are You Sure You want to delete this user?
        </h3>
        <button
          className="p-4 bg-red-600 text-white m-8 w-full"
          onClick={handleDeleteUser}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  );
};

export default DeleteUser;
