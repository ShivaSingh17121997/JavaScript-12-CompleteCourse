// 
// 

// let a = 3

//     console.log(typeof (a)) //


// let number = 16108;
// console.log(typeof (number))  // number

// let updateval = number.toString()
// console.log(typeof (updateval))  // string


// let str = "168"

// console.log(typeof (str)) // str

// let updatedStr = +str;   // unary operator
// console.log(typeof(updatedStr)) // numb




// gradingSystem()  // 



// function power() {

//     console.log("hello i am hanuman")

// }

// power()  // invoking


// function Knowledge() {

//     console.log("hello i am saraswati")

// }

// Knowledge()  // invoking





// 



// // parameter
// function gradingSystem(marks) {

//     if (marks > 90) {
//         console.log("congratulation you have gotten A grade")
//     } else if (marks > 80 && marks < 90) {
//         console.log("congratulation you have gotten B grade")
//     } else if (marks > 70 && marks < 80) {
//         console.log("congratulation you have gotten c grade")
//     } else if (marks > 60 && marks < 70) {
//         console.log("congratulation you have gotten c grade")
//     } else if (marks > 50 && marks < 60) {
//         console.log("congratulation you have gotten c grade")
//     } else {
//         console.log("congratulation you have gotten autoriksha")
//     }

// }

// gradingSystem(40)  // argument


function averageMarks(a, b, c, d, e, f) {

    return (a + b + c + d + e + f) / 6;



}

console.log(averageMarks(17, 18, 15, 14, 16, 17))


// percentage
// total marks
// total scored marks
// sub
let total = 600
let obtained = 450

function getPercent(total, obtained) {

    let percentage = (obtained * 100) / 600

    return percentage

}

console.log(getPercent(total, obtained))

