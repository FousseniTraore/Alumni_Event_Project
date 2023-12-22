// import React, { useEffect, useState } from "react";
// import Sidebar from "../components/Sidebar";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const Dashboard = () => {
//   const [events, setEvents] = React.useState([]);
//   const [users, setUsers] = React.useState([]);

//   // Function to fetch events
//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/events")
//       .then((response) => {
//         console.log(response.data);
//         setEvents(response.data.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   // Function to fetch users data
//   // useEffect(() => {
//   //   axios
//   //     .get("http://localhost:3000/users")
//   //     .then((response) => {
//   //       console.log(response.data);
//   //       setUsers(response.data.data);
//   //     })
//   //     .catch((error) => {
//   //       console.log(error);
//   //     });
//   // }, []);

//   return (
//     <div className="flex h-screen">
//       <Sidebar />
//       <div className="flex-1 bg-gray-200">
//         <div className="p-4">
//           <h1 className="text-2xl font-bold text-blue-500">ALUMNI</h1>
//         </div>
//         {/* Content goes here */}
//         <div>
//           <h1 className="text-Blue-500 text-2xl font-bold">Event List</h1>
//           <div>
//             <div className="flex flex-wrap">
//               {events.map((event, index) => (
//                 <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
//                   <div className="px-6 py-4">
//                     <div className="font-bold text-xl mb-2">{event.title}</div>
//                     <p className="text-gray-700 text-base">{event.category}</p>
//                     <p className="text-gray-700 text-base">
//                       {event.description}
//                     </p>
//                   </div>
//                   <div className="px-6 py-4">
//                     {/* Use the Link component to create links */}
//                     <Link
//                       to={`/events/view/${event._id}`}
//                       className="bg-blue-700 text-white  rounded-full hover:bg-blue-600"
//                     >
//                       View Details
//                     </Link>
//                     <Link
//                       to={`/events/edit/${event._id}`}
//                       className="bg-blue-700 text-white  rounded-full hover:bg-blue-600"
//                     >
//                       Edit Event
//                     </Link>
//                     <Link
//                       to={`/events/delete/${event._id}`}
//                       className="bg-blue-700 text-white  rounded-full hover:bg-blue-600"
//                     >
//                       Delete Event
//                     </Link>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div>
//           <h1 className="text-Blue-500 text-2xl font-bold">User Records</h1>
//           <div>
//             {/* <ul>
//             {users.map((user, index) => (
//               <li key={user._id}>
//                 <h3>{user.firstName}</h3>
//                 <p>{user.lastName}</p>
//                 <p>{user.email}</p>
//               </li>
//             ))}
//           </ul> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DashboardNavBar from "../components/DashboardNavBar"

const Dashboard = () => {
  return (
    <div >
      <DashboardNavBar />
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {/* Your content */}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
