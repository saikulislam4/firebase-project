import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
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
    
    const logIn = (email, password) => {
        return(
            signInWithEmailAndPassword (auth, email, password)
        )
    }

    const logOut =() =>{
        return(
            signOut(auth)
        )
    }

useEffect(()=>{
const subscrib = onAuthStateChanged( auth, currentUser => {
    setUser(currentUser)
    return() =>{
        subscrib()
    }
})
},[])



    const userInfo= {user, createUser, logIn, logOut}
    return (
        <UserAuthorContext.Provider value={userInfo}>
            {children}
            
        </UserAuthorContext.Provider>
    );
};

export default AuthorContext;