import React from 'react';
import { FaUserTie } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div>
            <div className=' flex justify-center items-center container mx-auto w-40% m-auto text h-screen '>
                    <form action="">
            <div className=" loging border-spacing-1 px-20 py-10 bg-black bg-opacity-20 rounded-lg  text-center">
                <div className="icon  text-9xl justify-center flex mb-3 ">
                    <FaUserTie></FaUserTie>

                </div>
                <h1 className=' text-5xl mb-10'>Create an Account</h1>
                <div className="text grid grid-cols-1">
                    <div className="email  mb-5 grid grid-cols-2">
                    <label className=' w-40 text-end' htmlFor="First Name"> Full Name : </label>
                    <input className=' p-2 bg-transparent border rounded-sm outline-0 outline-offset-0'  type="text"  placeholder='Type Your Full Name'/>
                    </div>
                    <div className=" email  mb-5 grid grid-cols-2">
                        <label className='w-40 text-end' htmlFor="First Name"> Email : </label>
                    <input className='  p-2 bg-transparent border rounded-sm outline-0 outline-offset-0'  type="email" required  placeholder='Type Your Full Name'/>
                    </div>
                    <div className=" email  mb-5 grid grid-cols-2">
                        <label className='w-40 text-end' htmlFor="First Name"> Number : </label>
                    <input className='  p-2 bg-transparent border rounded-sm outline-0 outline-offset-0'  type="number"  placeholder='Type Your Number'/>
                    </div>
                    <div className=" email  mb-5 grid grid-cols-2">
                        <label className='w-40 text-end' htmlFor="First Name"> Passoord : </label>
                    <input className='  p-2 bg-transparent border rounded-sm outline-0 outline-offset-0'  type="password"  placeholder='Type Your Number'/>
                    </div>
                   
                </div>
                <div className="botton flex justify-between mt-5 mb-10">
                    <div className="check">
                    <input type="checkbox" name='Remember' className=' mr-2' />Remember
                    </div>
                </div>
                <Link className=" block font-bold px-12 py-3 text-bg-white rounded-lg text-black hover:bg- bg-white hover:text-white hover:bg-red-600"><button type='submit'>create account</button></Link>
            
            </div>
            </form>
        
                
        </div>
        </div>
    );
};

export default Registration;