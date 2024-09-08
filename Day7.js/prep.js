

// inheritence

// let person = {
//     Name: "ram",
//     age: 21,
// };

// let employees = {
//     department: "tech",
//     get_Details: function () {
//         return `${this.Name}, ${this.age}, ${this.department}   `;
//     },
// };

// Object.setPrototypeOf(employees, person)

// console.log(employees.get_Details())

// writing the above code class in js
class Person {
    constructor(Name, age) {
        this.Name = Name
        this.age = age
    }
}

class employees extends Person {
    constructor(department, Name, age) {
        super(Name, age)
        this.department = department
    }

    get_Details = function () {
        console.log(`${this.Name}, ${this.age}, ${this.department}`)
    }
}

new employees("tech", "ram", 21).get_Details()







// closures

// function sum(a) {

//     return function (b) {

//     }
// }

// let ans = sum(1)(2)(3)(4)(5);
// console.log(ans)


// settimeout

// for (let i = 1; i <= 10; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 5000 * i)
// }


// apply  polyfill

// function applyFunction(name) {
//     return name
// }

// let obj = {
//     perosn: "ram"
// }


// applyFunction().apply

// setTimeput



// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("promise resolved")
//     }, 3000)

// })

// promise.then(resolve => console.log(resolve))



// (function () {
//     console.log("hello bro what is up")
// })()





//////////////////////////////////////////////////////////


// function adding(a) {
//     const args = [a]; // Initialize an array with the first argument

//     function add(b) {
//         if (b === undefined) {
//             // If no argument is provided, return the sum of all collected arguments
//             return args.reduce((acc, num) => acc + num, 0);
//         }
//         args.push(b); // Add the new argument to the array
//         return add; // Return the function itself to allow chaining
//     }

//     return add; // Start the chain
// }

// Example usage:
// const result = adding(1)(2)(4)(1)(2)(4)(1)(2)(4)(1)(2)(4)(); // Add more numbers as needed
// console.log(result); // Should print the sum of 1 + 2 + 4 = 7

// function sum(a) {
//     const args = [a];// initilize an array with firs argument

//     function add(b) {
//         if (b === undefined) {
//             return args.reduce((acc, num) => acc + num, 0);
//         }
//         args.push(b); // add the new argument to the array;
//         return add; // return the function itself to allow chaining
//     }

//     return add;// start the chain

// }

// let ans = sum(2)(3)(4)();
// console.log(ans);



// function sum(...initialargs) {
//     let args = [...initialargs];

//     function add(...newArgs) {
//         if (newArgs.length === 0) {
//             return args.reduce((acc, cv) => acc + cv, 0)
//         }
//         args.push(...newArgs)
//         return add;
//     }
//     return add;
// }


// let b = sum(4)(3, 3, 4)(6)(6)();
// console.log(b);