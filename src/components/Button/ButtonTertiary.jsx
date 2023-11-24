import React from 'react'
import './ButtonTertiary.css'
function ButtonTertiary(props) {
    const {children} = props;
    return (
      <>
        <button className="tertiaryBtn">{children}</button>
      </>
    );
}

export default ButtonTertiary