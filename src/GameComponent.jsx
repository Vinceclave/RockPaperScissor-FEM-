import React, { useEffect, useState } from 'react';
import HeaderComponent from './HeaderComponent';
import ButtonComponent from './ButtonComponent';
import GameResult from './GameResult';

import rockImage from './assets/icon-rock.svg';
import paperImage from './assets/icon-paper.svg';
import scissorImage from './assets/icon-scissors.svg';

const GameComponent = ({ choices }) => {
  const computerChoice = (choices) => {
    const computersChoiceIndex = Math.floor(Math.random() * choices.length);
    return choices[computersChoiceIndex];
  };

  const choicesImages = {
    rock: rockImage,
    paper: paperImage,
    scissors: scissorImage,
  };

  const [computersChosenOption, setComputersChosenOption] = useState('');
  const [playersChoice, setPlayersChoice] = useState('');
  const [gameResult, setGameResult] = useState('')
  const [score, setScore] = useState(() => {
    const storedScore = localStorage.getItem('score')
    return storedScore ? parseInt(storedScore) : 0
  })
  const [isGameOver, setIsGameOver] = useState(false)

  useEffect(() => {
    localStorage.setItem('score', score.toString())
  }, [score])

  const handlePlayerChoice = (choice) => {
      const computerChoiceResult = computerChoice(choices)
      setComputersChosenOption(computerChoiceResult)
      setPlayersChoice(choice)
      calculateResult(choice, computerChoiceResult)
      setIsGameOver(true);
  }

  const calculateResult = (playerChoice, computerChoice) => {
      // Game result logic...
      console.log('Player chose:', playerChoice)
      console.log('Computer chose:', computerChoice)

      switch (playerChoice) {
        case 'rock':
          switch(computerChoice) {
            case 'rock':
              setGameResult('It\'s a tie!')
              break
            case 'paper':
              setGameResult('You Lose!')
              break
            case 'scissors':
              setGameResult('You win!')
              setScore((prevScore) => prevScore + 1) // Update the score
              break
          }
          break
          case 'paper':
            switch(computerChoice) {
              case 'rock':
                setGameResult('You win!')
                setScore((prevScore) => prevScore + 1) // Update the score
                break
              case 'paper':
                setGameResult('It\'s a tie!')
                break
              case 'scissors':
                setGameResult('You Lose!')
                break
            }
            break
            case 'scissors':
              switch(computerChoice) {
                case 'rock':
                  setGameResult('You Lose!')
                  break
                case 'paper':
                  setGameResult('You win!')
                  setScore((prevScore) => prevScore + 1) // Update the score
                  break
                case 'scissors':
                  setGameResult('It\'s a tie!')
                  break
              }
              break
              default:
                setGameResult('Invalid choice!')
      }
  }

  const handlePlayAgain = () => {
    setComputersChosenOption('')
    setPlayersChoice('')
    setGameResult('')
    setIsGameOver('')
  }

  return (
    <>
      <HeaderComponent choices={choices} score={score} />
      {!isGameOver ? (
        <ButtonComponent choices={choices} choicesImages={choicesImages} handlePlayerChoice={handlePlayerChoice} />
      ) : (
        <GameResult
          playersChoice={playersChoice}
          choicesImages={choicesImages}
          computersChoice={computersChosenOption}
          gameResult={gameResult}
          handlePlayAgain={handlePlayAgain}
          />
      )}
    </>
  );
};

export default GameComponent;
