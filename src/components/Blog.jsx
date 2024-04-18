import React from 'react'
import { Link } from 'react-router-dom';

const Blog = ({ blog }) => {
  return (
      <div>
          <div className="dark:bg-gray-100 dark:text-gray-800">
              <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-50">
                  <div className="flex items-center justify-between">
                      <span className="text-sm dark:text-gray-600">{blog.posted_time}</span>
                  </div>
                  <div className="mt-3">
                      <Link to={`/blogs/${blog.id}`}  className="text-2xl font-bold hover:underline">{ blog.title}</Link>
                      <p className="mt-2">{blog.blog_description}</p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                      <Link to={`/blogs/${blog.id}`}  className="hover:underline dark:text-violet-600">Read more</Link>
                      <div>
                          <a className="flex items-center">
                              <img src={blog.image} className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                              <span className="hover:underline dark:text-gray-600">{ blog.author.name}</span>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Blog