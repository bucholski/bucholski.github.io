import React from 'react'
import DefaultButton from './DefaultButton'
import HandCircle from './HandCircle'
import { Link } from 'react-router-dom'

const DuelContainer = ({ gesture, enemyChoice }) => {

  console.log( enemyChoice + ' in duel')
  return (
    <>
    <div className="duel-container">
      <HandCircle gesture={gesture} />
      <HandCircle gesture={enemyChoice} />
    </div>
    <Link to="./..">  
      <DefaultButton text="Play again" extraClass={"again-btn"} />
    </Link>
    </>
  )
}
export default DuelContainer
