import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";

function App() {
  const [activePlyer, setActivePlayer] = useState("X");
  function handleSelectSquare() {
    setActivePlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
  }
  return (
    <main>
      <div id="game-container" >
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlyer === "X"} />
          <Player initialName="Player 2" symbol="O" isActive={activePlyer === "O"} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlyer} />
      </div>
      Log
    </main>
  );
}
export default App;
