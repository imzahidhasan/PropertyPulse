import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div class=" text-center">
      <Helmet>
        <title>Error occurred | Property Pulse</title>
      </Helmet>

          <h1 class="text-6xl font-bold text-gray-800">404</h1>
          <h2 class="text-2xl font-semibold text-gray-700 mb-4">Oops! Page not found</h2>
          <p class="text-gray-600 mb-4 ">The page you are looking for might have been removed or its name changed <br /> or is temporarily unavailable.</p>
          <Link to={'/'}>
          <button className='btn bg-indigo-600 underline text-white'> Go back to home</button>
          </Link>
      </div>
  )
}

export default ErrorPage