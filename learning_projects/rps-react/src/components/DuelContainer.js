import React from 'react'
import HandCircle from './HandCircle'

const DuelContainer = ({ gesture, enemyChoice }) => {
  return (
    <div className="duel-container">
      <HandCircle gesture={gesture} />
      <HandCircle gesture={enemyChoice} />
    </div>
  )
}
export default DuelContainer
