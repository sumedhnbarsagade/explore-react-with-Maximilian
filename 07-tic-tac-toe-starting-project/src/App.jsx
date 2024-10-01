import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="player">
          <Player name="Player 1" symbol="O"/>
          <li>
            <span className="players">
              <span className="player-name">Player 2</span>
              <span className="player-name">O</span>
            </span>
            <button>Edit</button>
          </li>
        </ol>
        GAME BOARD
      </div>
      log
    </main>
  );
}

export default App;
