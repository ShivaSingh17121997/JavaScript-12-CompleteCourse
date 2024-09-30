// if and else statement


// if(condtion){
//     console.log("this is the condition")
// } else {

// }


// let num = 1

// if (num % 2 == 0) {
//     console.log("this is even no")
// } else {
//     console.log("this is odd no")
// }



// grading system
// less than 50 fail
// marks 50 - 60 D grade
// marks 60 - 70 c grade
// marks 70 - 80 b grade
// marks 80 - 90 a grade
// marks 90 - 100 a+ grade

// if else if ladder statemnet
// let marks = -10;

// if (marks < 0 || marks > 100) {
//     console.log("enter valid marks, marks should be in betwene 0-100")
// } else if (marks > 90 && marks <= 100) {
//     console.log('congratulations you have got A+ grade')
// } else if (marks > 80 && marks <= 90) {
//     console.log("congratulations you have got A grade")
// } else if (marks > 70 && marks <= 80) {
//     console.log("congratulations you have got B grade")
// } else if (marks > 60 && marks <= 70) {
//     console.log("congratulations you have got c grade")
// } else if (marks >= 50 && marks <= 60) {
//     console.log("congratulations you have got D grade, you need to work hard")
// } else {
//     console.log("congratulations you are going to study in same class again, you are fail")
// }


// discount on purchase
// if purchase <1000 // 1 kg sugar
// if purchase >= 1000 // 10%discount
// if purchase >= 5000 // 12%discount + free waterbottle
// if purchase >= 10,000 // 15 %discount + free watch
// if purchase >= 20000  less than 20000// 18 %discount + prime membersip

let purchase = 1638


if (purchase > 800 && purchase < 1000) {
    console.log("congratulations you won 1 kg sugar!")
} else if (purchase >= 1000 && purchase < 5000) {
    console.log("congratulations you won 10% discount!")
} else if (purchase >= 5000 && purchase < 10000) {
    console.log("congratulations you won 12% discount pluse free water bottle !")
} else if (purchase >= 10000 && purchase < 20000) {
    console.log("congratulations you won 15% discount plus watch !")
} else {
    console.log("congratulations you won 18% discount plus prime membership !")
}







