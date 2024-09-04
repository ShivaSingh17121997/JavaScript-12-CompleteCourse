// // function moveZeros(arr) {
// //     let lastNonZeroFoundAt = 0; // Pointer to track the position of the last non-zero element

// //     // Traverse the array
// //     for (let i = 0; i < arr.length; i++) {
// //         if (arr[i] !== 0) {
// //             // Swap only if the element is non-zero
// //             [arr[lastNonZeroFoundAt], arr[i]] = [arr[i], arr[lastNonZeroFoundAt]];
// //             lastNonZeroFoundAt++;
// //         }
// //     }

// //     return arr;
// // }

// // console.log(moveZeros([0, 1, 0, 0, 0, 3, 12])); // Output: [1, 3, 12, 0, 0]
// // // move all zeros to the right

// // let arr = [0, 1, 0, 0, 0, 3, 12];
// // let lastNonZeroFoundAt = 0;
// // for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] !== 0) {
// //         // swap only if the element is non-zero;
// //         [arr[lastNonZeroFoundAt], arr[i]] = [arr[i], arr[lastNonZeroFoundAt]]
// //         lastNonZeroFoundAt++;
// //     }
// // }
// // console.log(arr)

// // function multiply(a) {
// //     return function (b) {
// //         return a * b
// //     }
// // }
// // let a = multiply(3)(4);
// // console.log(a)


// // function sum(a) {
// //     return function (b) {
// //         return function (c) {
// //             return a + b + c
// //         }
// //     }
// // }
// // console.log(sum(2)(6)(1))


// function eveluate(eval) {
//     if (eval == "sum") {
//         return function (a) {
//             return function (b) {
//                 return a + b;
//             }
//         }
//     } else if (eval == "multiply") {
//         return function (a) {
//             return function (b) {
//                 return a * b;
//             }

//         }
//     } else if (eval == "divide") {
//         return function (a) {
//             return function (b) {
//                 return a / b;
//             }

//         }
//     } else if (eval == "substract") {
//         return function (a) {
//             return function (b) {
//                 return a - b;
//             }

//         }
//     }
// }


// console.log(eveluate("sum")(4)(2))
// console.log(eveluate("multiply")(4)(2))
// console.log(eveluate("divide")(4)(2))
// console.log(eveluate("substract")(4)(2))
