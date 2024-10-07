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

// let purchase = 1638


// if (purchase > 800 && purchase < 1000) {
//     console.log("congratulations you won 1 kg sugar!")
// } else if (purchase >= 1000 && purchase < 5000) {
//     console.log("congratulations you won 10% discount!")
// } else if (purchase >= 5000 && purchase < 10000) {
//     console.log("congratulations you won 12% discount pluse free water bottle !")
// } else if (purchase >= 10000 && purchase < 20000) {
//     console.log("congratulations you won 15% discount plus watch !")
// } else {
//     console.log("congratulations you won 18% discount plus prime membership !")
// };






// min max

// let a = 10, b = 20

// console.log(a > b); //
// console.log(a < b); //

// nested if else condition

//login

// let user = 'cuteboyYash1001';
// let password = 1234

// let inputval = "cuteboyYash1001uj"
// let inputpass = 1234

// if (user !== inputval) {
//     if (password != inputpass) {
//         console.log("your password is incooreect");
//     } else {
//         console.log("user id incorrect");
//     };

// } else {
//     console.log("login successfull");
// };


// Switch case statement // almost similer to if else condition

// let fruit = "strawberry"


// switch (fruit) {
//     case "banana": {
//         console.log("this is banana it nice");
//         break;
//     }
//     case "apple": {
//         console.log("this is apple and its costly")
//         break;
//     }
//     case "grapes": {
//         console.log("this is grapes and its tasty")
//         break;
//     }
//     case "mango": {
//         console.log("this is mango and its komal likes it")
//         break;
//     }
//     case "strawberry": {
//         console.log("this is strawberry and its sour and i hate it!");
//         break;
//     }
// }



// loop

// data types 2 types Primitive data type, non primitive data type

// primitive data types / ccnot be changed / number, symbols, characteres, boolean, null, undefined, string, bigInt
// arrays and objects non - primitive data types


// let arr = [1, 2, 3, 4, true, false, ["mango", "banana"], null, undefined];
//         0, 1, 2, 3, 4   .,

// let obj = {
//     name: "babalu",
//     age: 21,
//     city: "surat"
// }


// let nums = [1, 2, 3, 4, 5]

// // loop

// // initial conditon
// let i = 0
// while (i < 5) {
//     console.log(nums[i]);
//     i++;
// }


// let i = 1;
// while (i <= 10) {
//     console.log(i)
//     i++
// }


// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }

// let arr = ["apple", "bamama", "mango", "grapes", "pineapple"]

// console.log(arr.length)

// for(let i=0; i<5; i++){
//     console.log(arr[i])
// }

// let j=0;
// while(j<arr.length){
//     console.log(arr[j])
//     j++
// }
// let a = 20
// a = 30
// console.log(a)

// let arr1 = [298098, 39876, 498, 5, 68765, 54];

// let max = arr1[0];//298098

// for (let i = 0; i < arr1.length; i++) {
//     // 39876      > 298098
//     if (arr1[i] > max) {
//         max = arr1[i]
//     }
// }

// console.log(max)

//minimum num



// do...while loop runs at least 1 times; use 

let i = 6;

do {
    console.log("hello")
    i++
    console.log(i)
} while (i < 5);
