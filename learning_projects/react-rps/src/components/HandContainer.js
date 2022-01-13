import React from 'react'
import HandCircle from './HandCircle'

const HandContainer = () => {
  return (
    <div class="hand-container">
    <div class="hand-container__background">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 305 277" >
        <path fill="none" stroke="#000" d="M291.5 7.5H4.574c3.119 0 52.416 84.667 147.892 254L291.5 7.5z" opacity=".2"/>
      </svg>
    </div>
  <HandCircle gesture='paper' />
  <HandCircle gesture='scissors' />
  <HandCircle gesture='rock' />
  
</div>
  )
}

export default HandContainer
