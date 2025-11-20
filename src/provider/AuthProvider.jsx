import React, { use, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import AuthContext from '../context/AuthContext';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const productsPromise = fetch(`http://localhost:5000/products`).then(res => res.json());
// console.log(productsPromise);

const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const allProducts = use(productsPromise);
    // console.log(allProducts);

    const signupWithEmail = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginWithEmail = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        return signOut(auth);
    }

    // authentication state observer: update users login logout in UI
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }
    }, []);

    
    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    }

    const authData = {
        signupWithEmail,
        loginWithEmail,
        googleSignIn,
        logOut,
        user,
        setUser,
        loading,
        setLoading,
        allProducts,
        updateUser
    }

    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;