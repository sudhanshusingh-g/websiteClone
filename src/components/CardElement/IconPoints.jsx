import React from 'react'
import './IconPoints.css'
function IconPoints(props) {
  return (
    <div className='iconContainer'>
        <img src={props.icon} alt="" />
        <p>{props.text}</p>
    </div>
  )
}

export default IconPoints