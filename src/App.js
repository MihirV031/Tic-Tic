/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import React, { useState,useEffect } from 'react';

function App() {

    let [temp, setTemp] = useState(0);
    let [board, setBoard] = useState(Array(9).fill(''));

    const Button = (index) => {
      if (board[index] === '') {
        const updatedBoard = [...board];
        updatedBoard[index] = temp % 2 === 0 ? 'x' : '0';
        setBoard(updatedBoard);
        setTemp(temp + 1);
        checkWin();
      }
    };

    const checkWin = () => {
      const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];

      for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (
          board[a] &&
          board[a] === board[b] &&
          board[a] === board[c]
        ) {
          // Player has won
          const winner = board[a];
          alert(`Player win = ${winner}`);
          disableButtons();
          return;
        }
      }

      if (board.every((cell) => cell !== '')) {
        // Match is a draw
        alert('Match is a Draw');
      }
    };
    
    useEffect(()=>{
      checkWin();
    },[board]);

    const disableButtons = () => {
      const buttons = document.getElementsByClassName('Mihir');
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
      }
    };
    return (
      <>
        <div className="tic">
        <div>
          <button id="B1" className="Mihir box" onClick={() => Button(0)} disabled={board[0] !== ''}>
            {board[0]}
          </button>
          <button id="B2" className="Mihir box" onClick={() => Button(1)} disabled={board[1] !== ''}>
            {board[1]}
          </button>
          <button id="B3" className="Mihir box" onClick={() => Button(2)} disabled={board[2] !== ''}>
            {board[2]}
          </button>
        </div>
        <div>
          <button id="B4" className="Mihir box" onClick={() => Button(3)} disabled={board[3] !== ''}>
            {board[3]}
          </button>
          <button id="B5" className="Mihir box" onClick={() => Button(4)} disabled={board[4] !== ''}>
            {board[4]}
          </button>
          <button id="B6" className="Mihir box" onClick={() => Button(5)} disabled={board[5] !== ''}>
            {board[5]}
          </button>
        </div>
        <div>
          <button id="B7" className="Mihir box" onClick={() => Button(6)} disabled={board[6] !== ''}>
            {board[6]}
          </button>
          <button id="B8" className="Mihir box" onClick={() => Button(7)} disabled={board[7] !== ''}>
          </button>
          <button id="B9" className="Mihir box" onClick={() => Button(8)} disabled={board[8] !== ''}>
          </button>
        </div>
        </div>
      </>
    );
  }
  
  export default App;
