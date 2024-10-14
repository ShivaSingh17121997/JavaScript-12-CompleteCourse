import React, { useState } from 'react'

function calculateWinner(square) {
    let lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
    ]

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]
        if (square[a] && square[a] === square[b] && square[a] == square[c]) {
            return square[a]
        };
    };

}

export default function TicTacToe2() {
    const [square, setSquares] = useState(Array(9).fill(null));
    const [isNext, setIsNext] = useState(true)
    console.log(square)

    const handleClick = (i) => {
        if (square[i]) {
            return
        }

        let newSquares = square.slice()
        newSquares[i] = isNext ? "X" : "O";
        setSquares(newSquares);
        setIsNext(!isNext)

    }

    const renderSquare = (i) => {
        return <button onClick={() => handleClick(i)} >{square[i]}</button>
    }


    let winner = calculateWinner(square)
    let Status;
    console.log(winner)
    if (winner) {
        Status = "winner" + winner;
    } else {
        Status = `Next Player ${isNext ? "X" : "O"}`;
    };

    return (
        <div>
            <div>{Status}</div>
            <div>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>

        </div>
    )
}
