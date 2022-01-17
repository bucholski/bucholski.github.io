import React from 'react'
import DuelContainer from './DuelContainer'

const Step2 = ({ gesture, score, setScore, enemyChoice }) => {





  // setEnemy('paper');
  console.log(enemyChoice);


  function selectWinner() {
    let choice = Object.values(gesture)
    if (choice == enemyChoice)  { 
      console.log('Tie');
    } else if (choice == 'rock' && enemyChoice == 'scissors' || choice == 'paper' && enemyChoice == 'rock' || choice == 'scissors' && enemyChoice == 'paper') {
      console.log('Victory!');
    } else if (choice == 'paper' && enemyChoice == 'scissors' || choice == 'scissors' && enemyChoice == 'rock' || choice == 'rock' && enemyChoice == 'paper') {
      console.log('Defeat!');
    }
    
  }
  selectWinner();
  console.log(enemyChoice);

  return (
    <>
      <DuelContainer gesture={gesture} enemyChoice={enemyChoice} score={score} />
      {console.log(enemyChoice + ' in return')}
    </>
  )
}

export default Step2