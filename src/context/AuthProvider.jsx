import React, { createContext, useEffect, useState } from 'react'
import { app } from '../../public/Firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
export const authContext = createContext(null);
export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app);


    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)

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
                setUser(user)
                setLoading(false)
                // ...
            } else {
                // User is signed out
                // ...
                setLoading(false)
            }
        })
        return unsubscribe
    }, [])

    const authInfo = {
        user,
        registerUser,
        loginUser,
        logOut
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    )
}
