import React, { useState, useEffect } from 'react'
import DuelContainer from './DuelContainer'



const Step2 = ({ gesture, score, setScore }) => {

  const [reveal, setReveal] = useState (0);
  const [enemyChoice, setEnemyChoice] = useState ('');
  const [outcome, setOutcome] = useState ('');

  function rollEnemy() {
    const gestures = ['paper', 'scissors', 'rock'];
    let i = Math.floor(Math.random() * 3);
    return gestures[i];
  }
  function selectWinner() {
    if (gesture == enemyChoice)  {
      console.log('hioh');
 
      return('tie');
    } else if (gesture == 'rock' && enemyChoice == 'scissors' || gesture == 'paper' && enemyChoice == 'rock' || gesture == 'scissors' && enemyChoice == 'paper') {
      // setScore((score)=> score += 1)
      return('victory');
    } else if (gesture == 'paper' && enemyChoice == 'scissors' || gesture == 'scissors' && enemyChoice == 'rock' || gesture == 'rock' && enemyChoice == 'paper') {
      // setScore((score)=>score -= 1) 
      return('defeat');
    }
  }

  function unveilEnemy() {
    setTimeout(() => {    document.querySelector(".concealed").classList.remove("concealed"); 
    setReveal(1);
  }, 1000 )
  }

  useEffect(() => {
    setEnemyChoice(rollEnemy);
  },[])
  useEffect(()=>{ unveilEnemy()},[enemyChoice])

  useEffect(() => {
    setOutcome(selectWinner)
  },[reveal])

  useEffect(() => {
    if (outcome == 'victory') { setScore(()=>score + 1)}
    else if (outcome == 'defeat') { setScore(()=>score - 1)}
  },[outcome])

return (
    <>
      <h1>{outcome}</h1>
      <DuelContainer gesture={gesture} enemyChoice={enemyChoice} />
    </>
  )
}

export default Step2