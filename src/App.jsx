import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Logs from "./components/Logs";

function App() {
  const [turns,setTurnes]=useState([]);
  const [playerSympole,setPlayerSympole]=useState('X');
  function handelSelected(rowIndex,colIndex){
    setPlayerSympole((prev)=>prev==='X'?'O':'X');
   
    setTurnes((prev)=>{
      let currentPlayer='X';
      if(prev.length>0&&prev[0].player==='X'){
        currentPlayer='O';
      } 
      const updatedTuern=[{squer:{row:rowIndex,col:colIndex}
        ,player:currentPlayer}
        ,...prev
      ]
return updatedTuern;
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
        <Player initialname="Player 1" sympol="X" isActive={playerSympole==='X'}/>
        <Player initialname="Player 2" sympol="O" isActive={playerSympole==='O'}/>
          
        </ol>
        <GameBoard handelChangeSympole={handelSelected} turns={turns}/>
      </div>
      <Logs turns={turns}/>
    </main>
  )
}

export default App
