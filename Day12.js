// while loop;

// "initial condition "
// while ("condition") {
//     // logic
//     // increment/ decrement
// }



// let i = 1;

// while (i <= 20) {
//     console.log(i) // logic
//     i++;
// };

// odd numbers
// let i1 = 1
// while (i1 <= 20) {
//     if (i1 % 2 == 1) {
//         console.log("this is an odd no.", i1)
//     } else {
//         console.log("this is an even no.", i1)
//     }
//     i1++;
// }






// for (let i = 0; i <= 5; i++) {
//     console.log(i)
// }


// do while loop


// let age = 16;
// do {
//     console.log("hi");
//     age++
// } while (age < 20);



// while loop and do while loop

// const age1 = 43;

// while (age1 < 21) {
//     console.log("my age is ", age1);
// }


// game guessing the number

// let playagain;
// do {
//     let guess;
//     let randomNo = Math.floor(Math.random() * 3);

//     do {
//         guess = prompt("Enter a nom from 0-3")

//     } while (randomNo !== guess);
//     alert("congratulations you won the game")

//     let playagain = prompt("Enter you ans yes or no")


// } while (playagain == "yes");

// alert("game has ended")




let playagain; //global level
do {
    let guess;
    let randomNo = Math.floor(Math.random() * 3) + 1

    do {
        guess = prompt("Enter your number from 1-3")

    } while (randomNo !== guess);

    alert("congratulations you won the game")

    playagain = prompt("Do you want to play again ? yes or no").toLocaleLowerCase();

} while (playagain === "yes");

alert("your game has been ended")