import React, { useContext } from 'react';
import{ UserAuthorContext } from '../Context/AuthorContext';

const About = () => {
  const {user,} = useContext(UserAuthorContext)

  return (
    <div className=' container mx-auto text-center '>
      <h1>about page</h1>
      <p className=" mr-5">User Email : {user?.email} </p>
    </div>
  );
};

export default About;