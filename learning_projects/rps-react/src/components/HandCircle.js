import React from 'react'
import { Link } from 'react-router-dom'
const HandCircle = ({ gesture, setChoice, link }) => {

  // gesture = Object.values(gesture);

  if (typeof gesture === 'object' ) { 
    gesture = `${Object.values(gesture)}`;
  }

  return (
    <Link to={link}>
      <button onClick={()=> setChoice(()=>gesture)} className={`hand-circle hand-circle--${gesture}`}>
        <div className={`hand-circle__border hand-circle__border--${gesture}`}></div>
      </button>
    </Link>
  )
}

HandCircle.defaultProps={
  link: "",
  setChoice: ()=>0
}

export default HandCircle
