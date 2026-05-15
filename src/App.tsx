import "./App.css";
import { HashRouter, Routes, Route } from "react-router";
import { useState } from "react";

import Home from "./Home.tsx";
import Setup from "./Setup.tsx";
import Play from "./Play.tsx";
import { getGeneralFacts, type GameResult } from "./GameResults.tsx";

const dummyGameResults: GameResult[] = [
  {
    winner: "Harry",
    players: ["Harry", "Hermione", "Ron"],
    strokes: {
      Harry: [4, 5, 3, 6],
      Hermione: [3, 4, 5, 12],
      Ron: [5, 6, 7, 12],
    },
    start: "2026-02-01T18:53:59.078Z",
    end: "2026-02-01T19:27:59.078Z",
  },
  {
    winner: "Hermione",
    players: ["Harry", "Hermione", "Ron"],
    strokes: {
      Harry: [5, 12, 4, 6],
      Hermione: [3, 4, 4, 5],
      Ron: [6, 5, 12, 7],
    },
    start: "2026-01-15T22:07:59.078Z",
    end: "2026-01-15T23:01:59.078Z",
  },
];

const App = () => {
  //
  // React hooks...
  //
  const [gameResults, setGameResults] = useState(dummyGameResults);

  //
  // Calculated state and other funcs...
  //
  const addNewGameResult = (gameResult: GameResult) =>
    setGameResults([...gameResults, gameResult]);

  //
  // Return JSX
  //
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={<Home generalFacts={getGeneralFacts(gameResults)} />}
          />
          <Route path="/setup" element={<Setup />} />
          <Route
            path="/play"
            element={<Play addNewGameResult={addNewGameResult} />}
          />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
