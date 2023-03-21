import React from 'react';
import { Link } from 'react-router-dom';




const Loging = () => {
    return (
        <div className=' flex justify-center items-center container mx-auto w-40% m-auto text h-screen '>
            <div className="loging border-spacing-1 p-24 bg-black bg-opacity-30 rounded-lg  text-center">
                <div className="icon">

                </div>
                <h1>User logig</h1>
                <div className="text">
                    
                    <div className="email my-10">
                    <input className=' rounded-sm' type="text"  placeholder='type your email/number'/>
                    </div>
                    <div className="email">
                    <input className=' rounded-sm' type="password"  placeholder='type your password'/>
                    </div>
                   
                </div>
                <div className="botton flex justify-between mt-5">
                    <h1>create account</h1>
                    <Link to="/registration"><h1>Signup</h1></Link>
                </div>

            </div>
        </div>
    );
};

export default Loging;