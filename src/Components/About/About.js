import React, { useContext } from 'react';
import{ UserAuthorContext } from '../Context/AuthorContext';

const About = () => {
  const {user} =useContext(UserAuthorContext)

  return (
    <div className=' container mx-auto text-center '>
      <h1>about page</h1>
    </div>
  );
};

export default About;