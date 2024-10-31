import React, { useState } from "react";
const board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
const GameBoard = ({handelChangeSympole,turns}) => {
let gameBoard=board;
for(const turn of turns){
    let {squer,player}=turn;
  let{row,col}=squer;

  gameBoard[row][col]=player;
   
}
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((col, colIndex) => {
                return (
                  <li key={colIndex}>
                    <button onClick={() => handelChangeSympole(rowIndex, colIndex)}>
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
