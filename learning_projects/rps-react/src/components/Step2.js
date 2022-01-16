import React from 'react'
import DuelContainer from './DuelContainer'

const Step2 = ({ gesture, score, setScore, enemyChoice }) => {
  return (
    <div>
      <DuelContainer gesture={gesture} enemyChoice={enemyChoice} score={score} />
    </div>
  )
}

export default Step2