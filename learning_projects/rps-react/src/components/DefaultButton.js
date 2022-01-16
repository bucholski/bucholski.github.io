  import React from 'react'
  
  const DefaultButton = ({text, extraClass}) => {
    return (
      <button className={`default-btn ${extraClass}`}>{text}</button>
    )
  }
  
  export default DefaultButton
  