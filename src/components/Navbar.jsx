import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FirebaseContext } from '../Firebase/FirebaseProvider'
import { Tooltip } from 'react-tooltip'

const Navbar = () => {
    const { user, logOutUser, setUser } = useContext(FirebaseContext)
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

    const handleLogout = () => {
        logOutUser()
        setUser(null)
    }
    return (
        <div className="navbar bg-base-100 container relative z-30 mx-auto" >
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost text-xl">PropertyPulse</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                {user ? <div className="avatar">
                    <div className="w-8 relative z-30 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <a className='' data-tooltip-id="tooltip" data-tooltip-content={ user?.displayName}><img src={user?.photoURL} /></a>
                    </div>
                </div> : ''}

                {user ? <button onClick={handleLogout} className="btn">Logout</button> : <Link to={'/login'} className="btn">Login</Link>}
                <Tooltip id='tooltip'/>
            </div>
        </div>
    )
}

export default Navbar