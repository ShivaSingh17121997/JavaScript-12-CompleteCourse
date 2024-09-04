// practice questions of call apply and bind;

// let obj = { name: "Piyush" }


// function sayHello(age, profession) {
//     return "Hello " + this.name + age + profession
// }


// const bindFun = sayHello.bind(obj);
// console.log(bindFun("ram", "developer"))



//2

// const age = 10;

// let person = {
//     name: "ram",
//     age: 21,
//     getAge: function () {
//         return this.age;
//     }
// }

// var person2 = { age: 24 }

//  let ans = person.getAge.call(person2)// output 24
//  console.log(ans)

// 3

// var status = "hero";

// setTimeout(() => {
//     const status = "loving";

//     const data = {
//         status: "obese",
//         getstatus() {
//             return this.status
//         }
//     }

//     console.log(data.getstatus()) 
//     console.log(data.getstatus.call(this)) 
// }, 0)


// let obj = {

//     hi: function () {
//         console.log(this)
//     }

// }
// obj.hi();

// 4.

// const animals = [
//     { species: "Lion", name: "king" },
//     { species: "Whale", name: "Queen" }

// ];

// function printAnimals(i) {
//     this.print = function () {
//         console.log("#" + i + " " + this.species + ": " + this.name)
//     }
//     this.print();
// }

// for (let j = 0; j < animals.length; j++) {
//     printAnimals.call(animals[j],j)

// }


//8
// call,bind and apply in javascript (explicit binding);
// que stion  append an array to another array;

// const array = ["a", "b"];
// const elements = [0, 1, 2]

//  array.push.apply(array, elements);

//  console.log(array)


// 9
// .using apply to enhance built in funvtion 
// find the min/max number in an array

// const numbers = [5, 6, 2, 3, 7];

// console.log(Math.max.apply(null,numbers))
// console.log(Math.min.apply(null,numbers))

// 10;
// bound function 

// function f() {
//     console.log(this) // ?
// }

// let user = {
//     g: f.bind(null),
// };

// user.g();

// bind chaining does not exist;

// 11.
//  Fix the line 139  to make the code work properly;

function checkPassword(success, failed) {
    let password = "pas";
    if (password === "pass") success();
    else failed();
}

let user = {
    name: "Piyush Agrawal",

    loginSuccessfull() {
        console.log(`${this.name} logged in`)
    },

    loginFailed() {
        console.log(`${this.name} failed to login`)
    }
}

checkPassword(user.loginSuccessfull.bind(user), user.loginFailed.bind(user));

// use bind and pass user is ans


// 13