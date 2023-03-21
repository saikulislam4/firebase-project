import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" py-7 bg-[black]">
      <div className=" container mx-auto">
        <nav className="flex justify-between space-x-4">
          <div className="logo">
            <Link to="/">Home</Link>
          </div>
          <div className="link">
            <Link
              to="/"
              className="font-bold px-3 py-2 text-bg-white rounded-lg text-white  hover:text-red-600"
            >
              Team
            </Link>
            <Link
              to="/"
              className="font-bold px-3 py-2 ml-4 text-bg-white rounded-lg text-white  hover:text-red-600"
            >
              Projects
            </Link>
            <Link
              to="/about"
              className="font-bold px-3 py-2 ml-4 text-bg-white rounded-lg text-white  hover:text-red-600"
            >
              About
            </Link>
          </div>
          <div className="link">
            <Link
              to="/registration"
              className="font-bold px-3 py-2 text-bg-white rounded-lg text-black hover:bg- bg-white hover:text-white hover:bg-red-600"
            >
              SignUp
            </Link>
            <Link
              to="/login"
              className="font-bold px-3 py-2 ml-4 text-bg-white rounded-lg text-black hover:bg- bg-white hover:text-white hover:bg-red-600"
            >
             Login
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
