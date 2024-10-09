import React, { useState } from "react";
import "../App";

// Snake and Ladder positions
const snakesLadders = {
    16: 6, 47: 26, 49: 11, 56: 53, 62: 19, 64: 60, 87: 24, 93: 73, 95: 75, 98: 78,
    1: 38, 4: 14, 9: 31, 21: 42, 28: 84, 36: 44, 51: 67, 71: 91, 80: 100,
};

const Board = ({ currentPosition }) => {
    const squares = Array(100).fill(0).map((_, i) => i + 1).reverse();

    return (
        <div className="board">
            {squares.map((square) => (
                <div
                    key={square}
                    className={`square ${currentPosition === square ? "active" : ""}`}
                >
                    {square}
                </div>
            ))}
        </div>
    );
};

const SnakesLadders = () => {
    const [playerPosition, setPlayerPosition] = useState(1);
    const [dice, setDice] = useState(null);

    const rollDice = () => {
        const roll = Math.floor(Math.random() * 6) + 1;
        let newPosition = playerPosition + roll;

        // Check if player hits exact 100
        if (newPosition > 100) {
            newPosition = playerPosition;
        }

        // Check for snakes or ladders
        if (snakesLadders[newPosition]) {
            newPosition = snakesLadders[newPosition];
        }

        setPlayerPosition(newPosition);
        setDice(roll);
    };

    return (
        <div className="game">
            <h1>Snake and Ladder</h1>
            <Board currentPosition={playerPosition} />
            <button onClick={rollDice}>Roll Dice</button>
            {dice && <p>Dice Rolled: {dice}</p>}
            <p>Player Position: {playerPosition}</p>
            {playerPosition === 100 && <p>Congratulations! You won!</p>}
        </div>
    );
};

export default SnakesLadders;
