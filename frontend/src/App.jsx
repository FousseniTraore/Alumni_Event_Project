import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/about"
import Contact from "./pages/contact"
import Explore from "./pages/Explore"
import CreateEvent from "./pages/CreateEvents"
import DeleteEvent from "./pages/DeleteEvents"
import EditEvent from "./pages/EditEvent"
import ViewEvent from "./pages/ViewEvent"
import AddEvents from "./pages/AddEvents"
import SignUp from "./pages/SignUp"
import Dashboard from "./pages/Dashboard"
import LogIn from "./pages/LogIn"
import AdminLogIn from "./pages/AdminLogIn"
import EventsListDashboard from "./pages/EventsListDasboard"
import UsersListDashboard from "./pages/UsersListDashboard"
import Profile from "./pages/Profile"
import DeleteUser from "./pages/DeleteUser"
import EditUser from "./pages/EditUser"
import AdminEventDelete from "./pages/AdminEventDelete"
import AdminCreateUser from "./pages/AdminCreateUser"
import AdminCreateEvent from "./pages/AdminCreateEvent"
import AdminEventEdit from "./pages/AdminEventEdit"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/About" element={<About />} /> 
      <Route path="/Contact" element={<Contact />} /> 
      <Route path="/Explore" element={<Explore />} />
      <Route path="/Profile/:id" element={<Profile />} />
      <Route path="/events/create" element={<CreateEvent />} />
      <Route path="/events/delete/:id" element={<DeleteEvent />} />
      <Route path="/events/edit/:id" element={<EditEvent />} />
      <Route path="/events/view/:id" element={<ViewEvent />} />
      <Route path="/events/add/:id" element={<AddEvents/>} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/admin/auth" element={<AdminLogIn />}></Route>
      <Route path="/dashboard/events" element={<EventsListDashboard />} />
      <Route path="/dashboard/users" element={<UsersListDashboard />} />
      <Route path="/dashboard/users/create" element={<AdminCreateUser />} />
      <Route path="/dashboard/users/delete/:id" element={<DeleteUser />} />
      <Route path="/dashboard/users/edit/:id" element={<EditUser />} />
      <Route path="/dashboard/events/delete/:id" element={<AdminEventDelete />} />
      <Route path="/dashboard/events/create" element={<AdminCreateEvent />} />
      <Route path="/dashboard/events/edit/:id" element={<AdminEventEdit />} />
    </Routes>
  )
}