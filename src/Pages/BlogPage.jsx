import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Blog from '../components/Blog';
import { Helmet } from 'react-helmet-async';

const BlogPage = () => {
    const blogs = useLoaderData()
    return (
        <>
            <Helmet>
                <title>Blogs | Property Pulse</title>
            </Helmet>
            <div className='space-y-4 p-4 bg-gray-100'>
                {blogs.map((blog) => <Blog key={blog.id} blog={blog} />)}
            </div>
        </>
    )
}

export default BlogPage