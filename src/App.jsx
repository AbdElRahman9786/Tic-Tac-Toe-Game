import Player from "./components/Player"

function App() {
  

  return (
    <main>
      <div id="game-container">
        <ol id="players">
        <Player name="Player 1" sympol="X"/>
        <Player name="Player 2" sympol="O"/>
          
        </ol>
      </div>
    </main>
  )
}

export default App
