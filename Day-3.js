// // variables   var hello()


// var a = 10;   // global scope

// var Name = "Radhe shyam "

// console.log(Name)


// var obj = { name: "ram", age: 21, city: "ayodhya" }
// console.log(obj)


// // types of varibales ES = 3 taypes = var , let , const

// // const
// const age = 21
// console.log("age", age)


// // let
// let userName = "Ram"

// userName = "Ram chandra"

// userName = "Raja Ram chandra "

// console.log(userName);


// let city
// city = "surat"
// console.log(city)


// // var

// var hobby = "guiter"

// hobby = "tabala"

// console.log(hobby)


// skills = "coding"
// var skills
// console.log(skills);

// // hoisting  var

// // hoisting is very important

// function hello() {
//     // block scope // local scope
// }

// hello() // function calling

// //


// // data types

// // primitive number, boolean (true, false) , string(" ") , symobie(!@#$%^&*()), null, undefined
// // non primitive values array = [], obj={},




// function add(...c) {
//     let arr = [...c]

//     return function next(...args) {
//         if (args.length === 0) {
//             return arr.reduce((acc, cv) => acc + cv, 0)
//         } else {
//             arr.push(...args)
//             console.log(arr)
//             return next
//         }
//     }
// }

// let ans = add(2, 3, 4, 5)(8)(7, 4, 6)(6)(7)()
// console.log(ans)





let obj = {
    a:3
}

obj.a = 8

console.log(obj.a)