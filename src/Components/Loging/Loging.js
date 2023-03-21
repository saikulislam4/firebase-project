import React from 'react';
import { FaUserTie} from 'react-icons/fa';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';





const Loging = () => {
    return (
        <div className=' flex justify-center items-center container mx-auto w-40% m-auto text h-screen '>
            <div className="loging border-spacing-1 px-20 py-10 bg-black bg-opacity-20 rounded-lg  text-center">
                <div className="icon  text-9xl justify-center flex mb-3 ">
                    <FaUserTie></FaUserTie>

                </div>
                <h1 className=' text-5xl'>User logIn</h1>
                <div className="text">
                    
                    <div className="email my-10">
                    <input className='p-2 bg-transparent border rounded-sm outline-0 outline-offset-0'  type="text"  placeholder='type your email/number'/>
                    </div>
                    <div className="email flex">
                    <input className='p-2 bg-transparent border rounded-sm' type="password"  placeholder='type your password'/> 
                    {/* <RiLockPasswordLine></RiLockPasswordLine> */}
                    </div>
                   
                </div>
                <div className="botton flex justify-between mt-5 mb-10">
                    <div className="check">
                    <input type="checkbox" name='Remember' className=' mr-2' />Remember
                    </div>
                    <Link to="/registration"><h6>forget Password?</h6></Link>
                 
                </div>
                <div className="button ">
                <Link to="/"className=" block font-bold px-12 mb-3 py-3 text-bg-white rounded-lg text-black hover:bg- bg-white hover:text-white hover:bg-red-600 ">Login</Link>
                <Link to="/"className=" block font-bold px-12 py-3 text-bg-white rounded-lg text-black hover:bg- bg-white hover:text-white hover:bg-red-600">create account</Link>
                </div>
                
            
            </div>
                
        </div>
    );
};

export default Loging;