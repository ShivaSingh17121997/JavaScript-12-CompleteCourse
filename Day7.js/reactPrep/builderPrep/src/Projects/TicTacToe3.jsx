import React, { useState } from 'react'

// button 9
// by default x and 0
//  button s should be recorded

function calculateWinner(btnref) {

    let winningCombination = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let i = 0; i < winningCombination.length; i++) {
        const [a, b, c] = winningCombination[i]; 0, 1, 2
        if (btnref[a] && btnref[a] === btnref[b] && btnref[a] === btnref[c]) { // it will compaire a / x at first postion
            return btnref[a] // it will return X or O 
        }
    }
}


export default function TicTacToe3() {
    const [btnRef, setBtnRef] = useState(Array(9).fill(null))
    const [xIsNext, setXisNext] = useState(true);


    const handleClick = (i) => {
        if (btnRef[i]) {
            return;
        }

        console.log(i);
        let ValOnBtn = btnRef.slice(); // cerea copy of an arrayy;
        console.log(ValOnBtn);
        ValOnBtn[i] = xIsNext ? "X" : "O"; //create array particular index pe ye valu updaate hogi
        setBtnRef(ValOnBtn);
        setXisNext(!xIsNext);
    }


    function showValinSquare(i) {
        return <button onClick={() => handleClick(i)} > {btnRef[i]}  </button>
    }


    // getting the value  from calculate winner; and invoking the calculate winner function;
    let winner = calculateWinner(btnRef);

    let status;

    if (winner) {
        status = "winner" + winner;
    } else {
        status = `next player ${xIsNext ? "X" : "O"} `
    }

    return (
        <div>
            <div>
                <h3>{status}</h3>
            </div>

            <div>
                {showValinSquare(0)}
                {showValinSquare(1)}
                {showValinSquare(2)}

            </div>

            <div>
                {showValinSquare(3)}
                {showValinSquare(4)}
                {showValinSquare(5)}
            </div>

            <div>
                {showValinSquare(6)}
                {showValinSquare(7)}
                {showValinSquare(8)}
            </div>


        </div>
    )
}
