import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import auth from './firebase.config'
export const FirebaseContext = createContext(null)

const FirebaseProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(null)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInUser = (email, password) => {
        setLoading(true)

        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOutUser = () => {
        return signOut(auth)
    }
    const googleLogin = (provider) => {
        setLoading(true)

        return signInWithPopup(auth, provider)
    }
    const githubLogin = (provider) => {
        setLoading(true)

        return signInWithPopup(auth, provider)
    }
    const updateUser = (name, url) => {
        setLoading(true)

        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: url
        })
    }
    useEffect(() => {
        setLoading(true)
        const unSubscribe=onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setLoading(false)

            }
        })
        return ()=>unSubscribe()
    }, [])


    const allValues = {
        createUser, logInUser, logOutUser, user, setUser, googleLogin, githubLogin, updateUser,loading
    }

    return (
        <FirebaseContext.Provider value={allValues}>
            {children}
        </FirebaseContext.Provider>
    )

}

export default FirebaseProvider