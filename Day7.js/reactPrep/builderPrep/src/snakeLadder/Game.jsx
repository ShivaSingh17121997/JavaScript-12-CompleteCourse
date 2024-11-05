// Game.js
import React, { useState } from 'react';
import Board from './Board';

const snakes = { 14: 7, 31: 10, 47: 26, 62: 18, 88: 24 };
const ladders = { 3: 22, 8: 30, 28: 84, 58: 77, 75: 86, 80: 99 };

const Game = () => {
    const [playerPosition, setPlayerPosition] = useState(1);
    const [dice, setDice] = useState(1);

    const rollDice = () => {
        const newDice = Math.floor(Math.random() * 6) + 1; // generate a number from 1 to 6
        let newPosition = playerPosition + newDice; // it will provide the new positon of the dice

        // Check for snake or ladder
        if (snakes[newPosition]) {
            newPosition = snakes[newPosition];
        } else if (ladders[newPosition]) {
            newPosition = ladders[newPosition];
        }

        // Stay within the board
        newPosition = newPosition > 100 ? playerPosition : newPosition;

        setDice(newDice);
        setPlayerPosition(newPosition);
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Snake and Ladder</h1>
            <Board playerPosition={playerPosition} />
            <p>Dice: {dice}</p>
            <button onClick={rollDice}>Roll Dice</button>
            <p>Player Position: {playerPosition}</p>
            {playerPosition === 100 && <p>Congratulations! You've won the game!</p>}
        </div>
    );
};

export default Game;
