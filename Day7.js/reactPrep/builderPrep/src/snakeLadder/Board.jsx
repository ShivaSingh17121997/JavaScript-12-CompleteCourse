// Board.js
import React from 'react';

const Board = ({ playerPosition }) => {
    const renderCells = () => {
        const cells = [];
        for (let i = 100; i > 0; i--) {
            cells.push(
                <div
                    key={i}
                    style={{
                        width: '10%',
                        padding: '10px',
                        boxSizing: 'border-box',
                        border: '1px solid #000',
                        backgroundColor: i === playerPosition ? 'orange' : 'white',
                    }}
                >
                    {i}
                </div>
            );
        }
        return cells;
    };

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', width: '50%' }}>
            {renderCells()};
        </div>
    );
};

export default Board;
