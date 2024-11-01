import React from 'react'

const GameOver = ({winning,tryMatch}) => {
  return (
    <div id="game-over">
        
        <h2>GameOver</h2>
        {winning&&<p> {winning} Won!</p>}
        <button onClick={tryMatch}>tryAgain</button>
        
        
        </div>
  )
}

export default GameOver