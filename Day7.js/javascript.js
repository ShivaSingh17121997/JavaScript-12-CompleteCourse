// // function sum(...args) {
// //     // console.log(args)
// //     let sum = 0
// //     for (let i = 0; i < args.length; i++) {
// //         sum += args[i]
// //     }
// //     return sum
// // }

// // let a = sum(2, 3, 2, 3, 22, 3, 4, 33, 4, 3, 22, 3, 3, 4);
// // // console.log(a)

// //  function fun(){
// //     console.log("hello")
// // }

// // console.log(fun())


// // function fibonacci(n) {
// //     return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2)
// // }

// // for (let i = 0; i <= 10; i++) {
// //     console.log("the fibonacci no. of " + i + " is " + fibonacci(i))
// // }


// // function fibonacci() {
// //     let memo = [0, 1];

// //     function fib(n) {
// //         let result = memo[n];
// //         if (typeof (result) !== "number") {
// //             result = fib(n - 1) + fib(n - 2)
// //             memo[n] = result
// //         }
// //         return result
// //     }
// //     return fib

// // }


// // console.log(fibonacci()(10))

// // var fibonacci = memoizer([0, 1], function (shell, n) {
// //     return shell(n - 1) + shell(n - 2);
// // //    });

// // var m = ['aa', 'bb', 'a', 4, 4, 15, 16, 23, 42];


// //  let sorted = m.sort((a, b) => {
// //     if (a === b) return 0;

// //     if (typeof (a) === typeof (b)) return a < b ? -1 : 1

// //     return typeof (a) < typeof (b) ? -1 :  1
// // })

// // console.log(sorted)

// // const people = [
// //     { name: 'blice', age: 30 },
// //     { name: 'Alice', age: 30 },
// //     { name: 'Bob', age: 25 },
// //     { name: 'Charlie', age: 35 }
// // ];

// // let sorted = people.sort((a, b) => {
// //     if (a.age !== b.age){
// //         return a.age - b.age
// //     }  
// //     return a.name < b.name ? -1 : 1
// // })

// // console.log(sorted)

// let obj = {
//     a: 100,
//     b: 200,
//     title: "my nums"
// }


// function multiplyByTwo(obj) {
//     for (key in obj) {
//         if (typeof obj[key] === "number") {
//             obj[key] = obj[key] * 2
//         } 
//         obj[key] = obj[key]
//     }
     
// }

// let a = multiplyByTwo(obj);
// console.log(obj)

