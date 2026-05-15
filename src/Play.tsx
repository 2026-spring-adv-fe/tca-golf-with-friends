import { useNavigate } from "react-router";
import type { GameResult } from "./GameResults";
import { useState } from "react";

type PlayProps = {
  addNewGameResult: (g: GameResult) => void;
};

const Play: React.FC<PlayProps> = ({ addNewGameResult }) => {
  const nav = useNavigate();
  const [startTimeStamp] = useState(new Date().toISOString());

  return (
    <>
      <h1>Play</h1>
      <button
        className="btn btn-primary btn-outline"
        onClick={() => {
          addNewGameResult({
            winner: "Snape",
            players: ["Snape", "Dumbledore"],
            strokes: {
              Snape: [4, 5, 3],
              Dumbledore: [6, 7, 5],
            },
            start: startTimeStamp,
            end: new Date().toISOString(),
          });
          nav(-2);
        }}
      >
        Game Over
      </button>
    </>
  );
};

export default Play;
