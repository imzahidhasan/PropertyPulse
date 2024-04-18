import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import ErrorPage from '../Pages/ErrorPage'
import HomePage from '../Pages/HomePage'
import RegisterPage from '../Pages/RegisterPage'
import LoginPage from '../Pages/LoginPage'
import UpdateProfilePage from '../Pages/UpdateProfilePage'
import DetailsPage from '../Pages/DetailsPage'
import PrivetRoute from '../Pages/PrivetRoute'
import BlogPage from '../Pages/BlogPage'
import BlogDetails from '../components/BlogDetails'
const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
                loader: () => fetch('/data.json')
            },
            {
                path: 'register',
                element: <RegisterPage />
            },
            {
                path: 'login',
                element: <LoginPage />
            },
            {
                path: 'update-profile',
                element: <PrivetRoute><UpdateProfilePage /></PrivetRoute>
            },
            {
                path: '/details/:id',
                element: <PrivetRoute><DetailsPage /></PrivetRoute>,
                loader:()=>fetch('/data.json')
            },
            {
                path: 'blogs',
                element: <PrivetRoute><BlogPage /></PrivetRoute>,
                loader:()=>fetch('/blog.json'),
            },
            {
                path: 'blogs/:id',
                element: <BlogDetails />,
                loader:()=>fetch("/blog.json")
            }
            
        ]
    },

])


export default routes