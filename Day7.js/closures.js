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

// function fibonaci(n) {
//     if (n == 0 || n == 1) {
//         return n
//     }

//     if (memo[n]) {
//         return memo[n]
//     }

//     // recursive case
//     memo[n] = fibonaci(n - 1) + fibonaci(n - 2)
//     return memo[n]
// }


// console.log(fibonaci(10))





// currying


// function sum(...args) {
//     let arr = [...args]
//     function add(b) {
//         return arr.reduce((acc, cv) => { return acc + cv }, 0) + b
//     }
//     return add;
// }

// console.log(sum(2, 3, 4, 5, 6)(3));



// 2 

// function sum(a) {

//     let arr = [a];
//     console.log(arr)

//     function add(b) {

//         if ( typeof b === "undefined") {
//             return arr.reduce((acc, cv) => { return acc + cv },0)
//         } else {
//             arr.push(b)
//             return add
//         }

//     }
//     return add
// }


// console.log(sum(3)(4)(5)(6)(7)(7)(9)(10)()); 



//3

function sum(...args) {
    // let arr = [...args]
    // console.log(arr)
    let total = args.reduce((acc, cv) => acc + cv, 0);

    function add(...args) {
        console.log(args)
        return total += args.reduce((acc, cv) => { return acc + cv }, 0)

    }
    return add
}


console.log(sum(1, 3, 4, 5)(3, 4, 5, 6, 6))