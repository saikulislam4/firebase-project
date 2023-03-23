import React, { createContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/FirebaseConfig';
export const UserAuthorContext= createContext()

   
const AuthorContext = ({children}) => {
    const [user, setUser]= useState ({name: 'test'})
    const auth = getAuth(app)
    const createUser = (email, password) =>{
        return(
            createUserWithEmailAndPassword(auth, email, password)
        )


    }
    


    const userInfo= {user, createUser}
    return (
        <UserAuthorContext.Provider value={userInfo}>
            {children}
            
        </UserAuthorContext.Provider>
    );
};

export default AuthorContext;