import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import ErrorPage from '../Pages/ErrorPage'
import HomePage from '../Pages/HomePage'
import RegisterPage from '../Pages/RegisterPage'
import LoginPage from '../Pages/LoginPage'
import UpdateProfilePage from '../Pages/UpdateProfilePage'
import DetailsPage from '../Pages/DetailsPage'
const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
                loader:()=>fetch('/data.json')
            },
            {
                path: 'register',
                element:<RegisterPage/>
            },
            {
                path: 'login',
                element:<LoginPage/>
            },
            {
                path: 'update-profile',
                element:<UpdateProfilePage/>
            }
        ]
    },
    {
        path: '/details/:id',
        element:<DetailsPage/>
    }
])


export default routes