import React from "react";
import { useEffect, useState } from "react";
import Model from "./Model";
import Square from "./Square";

const INITIAL_STATE = ["", "", "", "", "", "", "", "", ""];

const WINNING_COMBO = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function Game() {
  const [gameState, setGameState] = useState(INITIAL_STATE);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [roundWon, setRoundWon] = useState(false);
  const [playerWon, setPlayerWon] = useState("");
  const [showModel, setShowModel] = useState(false);

  useEffect(() => {
    checkWinner();
  }, [gameState]);

  const checkWinner = () => {
    for (var i = 0; i < WINNING_COMBO.length; i++) {
      const winCombo = WINNING_COMBO[i];
      let a = gameState[winCombo[0]];
      let b = gameState[winCombo[1]];
      let c = gameState[winCombo[2]];
      if ([a, b, c].includes("")) {
        continue;
      }

      if (a === b && b === c) {
        if ([a, b, c].includes("X")) setPlayerWon("X");
        else setPlayerWon("O");
        setRoundWon(true);
        setTimeout(() => handleWin(), 100);
        break;
      }
    }

    if (!gameState.includes("")) {
      setTimeout(() => handleDraw(), 100);
      return;
    }

    if (!roundWon) changePlayer();
  };

  const handleWin = () => {
    setShowModel(true);
  };

  const handleDraw = () => {
    setPlayerWon("The game is draw");
    setShowModel(true);
  };

  const changePlayer = () => {
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const handleClick = (event: any) => {
    if (!roundWon) {
      const cellIndex = Number(event.target.getAttribute("data-cell-index"));
      const currentValue = gameState[cellIndex];
      if (currentValue) {
        return;
      }

      const newState = [...gameState];
      newState[cellIndex] = currentPlayer;
      setGameState(newState);
    } else handleWin();
  };

  const handleClose = () => {
    setShowModel(false);
    setCurrentPlayer(playerWon);
    setPlayerWon("");
    setRoundWon(false);
    setGameState(INITIAL_STATE);
  };

  return (
    <div className="w-full flex justify-center items-center h-full text-slate-800">
      <div>
        <h1 className="text-3xl mb-2">WelCome to Tic Tac Toe Game</h1>

        <div className="grid grid-cols-3 gap-3 mx-auto w-96">
          {gameState?.map((player, index) => (
            <Square
              key={index}
              index={index}
              onClick={handleClick}
              {...{ player }}
            />
          ))}
        </div>
        <Model
          isVisible={showModel}
          message={
            playerWon === "X" || playerWon === "O"
              ? `The player ${playerWon} is the winner of this game`
              : playerWon
          }
          onClick={handleClose}
        />
      </div>
    </div>
  );
}

export default React.memo(Game);
