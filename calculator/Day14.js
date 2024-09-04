// closures and recursion
// clousers 

// function outerFunction() {
//     let outerVariable = "Hello i am outer variable"
//     function innerfunction() {
//         console.log(outerVariable)
//     }
//     return innerfunction();
// }

// outerFunction()

function Counter() {
    // parent function 
    let count = 1;
    return {
        increment: function () {
            count += 1;
            return count
        },
        decrement: function () {
            count -= 1;
            return count;
        },
        multiplyBy67: function () {
            count *= 67
            return count;
        }
    }
}

let parentFun = Counter();

// console.log(parentFun.increment());//1
// console.log(parentFun.increment());//2
// console.log(parentFun.decrement());//
// console.log(parentFun.multiplyBy67())// 67
// console.log(parentFun.multiplyBy67())//
// console.log(parentFun.multiplyBy67())


// recursion // a function calling itself 

// factoriaul;  factorial 4 // 5*4*3*2*1 = 120;


function factorial(n) {
    // base case
    if (n == 1 || n == 0) {
        return n
    }
    return n * factorial(n - 1);
}


let ans = factorial(7);// 5040, 5060 // 7 6  5 4 3 2 1 = 5040
console.log(ans)