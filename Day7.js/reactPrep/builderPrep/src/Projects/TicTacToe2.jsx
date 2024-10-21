import React, { useState, useEffect } from 'react';

// Function to calculate the dynamic winning combinations based on the number of rows and columns
function calculateWinningCombinations(rows, cols) {
    let winningCombinations = [];

    // Rows
    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < cols; j++) {
            row.push(i * cols + j);
        }
        winningCombinations.push(row);
    }

    // Columns
    for (let i = 0; i < cols; i++) {
        let col = [];
        for (let j = 0; j < rows; j++) {
            col.push(i + j * cols);
        }
        winningCombinations.push(col);
    }

    // Diagonal 1 (top-left to bottom-right)
    let diag1 = [];
    for (let i = 0; i < Math.min(rows, cols); i++) {
        diag1.push(i * (cols + 1));
    }
    winningCombinations.push(diag1);

    // Diagonal 2 (top-right to bottom-left)
    let diag2 = [];
    for (let i = 1; i <= Math.min(rows, cols); i++) {
        diag2.push(i * (cols - 1));
    }
    winningCombinations.push(diag2);

    return winningCombinations;
}

// Calculate winner based on the dynamic winning combinations
function calculateWinner(btnRef, winningCombinations) {
    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (btnRef[a] && btnRef[a] === btnRef[b] && btnRef[a] === btnRef[c]) {
            return btnRef[a];
        }
    }
    return null;
}

export default function TicTacToe2({ rows = 4, cols = 4 }) {
    const [btnRef, setBtnRef] = useState(Array(rows * cols).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const [winningCombinations, setWinningCombinations] = useState([]);

    useEffect(() => {
        setWinningCombinations(calculateWinningCombinations(rows, cols));
    }, [rows, cols]);

    const handleClick = (i) => {
        if (btnRef[i] || calculateWinner(btnRef, winningCombinations)) {
            return;
        }

        let ValOnBtn = btnRef.slice();
        ValOnBtn[i] = xIsNext ? "X" : "O";
        setBtnRef(ValOnBtn);
        setXisNext(!xIsNext);
    };

    function renderSquare(i) {
        return <button onClick={() => handleClick(i)}>{btnRef[i]}</button>;
    }

    // Display status
    let winner = calculateWinner(btnRef, winningCombinations);
    let status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

    // Generate the grid based on rows and cols
    const renderGrid = () => {
        let grid = [];
        for (let row = 0; row < rows; row++) {
            let rowElements = [];
            for (let col = 0; col < cols; col++) {
                rowElements.push(renderSquare(row * cols + col));
            }
            grid.push(<div key={row} style={{ display: 'flex' }}>{rowElements}</div>);
        }
        return grid;
    };

    return (
        <div>
            <div><h3>{status}</h3></div>
            <div>{renderGrid()}</div>
        </div>
    );
}
