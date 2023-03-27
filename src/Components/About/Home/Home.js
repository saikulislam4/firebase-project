import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import {ImFacebook, ImLinkedin2, ImGithub} from 'react-icons/im'
import { UserAuthorContext } from '../../Context/AuthorContext';


const Home = () => {
// const test = useContext(UserAuthorContext);
    // const [test, setTest]= useState([])
    // useEffect(()=>{
    //     fetch ('https://jsonplaceholder.typicode.com/users')
    //     .then(Response => Response.json())
    //     .then(data => setTest(data))
    // })
    const {user, createUser} = useContext(UserAuthorContext)
    console.log(user);



    return (

        <div className=' container mx-auto text-center mt-[9rem] '>


    
            {
                user?
                <>
            <div className="main grid grid-cols-2 w-full relative   h-[700px] p-2">
            <div className="flex flex-col m-auto text-start pl-10 ">
            <h1 className='text-[80px] '> Welcome !</h1>
            <h1 className='text-[40px] text-[#fe236c] my-4 '> home</h1>
            <p className=' font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ut sunt nisi doloribus sapiente amet nostrum modi culpa enim possimus.</p>
            <div className=" mt-6">
            <Link to="/shop" className="font-bold px-10 py-2  text-bg-white rounded-lg text-black hover:bg- bg-white hover:text-white hover:bg-[#fe236c]">
                discover more
                </Link>
            </div>
    
            </div>
            <div className="image flex items-center m-auto p-6">
            <img className=' w-75' src="welcome.png" alt="about us" />
            </div>
            </div>
                </>
            :
            <main>
            <div>
             <div className="grid grid-cols-1 m-auto justify-center items-center h-screen  mt-[-9rem]">
            <div className="">
            <h1 className='text-[80px] mb-5'> Welcome our website!</h1>
            <Link to="/login" className="font-bold px-10 py-2  text-bg-white rounded-lg text-black hover:bg- bg-white transition hover:text-white hover:bg-[#fe236c]">
                discover more
                </Link>
            </div>
            </div>
            </div>
    
            </main>
                
            }


        
      </div>
    );
};

export default Home;