import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserAuthorContext } from "../../Context/AuthorContext";

const Navbar = () => {
  const {user, logOut} = useContext(UserAuthorContext)
  const handelLogOut =() => {
    logOut()
    .then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      console.log(error);
    });
  }
    
  return (
    <div className=" py-7 bg-[black]">
      <div className=" container mx-auto">
        <nav className="flex justify-between space-x-4">


          <div className="logo">
            <Link to="/">Home</Link>
          </div>

          <div className="link flex">
   
            {
              user&&
              <div className=" flex">
              <Link to="/about" className="font-bold px-3 py-2 ml-4 text-bg-white rounded-lg text-white  hover:text-red-600">About</Link>
              <Link to="*" className="font-bold px-3 py-2 ml-4 text-bg-white rounded-lg text-white  hover:text-red-600">Media</Link>
              <Link to="*" className="font-bold px-3 py-2 ml-4 text-bg-white rounded-lg text-white  hover:text-red-600">Project</Link>
              <Link to="*" className="font-bold px-3 py-2 ml-4 text-bg-white rounded-lg text-white  hover:text-red-600">Project</Link>
              
              </div>
            }
          </div>

            {

            user?
            
            <div className="div flex items-center">
            <Link onClick={handelLogOut} className="font-bold px-3 py-2 ml-4 text-bg-white rounded-lg text-black hover:bg- bg-white hover:text-white hover:bg-red-600">
            Log Out
           </Link>
            </div>

            :
            <div className="link">
            <Link
              to="/registration"
              className="font-bold px-3 py-2 text-bg-white rounded-lg text-black hover:bg- bg-white hover:text-white hover:bg-red-600"
            >
              Sign Up
            </Link>

            <Link to="/login" className="font-bold px-3 py-2 ml-4 text-bg-white rounded-lg text-black hover:bg- bg-white hover:text-white hover:bg-red-600">
             Login
            </Link>
          </div>

          }

        </nav>
      </div>
    </div>
  );
};

export default Navbar;
