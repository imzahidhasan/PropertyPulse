import React from 'react'
import { Helmet } from 'react-helmet-async'
import { GoLocation } from 'react-icons/go'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { useLoaderData, useLocation, useParams } from 'react-router-dom'
const DetailsPage = () => {
  const param = useParams()
  const data = useLoaderData()
  const apartment = data.find((home) => home.id === param.id)
  return (
    <div>
      <Helmet>
        <title>Property details | Property Pulse</title>
      </Helmet>

      <div className="card container mx-auto bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={apartment.image} className="rounded-xl" />
        </figure>
        <div className="card-body">
          <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 justify-around'>
            <div>
              <h2 className="card-title">{apartment.estate_title}</h2>
              <p className='flex text-lg items-center gap-2'><GoLocation /> {apartment.location}</p>
            </div>
            <div>
              <p className='text-lg font-medium'>{apartment.area}</p>
              <p className='text-lg font-medium'>{apartment.price}</p>
            </div>
          </div>

          <div>
            <div className='flex justify-evenly md:p-5'>
              <div>
                <p className='text-center rounded-xl p-2 md:p-4 bg-gray-100'>{apartment.bedroom} Bedrooms</p>
              </div>
              <div>
                <p className='text-center rounded-xl p-2 md:p-4 bg-gray-100'>{apartment.bathroom} Bathrooms</p>
              </div>
              <div>
                <p className='text-center rounded-xl p-2 md:p-4 bg-gray-100'>{apartment.garage} Garages</p>
              </div>
            </div>
          </div>

          <div className=' md:max-w-[70%] lg:max-w-[65%] mx-auto'>
            <div>
              <p className='text-lg font-bold'>Description</p>
            </div>
            <div>
              <p className='text-base font-medium'>{apartment.description}</p>
            </div>
          </div>
          <div>
            <div>
              <p className='text-lg md:max-w-[65%] mx-auto font-bold'>Facilities</p>
            </div>
            {
              apartment.facilities.map((data, idx) => <ul className='list-disc font-medium mx-auto max-w-[80%] md:max-w-[60%]' key={idx}><li>{data}</li></ul>)
            }
          </div>

          <div className='h-96 w-full'>
            <div>
              <p className=' text-xl font-bold'>Location:</p>
            </div>
            <MapContainer className='h-full w-full' center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <href="https://www.openstreetmap.org/copyright">OpenStreetMap</href=> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={apartment.coordinate}>
                <Popup>
                  {apartment.location}
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailsPage