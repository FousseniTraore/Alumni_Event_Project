import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/api/user/profile/${id}`) 
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>About Me: {user.aboutMe}</p>
      <p>Class of: {user.classOf}</p>

      <h2>Events Created</h2>
      <ul>
        {user.events &&
          user.events.map((event) => (
            <li key={event._id}>
              {event.title} - {event.description}
              {/* Add more event details as needed */}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Profile;
