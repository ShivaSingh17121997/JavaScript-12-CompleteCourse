// Some Logical Programs procedure programs , swapping Ex : grade , bill , interest , employ salary;



// let a = null
// console.log(typeof (null)) // 




// grades

// function Shadi() {
//     console.log("aaj mere yar ki shadi hai")
// }

// Shadi();

// function power() {
//     console.log("i am hanuman")
// }
// power();


// function knowloedge() {
//     console.log("i am saraswati")
// }
// knowloedge();




function Shadi(age) {
    if (age < 0) {
        console.log("enter valid age")
        return;
    }

    if (age >= 18 && age <= 35) {
        console.log("you can have marriage now congratulations")
    } else if (age < 18) {
        console.log("sorry, its your time to study")
    } else if (age > 35 && age < 50) {
        console.log("focus on your career , earn money")
    } else if (age > 50 && age < 70) {
        console.log("its time to rock and follow sprituality")
    } else {
        console.log("ram ram karo")
    }

}

// Shadi(-23); // argument


// average

function averageValue(a, b, c, d, e, f) {

    return (a + b + c + d + e + f) / 6

}

let ans = averageValue(21, 26, 31, 36, 41, 46);; // 16
// console.log(ans)



let a = 6

let b = 8
b = a

// a = b

// console.log(a)   //
// console.log(b)


// percentage

let totalMarks = 600;
let studentMarks = 512;

function calculatePercentage(tm, sm) {

    let percentage = (sm * 100) / tm

    return percentage
}


let res = calculatePercentage(totalMarks, studentMarks);

console.log("You have gotten ", res, "%")


//


// H W

// let num = 144;
// function sqrt() {

// }

// sqrt()


// even odd

let num = 0

function evenOdd(num) {

    if (num % 2 == 0) {
        console.log("even")
    } else {
        console.log("odd")
    }


}

evenOdd(num)
