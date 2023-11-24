import React from 'react'
import './CardContent.css'
function CardContent(content) {
  return (
    <div className='cardContent'>
        <img src={content.image} alt="" />
        <div className="cardText">
            <h2>{content.heading}</h2>
            <p>{content.para}</p>
        </div>
    </div>
  )
}

export default CardContent