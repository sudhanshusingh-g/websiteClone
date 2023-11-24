import React from 'react'
import './OfferCard.css';
import offer from '../assets/offer';
import OfferCardContent from '../CardElement/OfferCardContent';
function OfferCard() {
  return (
    <>
    <div className='cardContainer'>
      {offer.map((element,i)=>{
        return <OfferCardContent image={element.image} heading={element.heading} para={element.para}/>
      })}
    </div>
    </>
  )
}

export default OfferCard