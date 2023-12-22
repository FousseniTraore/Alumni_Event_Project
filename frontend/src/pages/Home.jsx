import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { FaBriefcase, FaUsers, FaUniversity } from "react-icons/fa";


const Home = () => {
  return (
    <div>
      <div className="bg-hero-pattern bg-cover">
        <NavBar />
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-cyan-800 to-blue-800 opacity-70 " />
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-40">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Find all your ALUmni events in on place
              </h1>
              <p className="mt-6 text-lg leading-8 text-white">
                Are you a proud graduate of our esteemed university? Welcome to
                the official platform where you can connect with fellow alumni,
                collaborate on exciting initiatives, and stay engaged with the
                university's community.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  to="/SignUp"
                  className="rounded-md bg-red-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get an account
                </Link>
                <Link
                  to="/login"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  Log in with your account<span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-24 sm:py-32">
        <h1 className="text-center text-4xl font-bold pb-20">
          Events we organize
        </h1>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <FaBriefcase className="text-blue-950 text-4xl mx-auto" />
              <div className="font-semibold tracking-tight text-gray-900 sm:text-2xl">
                Professional Events
              </div>
              <div className="text-base leading-7 text-gray-600">
                Discover opportunities for career growth and skill enhancement.
              </div>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <FaUsers className="text-blue-950 text-4xl mx-auto" />
              <div className="font-semibold tracking-tight text-gray-900 sm:text-2xl">
                Networking Events
              </div>
              <div className="text-base leading-7 text-gray-600">
                Connect with fellow alumni, exchange ideas, and create valuable
                connections.
              </div>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <FaUniversity className="text-blue-950 text-4xl mx-auto" />
              <div className="font-semibold tracking-tight text-gray-900 sm:text-2xl">
                Campus Events
              </div>
              <div className="text-base leading-7 text-gray-600">
                Relive the memorable moments from your university days and stay
                connected with the campus community.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
