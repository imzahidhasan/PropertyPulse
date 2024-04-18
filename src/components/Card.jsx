import React, { useContext } from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../Firebase/FirebaseProvider';
const Card = ({ property }) => {
    const { user } = useContext(FirebaseContext)
    const { image,
        estate_title,
        id,
        description,
        price,
        status,
        area,
        segment,
        location,
    }=property
    return (
        <div data-aos="fade-up"
            className="card card-compact bg-base-100 shadow-xl">
            <figure className='max-h-72 relative'>
                <div className='badge badge-accent absolute top-2 badge-lg right-2'>{ `For ${status}`}</div>
                <img  src={ image} />
            </figure>
            <div className='bg-blue-300 p-2 my-4 md:m-4 text-blue-700 rounded-md'>
                <p>{segment }</p>
            </div>
            <div className='flex justify-between'>
                <div className='bg-blue-300 p-2 md:ml-4  max-w-32 text-blue-700 rounded-md'>{price}</div>
                <div className='bg-blue-300 p-2 md:mr-4 max-w-32 text-blue-700 rounded-md'>{area}</div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{estate_title}</h2>
                <p>{description.slice(0,120)}</p>
                <p className='flex gap-2 text-base items-center'><IoLocationOutline className='text-red-500' />{location}</p>
                <div className='divider'></div>
                <div className="card-actions justify-end">
                    <Link to={ `details/${id}`}><button className="btn bg-blue-300 text-blue-700">View Detail</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Card