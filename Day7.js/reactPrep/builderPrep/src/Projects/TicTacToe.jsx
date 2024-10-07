import React, { useState } from 'react'


function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 3, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
        };
    };

};



export default function TicTacToe() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXisNest] = useState(true);


    const handleClick = (index) => {
        if (squares[index]) {
            return;
        }

        const newSquares = squares.slice();
        console.log("newSquare", newSquares[index]);
        newSquares[index] = xIsNext ? 'X' : '0';
        setSquares(newSquares);
        setXisNest(!xIsNext);
    };

    function renderSquare(index) {
        return (
            <button onClick={() => handleClick(index)} >{squares[index]}</button>
        );
    };

    // calculate winner
    const winner = calculateWinner(squares);
    console.log(squares);
    let Status;
    if (winner) {
        Status = "winner" + winner ;
    } else {
        Status = `Next Player ${xIsNext ? "X" : "O"}` ;
    };

    return (
        <div>
            <h1>Tic Tac Toe</h1>
            <div>
                <div className='status' >{Status}</div>
                <div className='board-row' >
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className='board-row' >
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className='board-row' >
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
            </div>
        </div>
    );
};