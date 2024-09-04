// function counter() {
//     let count = 0;

//     return {
//         increment: function () {
//             count += 1
//             return count
//         },
//         decrement: function () {
//             count -= 1
//             return count
//         },
//         getCount: function () {
//             return count
//         }
//     }
// }

// let myFun = counter()

// console.log(myFun.increment())
// console.log(myFun.increment())
// console.log(myFun.increment())
// console.log(myFun.decrement())
// console.log(myFun.getCount())
// console.log(myFun.count)


// (function(){console.log("hello")})()

//  

// function factorial(n) {

//     if (n == 0 || n == 1) {
//         return 1
//     }

//     return n * factorial(n - 1)

// }

// console.log(factorial(5))

const memo = {};

function fibonaci(n) {
    if (n == 0 || n == 1) {
        return n
    }

    if (memo[n]) {
        return memo[n]
    }

    // recursive case
    memo[n] = fibonaci(n - 1) + fibonaci(n - 2)
    return memo[n]
}


console.log(fibonaci(10))