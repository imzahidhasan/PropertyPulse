import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const DetailsPage = () => {
  const id = useParams()
  
  console.log(id);
  return (
    <div>DetailsPage</div>
  )
}

export default DetailsPage