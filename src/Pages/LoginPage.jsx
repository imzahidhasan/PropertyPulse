import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
    return (
        <div className='p-6'>
            <div>
                <h1 className='font-bold text-2xl text-center p-4'>Login Now</h1>
            </div>
            <form >
                <label className="form-control mx-auto w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Enter your email?</span>
                    </div>
                    <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" />
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
                <div className='flex text-center items-center justify-center p-4 gap-2'>
                    <h1>Dont have an account?</h1>
                    <p className='link link-secondary'><Link to={'/register'}>Register</Link></p>
                </div>
            </form>
            
            <div class="divider max-w-xs mx-auto">or</div>
            <div className='max-w-xs mx-auto justify-around items-center  flex'>
                <button className='btn btn-success'>Google</button>
                <button className='btn btn-secondary'>Github</button>
            </div></div>
    )
}

export default LoginPage