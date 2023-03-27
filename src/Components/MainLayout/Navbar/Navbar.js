import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CgProfile} from 'react-icons/cg';
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
    <div className=" py-7 bg-gray-900/50 fixed top-0 right-0 left-0 ">
      <div className=" container mx-auto">
        <nav className="flex justify-between space-x-4">
          
          <div className="logo flex items-center">
         
            {

              user&&
              <Link to="/profile" className="font-bold px-3 py-2 text-bg-white rounded-lg text-white text-[40px] hover:text-[#fe236c]"> <CgProfile/> </Link>
              
            }

               
          </div>

          <div className="link flex">
   
            {
              user&&
              <>
              <div className=" flex items-center">
              <Link to="/" className="font-bold px-3 py-2 ml-4 text-bg-white rounded-lg text-white  hover:text-[#fe236c]">Home</Link>
              <Link to="/about" className="font-bold px-3 py-2 ml-4 text-bg-white rounded-lg text-white  hover:text-[#fe236c]">About</Link>
              <Link to="*" className="font-bold px-3 py-2 ml-4 text-bg-white rounded-lg text-white  hover:text-[#fe236c]">Media</Link>
              <Link to="*" className="font-bold px-3 py-2 ml-4 text-bg-white rounded-lg text-white  hover:text-[#fe236c]">Project</Link>
             

              
              </div>
              </>
            }
          </div>

            {

            user?
            
            <div className="div flex items-center">
            <Link onClick={handelLogOut} className="font-bold px-3 py-2 ml-4 text-bg-white rounded-lg text-black hover:bg- bg-white hover:text-white hover:bg-[#fe236c]">
            Log Out
           </Link>
            </div>

            :
            <div className="link flex justify-between w-full">
             <Link to="/"  className=" text-start mr-10  text-white  hover:text-[#fe236c] transition duration-100">Home</Link>
             <div className="log">
             <Link
              to="/registration"
              className="font-bold px-3 py-2 text-bg-white rounded-lg text-black hover:bg- bg-white hover:text-white hover:bg-[#fe236c]"
            >
              Sign Up
            </Link>

            <Link to="/login" className="font-bold px-3 py-2 ml-4 text-bg-white rounded-lg text-black hover:bg- bg-white hover:text-white hover:bg-[#fe236c]">
             Login
            </Link>
             </div>
            

          </div>

          }

        </nav>
      </div>
    </div>
  );
};

export default Navbar;
