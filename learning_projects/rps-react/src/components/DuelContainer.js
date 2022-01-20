import React from 'react'
import DefaultButton from './DefaultButton'
import HandCircle from './HandCircle'
import { Link } from 'react-router-dom'

const DuelContainer = ({ gesture, enemyChoice, playerMod, enemyMod }) => {


  return (
    <>
    <div className="duel-container">
      <HandCircle gesture={gesture} mod={playerMod} />
      <HandCircle gesture={enemyChoice} mod={enemyMod} />
    </div>
    </>
  )
}
export default DuelContainer
