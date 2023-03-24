import React, { useContext, useState } from 'react';
import { CiFaceSmile} from 'react-icons/ci';
import {MdOutlineEmail} from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuthorContext } from '../Context/AuthorContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const Navigate= useNavigate()

    const {logIn}=useContext(UserAuthorContext)

const handlelSubmit = (e) =>{
    e.preventDefault()
    if(!email){setEmailError('Email is Require')}
    else if(!password){
        setErrorPassword('password is require');
    }
    else if(!checkBox){
        setErrorCheckBox('please check this box')
    }
    else{
        logIn(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            toast.success('login successfull')
            setTimeout(()=>{
                
                Navigate("/home")
            },1500)

            // ...
            console.log(user)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            if(errorCode === 'auth/user-not-found'){
                setEmailError('E-mail Wrong')
            }
            else if(errorCode === 'auth/wrong-password'){
                setErrorPassword('Password Wrong')
            }
            
          })
    }
}
// --------------Email handel function--------------
const [emailError, setEmailError]= useState('')
const [email, setEmail]= useState('')

const handelEmail = (e) =>{
    setEmail(e.target.value)
    setEmailError('')
}
// --------------Email handel function--------------

const [password, setPassword]= useState('')
const [errorPassword, setErrorPassword]= useState('')

const handelPassword = (e) =>{
    setPassword(e.target.value)
    setErrorPassword('')

}
// --------------Chackbox handel function--------------
const [checkBox, setCheckBox]= useState('')
const [errorCheckBox, setErrorCheckBox]=useState('')

const handelCheckBox =(e) =>{
    setCheckBox(e.target.value)
    setErrorCheckBox('')

}

    return (
        <div className=' flex justify-center items-center container mx-auto w-40% m-auto text h-screen '>
            <ToastContainer></ToastContainer>
          
            <div className=" w-[40%] border-spacing-1 px-20 py-10 bg-black bg-opacity-20 rounded-lg  text-center">
                <div className="icon  text-9xl justify-center flex mb-3 ">
                    <CiFaceSmile></CiFaceSmile>

                </div>
                <h1 className=' text-5xl'>User logIn</h1>
                <form onSubmit={handlelSubmit}>
                <div className="text">
                    
                    <div className="email my-10 relative">
                    <input onChange={handelEmail} className={`p-2 w-full bg-transparent border rounded-sm font-[200] ${emailError && 'border-red-700'}`}  type="email"  placeholder='E-mail'/>
                    <h1 className='text-red-700 text-start mt-1 absolute mt text-[18px]'>{emailError}</h1>
                    <div className="email absolute top-2 mr-2 right-0 text-[38px] "> <MdOutlineEmail></MdOutlineEmail> </div>
                    </div>
                    <div className="email flex relative">
                    <input onChange={handelPassword} className={`p-2 w-full bg-transparent border  rounded-sm font-[200] ${errorPassword && 'border-red-700' }`} type="password"  placeholder=' Password'/> 
                    <h1 className='text-red-700 text-start mt-14 absolute mt text-[18px]'>{errorPassword} </h1>
                    
                    </div>
                   
                </div>
                <div className="botton flex justify-between mt-5 mb-10 relative ">
                    <div  className="check flex">
                    <input onChange={handelCheckBox} type="checkbox" name='Remember' className=' mr-2  ' />
                    <h6 className=' text-[18px] font-[300]'>Check box</h6>
                    <h6 className='text-red-700 text-start mt-7 absolute mt text-[18px]'> {errorCheckBox}</h6>
                    </div>
                    <Link to=""><h6 className=' text-[18px] font-[300]'>forget Password?</h6></Link>
                 
                </div>
                <div className="button ">
                <button className=' w-full block font-bold px-12 mb-3 py-3 text-bg-white rounded-lg text-black hover:bg- bg-white hover:text-white hover:bg-red-600 ' type='submit'>Login</button>
                <Link to='/registration' className=" block font-bold px-12 py-3 text-bg-white rounded-lg text-black hover:bg- bg-white hover:text-white hover:bg-red-600">create account</Link>
                </div>
                
                </form>
            </div>
                
        </div>
    
    );
};

export default Login;