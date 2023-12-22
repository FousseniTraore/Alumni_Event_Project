import React, { useEffect, useState } from "react";
import axios from "axios";
import DashboardNavBar from "../components/DashboardNavBar";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

const UsersListDashboard = () => {
  const [users, setUsers] = React.useState([]);

  //Function to fetch users data
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((response) => {
        console.log(response.data);
        setUsers(response.data.data);
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
              Users list
            </h1>
          </div>
          <div>
            <Link
              to="/dashboard/users/create"
              className="text-sm font-semibold leading-6 text-gray-900 bg-red-700 text-white px-4 py-2 rounded-full hover:bg-red-600"
            >
              + Add new user
            </Link>
          </div>
        </div>
      </header>

      <ul className="divide-y divide-gray-100 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {users.map((user, index) => (
          <li key={index} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {user.firstName}
                </p>
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {user.lastName}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {user.email}
                </p>
              </div>
            </div>
            <div className="shrink-0 sm:flex sm:flex-col sm:items-end ">
              <Link
                to={`/dashboard/users/edit/${user._id}`}
                className="text-green-500 hover:text-green-700 mx-2 lg:my-2"
              >
                <FaEdit />
              </Link>
              <Link
                to={`/dashboard/users/delete/${user._id}`}
                className="text-red-500 hover:text-red-700 mx-2 lg:my-2"
              >
                <FaTrash />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersListDashboard;
