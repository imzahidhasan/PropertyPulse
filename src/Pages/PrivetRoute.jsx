import React, { useContext } from 'react'
import { FirebaseContext } from '../Firebase/FirebaseProvider'
import { Navigate, useLocation } from 'react-router-dom'

const PrivetRoute = ({ children }) => {
    const { user,loading } = useContext(FirebaseContext)
    const location = useLocation()
    if (loading) {
        return (
            <div><span className="loading loading-dots loading-lg"></span></div>
        )
    }
    if (!user) {
        return <Navigate to={'/login'} state={location?.pathname || '/'}></Navigate>
    }
    return (
        <div>{children}</div>
    )
}

export default PrivetRoute