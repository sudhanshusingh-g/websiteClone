import React from 'react'
import './ResultSection.css'
import resultBanner from '../assets/resultBanner.png';
function ResultSection() {
  return (
    <div className='section'>
      <h1>Our outstanding <span className='primary'>results</span></h1>
      <img src={resultBanner} alt=""/>
    </div>
  )
}

export default ResultSection