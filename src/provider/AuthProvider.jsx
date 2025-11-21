import React, { useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import AuthContext from '../context/AuthContext';
import useAxios from '../hooks/useAxios';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const axios = useAxios();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then(data => setAllProducts(data.data));
    }, [axios])

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