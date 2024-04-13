import React from 'react'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
    return (<>
        <div className='mx-auto p-5'>
            <div>
                <h1 className='font-bold text-2xl text-center p-4'>Register Now</h1>
            </div>
            <form >
                <label className="form-control w-full mx-auto max-w-xs">
                    <div className="label">
                        <span className="label-text">Enter your name?</span>
                    </div>
                    <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control mx-auto w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Enter your email?</span>
                    </div>
                    <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control mx-auto w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Your Photo URL?</span>
                    </div>
                    <input type="text" placeholder="URL " className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control mx-auto w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Enter your password?</span>
                    </div>
                    <input type="text" placeholder="password" className="input input-bordered w-full max-w-xs" />
                </label>
                <div className='text-center mt-5'>
                    <button className='btn  w-full max-w-xs text-center btn-primary'> Submit</button>
                </div>
                <div className='flex justify-start gap-4 max-w-xs mx-auto p-5'>
                    <p>ALready have an account?</p>
                    <p className="link link-secondary"><Link to={'/login'} >Login</Link></p>
                </div>
            </form>
            
        </div>
    </>
    )
}

export default RegisterPage