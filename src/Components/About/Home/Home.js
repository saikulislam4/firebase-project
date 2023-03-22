import React, { useEffect, useState } from 'react';

const Home = () => {
    const [test, setTest]= useState([])
    useEffect(()=>{
        fetch ('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(data => setTest(data))
    })
    return (
        <div className='flex justify-center items-center container mx-auto w-40% m-auto text h-screen   '>
           
           <h1 className='text-[80px] uppercase'>welcome to our website </h1>
        </div>
    );
};

export default Home;