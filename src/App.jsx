import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Logs from "./components/Logs";
import { WINNING_COMBINATIONS } from "./components/winning-combinations";
import GameOver from "./components/GameOver";
const board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
let players={
  O:'player1',
    X:'player2'
}
function helper(gameTuerns){
  let currentPlayer='X';
  if(gameTuerns.length>0&&gameTuerns[0].player==='X'){
    currentPlayer='O';
  } 
  return currentPlayer;

}
function driverWinner(gameBoard,playerName){
  let winning=null;
for(let compination of WINNING_COMBINATIONS){
  let firstSquer=gameBoard[compination[0].row][compination[0].column];
  let secondSquer=gameBoard[compination[1].row][compination[1].column];
  let thiredSquer=gameBoard[compination[2].row][compination[2].column];
  if(firstSquer&&firstSquer===secondSquer&&firstSquer===thiredSquer){
    winning=playerName[firstSquer];
  }
  
}
return winning;
}
function drivedGameBoard(board,turns){
  let gameBoard=[...board.map((iner)=>[...iner])];
  for(const turn of turns){
      let {squer,player}=turn;
    let{row,col}=squer;
  
    gameBoard[row][col]=player;
     
  }
  return gameBoard;
}
function App() {
  const [playerName,setPlayerName]=useState(players)
  const [turns,setTurnes]=useState([]);

const gameBoard=drivedGameBoard(board,turns)
const winner=driverWinner(gameBoard,playerName);
let draw=turns.length===9&&!winning;
  let activePlayer=helper(turns);
  function handelSelected(rowIndex,colIndex){
    setTurnes((prev)=>{
      let currentPlayer=helper(prev)
      const updatedTuern=[{squer:{row:rowIndex,col:colIndex}
        ,player:currentPlayer}
        ,...prev
      ]
return updatedTuern;
    })
  }
function handelTryMatch(){
  setTurnes([]);
}
function handelChangeName(sympole,name){
setPlayerName((prev)=>{
  return{
    ...prev,
    [sympole]:name
  }
})
}
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
        <Player initialname={players.O} sympol="O" isActive={activePlayer==='X'} editeName={handelChangeName}/>
        <Player initialname={players.X} sympol="X" isActive={activePlayer==='O'} editeName={handelChangeName}/>
          
        </ol>
        {(winner||draw)&&<GameOver winning={winner} tryMatch={handelTryMatch}/>}
        <GameBoard handelChangeSympole={handelSelected} turns={gameBoard}/>
      </div>
      <Logs turns={turns}/>
    </main>
  )
}

export default App
