import React from 'react'

const HandCircle = ({gesture}) => {
  return (
    <div className={`hand-circle hand-circle--${gesture}`}>
      <div class={`hand-circle__border hand-circle__border--${gesture}`}></div>
    </div>
  )
}

export default HandCircle
