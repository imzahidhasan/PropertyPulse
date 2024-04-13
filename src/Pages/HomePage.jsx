import React from 'react'
import Slider from '../components/Slider'
import { useLoaderData } from 'react-router-dom'
import Card from '../components/Card'

const HomePage = () => {
  const data = useLoaderData()
  return (
    <>
      <Slider />
      <div>
        <h1 className='text-2xl font-bold mt-4 text-center '>Available Properties</h1>
        <p className='text-lg text-center p-2'>From quaint cottages to modern villas, our selection of residential properties offers something  for individuals and families alike. <br /> Experience comfort, style, and convenience in your new home.</p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-5 p-5 md:grid-cols-3'>

        {
          data.map((property) => <Card key={property.id} property={ property} />)
        }
        
      </div>
    </>

  )
}

export default HomePage