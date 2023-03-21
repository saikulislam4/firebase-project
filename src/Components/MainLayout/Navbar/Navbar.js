import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" py-7  bg-black">
      <div className=" container mx-auto">
        <nav className="flex justify-between space-x-4">
          <div className="logo">
            <Link to="/">Home</Link>
          </div>
          <div className="link">
            <Link
              to="/team"
              className="font-bold px-3 py-2 text-bg-white rounded-lg hover:bg- bg-red-600 hover:text-slate-900"
            >
              Team
            </Link>
            <Link
              to="/projects"
              className="font-bold px-3 py-2 ml-4 text-bg-white rounded-lg hover:bg- bg-red-600 hover:text-slate-900"
            >
              Projects
            </Link>
            <Link
              to="/about"
              className="font-bold px-3 py-2 ml-4 text-bg-white rounded-lg hover:bg- bg-red-600 hover:text-slate-900"
            >
              About
            </Link>
          </div>
          <div className="link">
            <Link
              to="/projects"
              className="font-bold px-3 py-2 text-bg-white rounded-lg hover:bg- bg-red-600 hover:text-slate-900"
            >
              SignUp
            </Link>
            <Link
              to="/loging"
              className="font-bold px-3 py-2 ml-4 text-bg-white rounded-lg hover:bg- bg-red-600 hover:text-slate-900"
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
