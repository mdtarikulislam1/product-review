import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import auth from '../../firebase/firebase.config'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
export default function Authprovider({children}) {
const [loading,setLoading]=useState(true)
const [user,setUser]=useState(null)

   const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
   }

   const signin=(email,password)=>{
   setLoading(true)
   return signInWithEmailAndPassword(auth,email,password)
   }

   const googleProvider = new GoogleAuthProvider(); 

const googleSignIn = () => {
  setLoading(true);
  return signInWithPopup(auth, googleProvider);
};

  const signOutUser=()=>{
  setLoading(true)
  return signOut(auth)
  }

   useEffect(()=>{
    const unsubsCribe = onAuthStateChanged(auth,currentUser=>{
    setUser(currentUser)
    setLoading(false)
    })
    return ()=>{
      unsubsCribe()
    }
   },[])

   const authinfo={
   loading,
   setLoading,
   createUser,
   signin,
   user,
   signOutUser,
   googleSignIn
  } 

  return (
   
    <AuthContext value={authinfo}>
      {children}
    </AuthContext>
  )
}
