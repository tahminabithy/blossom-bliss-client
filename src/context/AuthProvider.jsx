import React, { createContext, useEffect, useState } from 'react'
import { app } from '../../public/Firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import useAxiosPublic from '../hooks/useAxiosPublic';

export const authContext = createContext(null);
const axiosPublic = useAxiosPublic();
export default function AuthProvider({ children }) {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app);
    const axiosPublic = useAxiosPublic();

    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)

    }
    const gmailLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)

    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setLoading(true)
                const uid = user.uid;
                const userInfo = {
                    email: user.email
                }
                axiosPublic.post('/jwt', userInfo).then(res => {
                    localStorage.setItem("access_token", res.data.token)
                })
                setUser(user)
                localStorage.removeItem('access_token')
                setLoading(false)
                // ...
            } else {
                // User is signed out
                // ...
                setUser(null)
                setLoading(false)
            }
        })
        return unsubscribe
    }, [])

    const authInfo = {
        user,
        loading,
        setLoading,
        registerUser,
        loginUser,
        logOut,
        gmailLogin
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    )
}
