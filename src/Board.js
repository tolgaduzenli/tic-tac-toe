import React from "react";
import Square from "./Square";
const containerStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column"
};
const boardStyle = {
  backgroundColor: "#eee",
  width: "208px",
  alignItems: "center",
  justifyContent: "center",
  display: "grid",
  gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
  border: "3px #eee solid"
};
export default function Board(props) {
  const { squares, squareOnClick } = props;
  return (
    <div style={containerStyle} className="gameBoard">
      <div style={boardStyle}>
        {squares.map((square, i) => (
          <Square
            key={i}
            value={square}
            onClickHandler={() => squareOnClick(i)}
          />
        ))}
      </div>
    </div>
  );
}
