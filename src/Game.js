import React, { useState, useEffect } from "react";
import Board from "./Board";
import { calculateWinner } from "./util";

const infoContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%"
};

const instructionsStyle = {
  marginTop: "5px",
  marginBottom: "5px",
  fontWeight: "bold",
  fontSize: "16px"
};

const buttonStyle = {
  marginTop: "15px",
  marginBottom: "16px",
  width: "80px",
  height: "40px",
  backgroundColor: "#8acaca",
  color: "white",
  fontSize: "16px"
};

export default function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState();

  const handleClick = (i) => {
    const tempSquares = [...squares];
    if (winner || squares[i]) {
      return;
    }
    tempSquares[i] = xIsNext ? "X" : "O";
    setSquares([...tempSquares]);
    setXIsNext(!xIsNext);
  };

  const handleResetClick = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  useEffect(() => {
    setWinner(calculateWinner(squares));
  }, [squares]);

  return (
    <div className="game">
      <div className="game-board">
        <div style={infoContainer}>
          <div className="status" style={instructionsStyle}>
            Next player: {xIsNext ? "X" : "O"}
          </div>
          <div className="winner" style={instructionsStyle}>
            Winner: {winner}
          </div>
          <button style={buttonStyle} onClick={handleResetClick}>
            Reset
          </button>
        </div>
        <Board squares={squares} squareOnClick={handleClick} />
      </div>
    </div>
  );
}
