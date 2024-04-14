import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import auth from './firebase.config'
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth/cordova'
export const FirebaseContext = createContext(null)

const FirebaseProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    console.log(user);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOutUser = () => {
        return signOut(auth)
    }
    const googleLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }
    const githubLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }
    const updateUser = (name, url) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: url
        })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        })
    }, [])


    const allValues = {
        createUser, logInUser, logOutUser, user, setUser, googleLogin, githubLogin, updateUser
    }

    return (
        <FirebaseContext.Provider value={allValues}>
            {children}
        </FirebaseContext.Provider>
    )

}

export default FirebaseProvider