import React, { useContext } from 'react';
import { UserAuthorContext } from '../Context/AuthorContext';

const Profile = () => {
    const {user}=useContext(UserAuthorContext)

    return (
        <div className='container mx-auto'>
            
           <div className="div border-2 w-[40%] p-5">
            <ul>
                <li><p className=" mr-5">Email : {user?.email} </p></li>
            </ul>
           </div>
            
        </div>
    );
};

export default Profile;