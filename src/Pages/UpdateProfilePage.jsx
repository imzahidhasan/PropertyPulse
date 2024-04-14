import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { FirebaseContext } from '../Firebase/FirebaseProvider';
import toast from 'react-hot-toast';

const UpdateProfilePage = () => {
  const { updateUser }=useContext(FirebaseContext)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = ({ name, url }) => { 
    updateUser(name, url).then(() => {
      toast.success("Info updated successfully!")
      reset()
    }).catch(() => {
      toast.error('Please login first')
    })
   }
  return (
    <>
      <div className='p-5 mx-auto'>
        <div>
          <h1 className='font-bold text-2xl text-center p-4'>Update Profile</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full mx-auto max-w-xs">
            <div className="label">
              <span className="label-text">Enter your name?</span>
            </div>
            <input {...register("name", { required: true })} type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />
            {errors.name && <span className='text-red-500'>This field is required</span>}
          </label>
          <label className="form-control mx-auto w-full max-w-xs">
            <div className="label">
              <span className="label-text">Your Photo URL?</span>
            </div>
            <input {...register("url", {
              pattern: {
                value: /^https:\/\//,
                message: "URL must start with https://"
              }
            })} type="text" placeholder="URL " className="input input-bordered w-full max-w-xs" />
            {errors.url && <span className='text-red-500'>{errors?.url?.message}</span>}
          </label>
          <div className='text-center mt-5'>
            <button className='btn  w-full max-w-xs text-center btn-primary'> Update</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default UpdateProfilePage