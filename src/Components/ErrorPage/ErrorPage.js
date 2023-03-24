import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className=' flex justify-center items-center h-screen '>
         <div className="text text-center ">
         <h1 className=' text-[110px]'>hi developer!</h1>
            <h1 className=' text-[80px] mb-10'>404!</h1>
            <Link to="/" className="font-bold px-10 py-2   text-bg-white rounded-lg text-black hover:bg- bg-white hover:text-white hover:bg-red-600">
             Go Back
            </Link>
         </div>
            
        </div>
    );
};

export default ErrorPage;