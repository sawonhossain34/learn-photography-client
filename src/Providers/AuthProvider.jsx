import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({Children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);


    const googleProvider = new GoogleAuthProvider();

 const createUser = (email,password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
 }

 const signIn =(email,password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
 }

 const logOut = () => {
    setLoading(true);
    return signOut(auth);
 }
 
 const updateUserProfile = (name,photo) => {
  return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    })
 }

 const googleSignIn = () => {
   setLoading(true);
   return signInWithPopup(auth,googleProvider);
   
 }

 useEffect( () => {

    const unSubscrib = onAuthStateChanged(auth , currentUser => {
        setUser(currentUser);
        console.log('current user', currentUser);
    })
    return () => {
        return unSubscrib();
    }
 } , [])




    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleSignIn,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {Children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;