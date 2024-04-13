import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    const links = <>
        <li><NavLink to={'/'} className={({ isActive, isPending }) =>
            isPending ? "text-green-700" : isActive ? "text-red-700" : ""
        }>Home</NavLink></li>
        <li><NavLink to={'/register'} className={({ isActive, isPending }) =>
            isPending ? "text-green-700" : isActive ? "text-red-700" : ""
        }>Register</NavLink></li>
        <li><NavLink to={'/update-profile'} className={({ isActive, isPending }) =>
            isPending ? "text-green-700" : isActive ? "text-red-700" : ""
        }>Update Profile</NavLink></li>
    </>




    return (
        <div className="navbar bg-base-100 container mx-auto" >
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">PropertyPulse</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <div className="avatar">
                    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <Link to={'/login'} className="btn">Login</Link>
            </div>
        </div>
    )
}

export default Navbar