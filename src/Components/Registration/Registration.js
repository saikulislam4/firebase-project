import React, { useContext, useState } from 'react';
import { FaUserTie } from 'react-icons/fa';
import { Link} from 'react-router-dom';
import { UserAuthorContext } from '../Context/AuthorContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom';

const Registration = () => {
    const navigate = useNavigate();

const {createUser} = useContext(UserAuthorContext)
    const handelSubmit = (e) =>{
        e.preventDefault()

        if(!fullName ){setFullNameError('Please fill out this field.')}
        else if(!email){setEmailError('Please fill out this field.')}
        else if(!number){setNumberError('Please fill out this field.')}
        else if(!password){setPasswordError('Please fill out this field.')}
        else if(!checkBox){setCheckBoxError('Please Check this box.')}
        else{
            createUser(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                toast.success('Registration Complete' )
                console.log(user);
                setTimeout(() =>{
                    navigate("/login")
                },2000);

              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
              })
        }


    }
// ---------Handel full Name function---------
const [fullName, setFullName]= useState('')
const [fulNameError, setFullNameError]= useState('')
const handelFullName = (e) =>{
    setFullName(e.target.value)
    setFullNameError('')
}
// ---------Handel E-mail function---------
const [email, setEmail]= useState('')
const [emailError, setEmailError]= useState('')
const handelEmail = (e) => {
    setEmail(e.target.value)
    setEmailError('')
}
// ---------Handel Number function---------
const [number, setNumber]= useState('')
const [numberError, setNumberError]= useState('')
const handelNumber = (e) => {
    setNumber(e.target.value)
    setNumberError('')
    
}
// ---------Handel password function---------
const [password, setPassword]= useState('')
const [passwordError, setPasswordError]= useState('')
const handelPasseor = (e) => {
    setPassword(e.target.value)
    setPasswordError('')
    
    
}
// ---------Handel CheckBox function---------
const [checkBox, setCheckBox]= useState('')
const [checkBoxError, setCheckBoxError]= useState('')
const handelCheckBox = (e) => {
    setCheckBox(e.target.value)
    setCheckBoxError('')


}


    return (
        <div>
            <ToastContainer></ToastContainer>
            <div className=' flex justify-center items-center container mx-auto w-40% m-auto text h-screen '>
                    <form onSubmit={handelSubmit}>
            <div className=" loging border-spacing-1 px-20 py-10 bg-black bg-opacity-20 rounded-lg  text-center">
                <div className="icon  text-9xl justify-center flex mb-3 ">
                    <FaUserTie></FaUserTie>

                </div>
                <h1 className=' text-5xl mb-10'>Create an Account</h1>
                <div className="text grid grid-cols-1">
                    <div className="email  mb-5 grid grid-cols-2 relative">
                    <label className=' w-40 text-end' htmlFor="First Name"> Full Name : </label>
                    <input onChange={handelFullName} className=' p-2 bg-transparent mb-3 border rounded-sm font-[200]'  type="text"  placeholder='Type Your Full Name'/>
                    <h6 className='text-red-700  ml-[18rem]  text-start mt-14 absolute mt text-[18px]'>{fulNameError}</h6>
                    
                    </div >
                    <div className=" email  mb-5 grid grid-cols-2 relative">
                        <label className='w-40 text-end' htmlFor="First Name"> Email : </label>
                    <input onChange={handelEmail} className='  p-2 bg-transparent border rounded-sm mb-3 font-[200] '  type="text"  placeholder='Type Your E-mail'/>
                    <h6 className='text-red-700  ml-[18rem]  text-start mt-14 absolute mt text-[18px]'>{emailError}</h6>
                    
                    </div>
                    <div className=" email  mb-5 grid grid-cols-2 relative">
                        <label className='w-40 text-end' htmlFor="First Name"> Number : </label>
                    <input onChange={handelNumber} className='  p-2 bg-transparent border rounded-sm mb-3 font-[200]'  type="number"  placeholder='Type Your Number'/>
                    <h6 className='text-red-700  ml-[18rem]  text-start mt-14 absolute mt text-[18px]'>{numberError}</h6>
                    
                    </div>
                    <div className=" email  mb-5 grid grid-cols-2 relative">
                        <label className='w-40 text-end' htmlFor="First Name"> Passoord : </label>
                    <input onChange={handelPasseor} className='  p-2 bg-transparent border rounded-sm mb-3 font-[200]'  type="password"  placeholder='Type Your Password'/>
                    <h6 className='text-red-700  ml-[18rem]  text-start mt-14 absolute mt text-[18px]'>{passwordError}</h6>

                    </div>
                   
                </div>
                <div className="botton flex justify-between mt-5 mb-10">
                    <div className="check flex relative w-60">
                    <input onChange={handelCheckBox} type="checkbox" name='Remember' className=' mr-2 ml-10' />
                    <h6 className='text-[18px] font-[300]'>Check box</h6>
                    <h6 className='text-red-700  ml-[3rem]  text-start mt-6 absolute mt text-[18px]'>{checkBoxError}</h6>
                    </div>
                    <div className="login flex">
        
                    <h6 className='text-[20px] mr-3 font-[300] '>Have an Account?</h6>
                    <Link to='/login' className="text-[18px]  hover:text-red-600  ">login</Link>

                    </div>

                </div>
                <button className='block w-full font-bold px-12 py-3 text-bg-white rounded-lg text-black hover:bg- bg-white hover:text-white hover:bg-red-600' type='submit'>Create account</button>
            
            </div>
            </form>
        
                
        </div>
        </div>
    );
};

export default Registration;