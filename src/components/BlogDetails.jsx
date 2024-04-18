import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import moment from 'moment';

const BlogDetails = () => {
    const blogs = useLoaderData()
    const {id} = useParams()
    console.log(blogs);
    const blog = blogs.find((blog) => blog.id === +id)
    const dateString=blog.posted_time
    return (
        <div>
            <div className="max-w-4xl mx-auto p-6 overflow-hidden rounded-lg shadow dark:bg-gray-50 dark:text-gray-800">
                <article>
                    <h2 className="text-xl font-bold">{ blog.title}</h2>
                    <p className="mt-4 dark:text-gray-600">{blog.details}</p>
                    <div className="flex items-center mt-8 space-x-4">
                        <img src={blog.image} alt="" className="w-10 h-10 rounded-full dark:bg-gray-500" />
                        <div>
                            <h3 className="text-sm font-medium">{ blog.author.name}</h3>
                            <p className="text-sm dark:text-gray-600">{moment(dateString).format('MMMM DD YYYY')}</p>
                            <p className="text-sm dark:text-gray-600">{ blog.author.email}</p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default BlogDetails