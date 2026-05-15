import "./App.css";
import { HashRouter, Routes, Route } from "react-router";

import Home from "./Home.tsx";
import Setup from "./Setup.tsx";
import Play from "./Play.tsx";
import type { GameResult } from "./GameResults.tsx";

const App = () => {
  const dummyGameResults: GameResult[] = [
    {
      winner: "Harry",
      players: ["Harry", "Hermione", "Ron"],
      start: "2026-02-01T18:53:59.078Z",
      end: "2026-02-01T19:27:59.078Z",
    },
    {
      winner: "Hermione",
      players: ["Harry", "Hermione", "Ron"],
      start: "2026-01-15T22:07:59.078Z",
      end: "2026-01-15T23:01:59.078Z",
    },
  ];

  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/setup" element={<Setup />} />
          <Route path="/play" element={<Play />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
