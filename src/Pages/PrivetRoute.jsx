import React, { useContext } from 'react'
import { FirebaseContext } from '../Firebase/FirebaseProvider'
import { Navigate, useLocation } from 'react-router-dom'

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(FirebaseContext)
    const location = useLocation()
    if (loading) {
        return (
            <div className=' flex justify-center items-center min-h-screen'>
                <div className="loading max-w-16 loading-dots loading-lg"></div>
            </div>
        )
    }
    if (!user) {
        return <Navigate to={'/login'} state={location.pathname} ></Navigate>
    }
    return (
        <div>{children}</div>
    )
}

export default PrivetRoute