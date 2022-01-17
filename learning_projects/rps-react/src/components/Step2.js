import React, { useState, useEffect } from 'react'
import DuelContainer from './DuelContainer'



const Step2 = ({ gesture, score, setScore }) => {

  const [enemyChoice, setEnemyChoice] = useState ('');
  const [outcome, setOutcome] = useState ('');

  function rollEnemy() {
    const gestures = ['paper', 'scissors', 'rock'];
    let i = Math.floor(Math.random() * 3);
    return gestures[i];
  }
    let result = "";

  function selectWinner() {
    let choice = Object.values(gesture)
    if (choice == enemyChoice)  { 
      return('Tie');
    } else if (choice == 'rock' && enemyChoice == 'scissors' || choice == 'paper' && enemyChoice == 'rock' || choice == 'scissors' && enemyChoice == 'paper') {
      setScore((score)=> score += 1)
      return('Victory');
    } else if (choice == 'paper' && enemyChoice == 'scissors' || choice == 'scissors' && enemyChoice == 'rock' || choice == 'rock' && enemyChoice == 'paper') {
      setScore((score)=>score -= 1) 
      return('Defeat');
    }
  }
  useEffect(() => {
    console.log('Roll enemy now:')
    setEnemyChoice(rollEnemy);
  },[])

  useEffect(() => {
    console.log('Select winner now:')
    setOutcome(selectWinner);
  },[enemyChoice])

  return (
    <>
      <h1>{outcome}</h1>
      <DuelContainer gesture={gesture} enemyChoice={enemyChoice} />
    </>
  )
}

export default Step2