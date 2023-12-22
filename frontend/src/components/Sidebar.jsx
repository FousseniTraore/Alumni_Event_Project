import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <aside className="bg-gray-700 w-48 p-4 text-white">
        <nav>
          <ul className="space-y-2">
            <li>
              <Link to="/events" className="block hover:underline">
                Events List
              </Link>
            </li>
            <li>
              <Link to="/users" className="block hover:underline">
                Users Records
              </Link>
            </li>
          </ul>
          <div className="mt-4">
            <Link to="/events/create" className="btn">
              Create Event
            </Link>
            <Link to="/signup" className="btn">
              Create User
            </Link>
          </div>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
