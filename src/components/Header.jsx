import React from 'react'

const Header = (props) => {
  return (
    <div className='header'>
      <h1>Memory Card</h1>
      <div className="score-div">
        <h3 className="score">Score: {props.currentScore}</h3>
        <h3 className="score">High Score: {props.highScore}</h3>
      </div>
    </div>
  )
}

export default Header
