import React, { useState } from 'react';
import { FaUserTie} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Loging = () => {

    const [emailError, setEmailError]= useState('')
    const [passwordError, setpasswordError]= useState('')

// --------------Email handel function--------------
const [email, setEmail]= useState('')

const handlelSubmit = (e) =>{
    e.preventDefault()
    if(!email && setEmail){setEmailError('Email is Require')}
    else if(!password && setPassword){setpasswordError('Password is Require')}
 
}
const handelEmail = (e) =>{
    setEmail(e.target.value)
    setEmailError('')
}
// --------------Email handel function--------------
const [password, setPassword]= useState('')

const handelPassword = (e) =>{
    setPassword(e.target.valu)
    setpasswordError('')
}


    return (
        <div className=' flex justify-center items-center container mx-auto w-40% m-auto text h-screen '>
            <div className="loging border-spacing-1 px-20 py-10 bg-black bg-opacity-20 rounded-lg  text-center">
                <div className="icon  text-9xl justify-center flex mb-3 ">
                    <FaUserTie></FaUserTie>

                </div>
                <h1 className=' text-5xl'>User logIn</h1>
                <form onSubmit={handlelSubmit}>
                <div className="text">
                    
                    <div className="email my-10 relative">
                    <input onChange={handelEmail} className='p-2 bg-transparent border rounded-sm outline-0 outline-offset-0'  type="text"  placeholder='type your email/number'/>
                    <h1 className='text-red-700 text-start mt-1 absolute mt text-[18px]'>{emailError}</h1>
                    </div>
                    <div className="email flex relative">
                    <input onChange={handelPassword} className='p-2 bg-transparent border rounded-sm' type="password"  placeholder='type your password'/> 
                    <h1 className='text-red-700 text-start mt-14 absolute mt text-[18px]'>{passwordError}</h1>
                    </div>
                   
                </div>
                <div className="botton flex justify-between mt-5 mb-10">
                    <div className="check">
                    <input type="checkbox" name='Remember' className=' mr-2' />Remember
                    </div>
                    <Link to="/registration"><h6>forget Password?</h6></Link>
                 
                </div>
                <div className="button ">
                <button className=' w-full block font-bold px-12 mb-3 py-3 text-bg-white rounded-lg text-black hover:bg- bg-white hover:text-white hover:bg-red-600 ' type='submit'>Login</button>
                <Link className=" block font-bold px-12 py-3 text-bg-white rounded-lg text-black hover:bg- bg-white hover:text-white hover:bg-red-600">create account</Link>
                <button type='submit'>test</button>
                </div>
                
                </form>
            </div>
                
        </div>
    );
};

export default Loging;