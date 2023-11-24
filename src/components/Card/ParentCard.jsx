import React from 'react'
import './ParentCard.css'
import list from '../assets/parentsNeed';
import IconPoints from '../CardElement/IconPoints';

function ParentCard(content) {
  return (
    <div className='pointContainer'>
        {list.map((element)=>{
            return <IconPoints icon={element.icon} text={element.text}/>
        })}
    </div>
  )
}

export default ParentCard