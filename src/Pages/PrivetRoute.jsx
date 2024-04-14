import React, { useContext } from 'react'
import { FirebaseContext } from '../Firebase/FirebaseProvider'
import { Navigate, useLocation } from 'react-router-dom'

const PrivetRoute = ({ children }) => {
    const { user } = useContext(FirebaseContext)
    const location = useLocation()
    console.log(location);
    if (!user) {
        return <Navigate to={'/login'}></Navigate>
    }
    return (
        <div>{children}</div>
    )
}

export default PrivetRoute