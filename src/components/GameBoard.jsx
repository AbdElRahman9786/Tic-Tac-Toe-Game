import React, { useState } from "react";

const GameBoard = ({handelChangeSympole,turns}) => {



  return (
    <ol id="game-board">
      {turns.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((col, colIndex) => {
                return (
                  <li key={colIndex}>
                    <button disabled={col}  onClick={() => handelChangeSympole(rowIndex, colIndex)}>
                      {col}
                    </button>
                  </li>
                );
              })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
};

export default GameBoard;
