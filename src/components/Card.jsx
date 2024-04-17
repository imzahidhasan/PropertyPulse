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
        location,
        facilities
    }=property
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure className='max-h-72 relative'>
                <div className='badge badge-secondary absolute top-2 badge-lg right-2'>{ `For ${status}`}</div>
                <img  src={ image} />
            </figure>
            <div className='bg-green-600 p-1 m-4 max-w-28 text-white rounded-md'>{ price}</div>
            <div className="card-body">
                <h2 className="card-title">{estate_title}</h2>
                <p>{description.slice(0,120)}</p>
                <p className='flex gap-2 text-base items-center'><IoLocationOutline className='text-red-500' />{location}</p>
                <div className='divider'></div>
                <div className="card-actions justify-end">
                    <Link to={user ? `details/${id}`:'/login'}><button className="btn btn-primary">View Detail</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Card