import React from 'react'
import HandCircle from './HandCircle'

const DuelContainer = ({ gesture, enemyChoice }) => {

  console.log( enemyChoice + ' in duel')
  return (
    <div className="duel-container">
      <HandCircle gesture={gesture} />
      <HandCircle gesture={enemyChoice} />
    </div>
  )
}
export default DuelContainer
