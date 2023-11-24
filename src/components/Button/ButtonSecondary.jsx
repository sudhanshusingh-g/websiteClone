import React from 'react'
import './ButtonSecondary.css';
function ButtonSecondary(props) {
    const {children}=props;
  return (
    <div className='secondaryBtn'>{children}</div>
  )
}

export default ButtonSecondary