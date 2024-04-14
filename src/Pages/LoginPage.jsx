import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FirebaseContext } from '../Firebase/FirebaseProvider'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth'

const LoginPage = () => {
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()


    const { logInUser, googleLogin, githubLogin } = useContext(FirebaseContext)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    const onSubmit = ({ email, password }) => {
        const myPromise = logInUser(email, password)
            .then(
                (user) => {
                    if (user) {
                        reset()
                    }
                }
            )
        toast.promise(myPromise, {
            loading: 'Wait!, login......',
            success: 'successfully!, Login to your account',
            error: 'Please Enter Correct Email and Password',
        },
            {
                error: {
                    duration: 2000,
                    icon: '❌',
                },
            });
    }

    const handleGoogle = () => {
        googleLogin(googleProvider)
            .then((result) => { console.log(result)})
    }
    const handleGithub = () => {
        githubLogin(githubProvider)
            .then((result) =>{
            console.log(result);
        })
    }
    return (
        <div className='p-6'>
            <div>
                <h1 className='font-bold text-2xl text-center p-4'>Login Now</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="form-control mx-auto w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Enter your email?</span>
                    </div>
                    <input  {...register("email", { required: true })} type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                    {errors.email && <span className='text-red-500'>This field is required</span>}
                </label>
                <label className="form-control mx-auto w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Enter your password?</span>
                    </div>
                    <input {...register("password", {
                        required: true
                    })} type="text" placeholder="Password" className="input input-bordered w-full max-w-xs" />
                    {errors.password && <span className='text-red-500'>This field is required</span>}
                </label>
                <div className='text-center mt-5'>
                    <button className='btn  w-full max-w-xs text-center btn-primary'> Login</button>
                </div>
                <div className='flex text-center items-center justify-center p-4 gap-2'>
                    <h1>Dont have an account?</h1>
                    <p className='link link-secondary'><Link to={'/register'}>Register</Link></p>
                </div>
            </form>

            <div class="divider max-w-xs mx-auto">or</div>
            <div className='max-w-xs mx-auto justify-around items-center  flex'>
                <button onClick={() => handleGoogle()} className='btn btn-success'>Google</button>
                <button onClick={() => handleGithub()} className='btn btn-secondary'>Github</button>
            </div></div>
    )
}

export default LoginPage