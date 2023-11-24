import React from 'react'
import './Card.css'
import content from '../assets/content';
import CardContent from '../CardElement/CardContent'
function Card() {
  return (
    <div className='cardContainer'>
      {content.map((element,i)=>{
        return <CardContent image={element.image} heading={element.heading} para={element.para}/>
      })}
    </div>
  )
}

export default Card