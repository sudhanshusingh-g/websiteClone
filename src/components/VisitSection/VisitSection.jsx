import React from 'react'
import './VisitSection.css'
import RadioIcon from './RadioIcon/RadioIcon'
import Button from './Button/Button'

function VisitSection() {
  return (
    <div className='background4'>
      <div className="section visitSection">
        <div className="content">
          <h1>Visit the centre for a personalised<br/><span className='primary'>experience</span></h1>
          <div className="points">
            <RadioIcon/>
            <p>Take a tour of the centre to experience our interactive classes</p>
          </div>
          <div className="points">
            <RadioIcon/>
            <p>Get Free 1-1 counselling & find the right course for you</p>
          </div>
          <div className="points">
            <RadioIcon/>
            <p>Visit us to avail exclusive discounts</p>
          </div>
        </div>
        <div className="form">
          <h3>Share your information for a call back</h3>
          <form>
            <input type="text" placeholder='Enter your name'/>
            <input type="text" placeholder='Enter mobile no.'className='mobileField'/>
            <input type="text" placeholder='Select your target'className='option'/>
            <input type="text" placeholder='Enter your pincode'/>
            <input type="text" placeholder='Select your city'className='option'/>
            <Button/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default VisitSection