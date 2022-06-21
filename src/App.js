import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'

const App = () => {
  const [currentScore, setCurrentScore] = useState(100)
  const [highScore, setHighScore] = useState(0)

  function incrementScore () {
    setCurrentScore(currentScore+1)
  }

  function resetCurrentScore () {
    setCurrentScore(0)
  }

  function insertNewHighScore () {
    setHighScore(currentScore)
  }

  useEffect(() => {
    if(currentScore > highScore){
      insertNewHighScore()
    }
  })

  return (
    <div>
      <Header currentScore={currentScore} highScore={highScore}/>
      <Main incrementScore={incrementScore} resetCurrentScore={resetCurrentScore}/>
    </div>
  )
}

export default App
