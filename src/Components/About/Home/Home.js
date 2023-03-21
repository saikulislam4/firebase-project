import React, { useEffect, useState } from 'react';

const Home = () => {
    const [test, setTest]= useState([])
    useEffect(()=>{
        fetch ('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(data => setTest(data))
    })
    return (
        <div className='container mx-auto'>
            <h1> this is home page : {test.length} </h1>
        </div>
    );
};

export default Home;