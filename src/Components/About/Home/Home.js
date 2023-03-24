import React, { useContext} from 'react';
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

        <div className='flex justify-center items-center container mx-auto w-40% m-auto text h-screen   '>
           <div className="main">
           <h1 className='text-[80px] uppercase'>welcome to our website </h1>
           <div className="div text-center">
           </div>

           </div>
        </div>
    );
};

export default Home;