import React from 'react'
import './City.css'
function City(city) {
  return (
    <div className='cityElement'>
        <img src={city.image} alt="" />
        <p>{city.name}</p>
    </div>
  )
}

export default City