import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, onAuthStateChanged, updateProfile, GoogleAuthProvider, signInWithPopup, signOut, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'


export const AuthContext = createContext();

const auth = getAuth(app)
//google auth provider
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {

    //   create email or password or update details---
    const createUsers = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass)
    }
    const updateDetails = (userName, updatephoto) => {
        return updateProfile(auth.currentUser, {
            displayName: userName, photoURL: updatephoto
        })
    }
    //emailverifi
    const emailVerification = () => {
        return sendEmailVerification(auth.currentUser);
    }
    //login part sing In
    const userSingInWithEmailPassword = (email, password) =>{
       return signInWithEmailAndPassword(auth, email, password)
    }

    // google auto login--
    const googleAutoLogIn = () => {
        return signInWithPopup(auth, googleProvider)
    }


    const authInfo = { createUsers, updateDetails, emailVerification, googleAutoLogIn, userSingInWithEmailPassword }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>);
};

export default AuthProvider;