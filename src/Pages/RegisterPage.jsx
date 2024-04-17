import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FirebaseContext } from '../Firebase/FirebaseProvider'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { BsEye } from 'react-icons/bs'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { Helmet } from 'react-helmet-async'

const RegisterPage = () => {
    const [toggle, setToggle] = useState(true)
    const navigate = useNavigate()
    const { createUser, updateUser, user, logOutUser } = useContext(FirebaseContext)
    console.log(user);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    const onSubmit = ({ name, email, url, password }) => {
        const myPromise = createUser(email, password)
            .then(
                (user) => {
                    if (user) {
                        reset()
                        updateUser(name, url).then(
                            navigate('/')
                        )
                    }
                }
            )
        toast.promise(myPromise, {
            loading: 'Creating your account',
            success: 'successfully created your account',
            error: 'Error occurred!, Could not created your account',
        });
    }


    return (
        <>
            <Helmet>
                <title>Register | Property Pulse</title>
            </Helmet>

            <div className='mx-auto p-5'>
                <div>
                    <h1 className='font-bold text-2xl text-center p-4'>Register Now</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <label data-aos="fade-down" data-aos-delay="50" className="form-control w-full mx-auto max-w-xs">
                        <div className="label">
                            <span className="label-text">Enter your name?</span>
                        </div>
                        <input {...register("name", { required: true })} type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />
                        {errors.name && <span className='text-red-500'>This field is required</span>}
                    </label>

                    <label data-aos="fade-down"  data-aos-delay="500" className="form-control mx-auto w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Enter your email?</span>
                        </div>
                        <input  {...register("email", { required: true })} type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                        {errors.email && <span className='text-red-500'>This field is required</span>}

                    </label>

                    <label data-aos="fade-down" data-aos-delay="1000" className="form-control mx-auto w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Your Photo URL?</span>
                        </div>
                        <input {...register("url", { required: true })} type="text" placeholder="URL " className="input input-bordered w-full max-w-xs" />
                        {errors.url && <span className='text-red-500'>This field is required</span>}
                    </label>

                    <label data-aos="fade-down" data-aos-delay="1500" className="form-control mx-auto w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Enter your password?</span>
                        </div>
                        <div className='relative'>
                            <input {...register("password", {
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                                    message: "Password must contain at least one uppercase letter, one lowercase letter, and at least 6 characters long."
                                }
                            })} type={toggle ? "password" : 'text'} placeholder="Password" className="input input-bordered w-full max-w-xs" />
                            <span onClick={() => setToggle(!toggle)} className='flex items-center absolute top-4 text-2xl right-2'>
                                {toggle ? <AiFillEyeInvisible />
                                    : <AiFillEye />}
                            </span>
                        </div>
                        {errors.password && <span className='text-red-500'>{errors.password.message}</span>}

                    </label>
                    <div  className='text-center mt-5'>
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