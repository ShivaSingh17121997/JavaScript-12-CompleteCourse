// // function with argument , parameters , switch case;


// // parameter
// // function userName(name) {
// //     console.log("Users nama is ", name)
// // }

// // userName("Krishna")// argument
// // userName("ram") //
// // userName("vishnu")

// // static
// // function add(a, b) {
// //     console.log(a * b)
// // }

// // add(2, 3);
// // add(4,32);
// // add();
// // add();
// // add();

// // switch case

// // instrunction  1-7 == 1 monday 2 tuesday 3 wed, --- 7 sunday 8-invalid no

// function DayPridictor(day) {
//     let weekDay;
//     switch (day) {
//         case 1:
//             weekDay = "Monday"
//             return weekDay

//         case 2:
//             weekDay = "Tuesday"
//             return weekDay;
//             ;
//         case 3:
//             weekDay = "Wednesday"
//             return weekDay
//         case 4:
//             weekDay = "Thursday"
//             return weekDay;
//         case 5:
//             weekDay = "Friday"
//             return weekDay;
//         case 6:
//             weekDay = "saturday"
//             return weekDay
//         case 7:
//             weekDay = "sunday"
//             return weekDay

//         default: return "Add no. between 1 to 7."
//     }

// }

// // console.log(DayPridictor(8));

// // function nency() {

// //     console.log("nency kya bol rhi")

// //     return

// //     console.log("nency kyu bol rhi ")

// // }

// // nency()



// // add ==> add , subs ==> subs, mul ==>mul, ...;

// function Calculator(op, a, b) {
//     let calculatedVal;

//     switch (op) {
//         case "add":
//             return calculatedVal = a + b;
//         case "subs":
//             return calculatedVal = a - b;
//         case "mul":
//             return calculatedVal = a * b
//         case "div":
//             return calculatedVal = a / b
//         case "square":
//             return calculatedVal = a ** b
//         default:
//             return "add the val"
//     }
// }

// let eval = Calculator("add", 3, 4);
// console.log(Calculator("subs", 3, 4));
// console.log(Calculator("mul", 3, 4));
// console.log(Calculator("div", 3, 4));
// console.log(Calculator("square", 3, 4));

// console.log(eval)


// normal function // currying



// function add(a, b) {
//     return a + b

// }
// let sum = add(1, 2)
// console.log(sum)


// create a fun which add the args
// anonymus -- benam
// function currying;
// hw how to take multiple argumnets in function currying
// function adding(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c
//         }
//     }
// }

// let ba = adding(1)(2)(4)(1)(2)(4)(1)(2)(4)(1)(2)(4)(1)(2)(4)(1)(2)(4)(1)(2)(4);

// console.log(ba);


// iife immediately invoked function expression

// (function () {
//     console.log("hello this is iife")
// })()

// let sum = (function () {
//     let a = 10
//     let b = 20

//     console.log(a + b)
// })();


// closures , currying // ** most imp;







// 0 1 2 3 4 5 6 7 8 9 10  // fibonacci // golden rule

// function fibo(n) {
//     //base case
//     if (n == 0 || n == 1) {
//         return n
//     }

//     return fibo(n - 1) + fibo(n - 2)

// }
// console.log(fibo(7))

// Array With Functions Push ,Pop, shift, upshifts, Splice string function

// array  
//array literals  [];

// null o false null "" []
// let arr = ["apple", "banana", "chiku", "mango", "dragon fruit", ""]; // array has been created propertis 
//            0         1         2        3         4          5
// length: 
// console.log("length of the array is ", arr.length)
// index 

// 
// console.log(arr[0])



let numbers = [1, 2, 3, 4, 5, 6]

let newArr = numbers.slice(1)
console.log("slice", newArr)

let fruits = ["apple", "banana", "chiku", "mango"]

fruits.splice(2,2)

console.log(fruits)




// splice

// numbers.splice(2,3)
// console.log(numbers)


// add a element
// slice

// numbers.push(false)
// numbers.push({ name: "ram ram" })
// numbers.push("ram")

// numbers.pop()
// numbers.pop()
// numbers.pop()

// numbers.unshift(3)
// numbers.shift()
//  console.log("mantra ka ans", numbers[2])
// console.log(numbers)


// splice





