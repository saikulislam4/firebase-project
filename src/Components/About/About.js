import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {ImFacebook, ImLinkedin2, ImGithub} from 'react-icons/im'
import{ UserAuthorContext } from '../Context/AuthorContext';

const About = () => {
  const {user} =useContext(UserAuthorContext)

  return (
    <div className=' container mx-auto text-center mt-[9rem] '>

      <div className="main grid grid-cols-2 w-full relative   h-[700px] p-2">
      <div className="image flex items-center m-auto p-6">
        <img className=' w-75' src="about us.png" alt="about us" />
      </div>

      <div className="flex flex-col m-auto text-start pl-10 ">
       <h1 className='text-[80px]'> come together!</h1>
       <h1 className='text-[40px;] text-[#fe236c] my-4 '> happy bla bla day</h1>
       <p className=' font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ut sunt nisi doloribus sapiente amet nostrum modi culpa enim possimus.</p>
      <div className=" mt-6">
      <Link to="/home" className="font-bold px-10 py-2  text-bg-white rounded-lg text-black hover:bg- bg-white hover:text-white hover:bg-[#fe236c]">
             let's talk
          </Link>
      </div>
      <div className=" absolute right-0 bottom-0">
      <Link to="https://www.facebook.com" className="font-bold px-2 text-[15px] ml-2 py-2 inline-block text-bg-white rounded-lg text-black hover:bg- bg-white hover:text-white hover:bg-[#fe236c]">
            <ImFacebook/>
          </Link>
      <Link to="https://www.linkedin.com" className="font-bold px-2 text-[15px] ml-2 py-2 inline-block text-bg-white rounded-lg text-black hover:bg- bg-white hover:text-white hover:bg-[#fe236c]">
            <ImLinkedin2/>
          </Link>
      <Link to="https://github.com" className="font-bold px-2 text-[15px] ml-2 py-2 inline-block text-bg-white rounded-lg text-black hover:bg- bg-white hover:text-white hover:bg-[#fe236c]">
            <ImGithub/>
          </Link>
      </div>

      </div>
      </div>
      
    </div>
  );
};

export default About;