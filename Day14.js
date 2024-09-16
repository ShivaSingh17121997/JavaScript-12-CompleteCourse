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



// let numbers = [1, 2, 3, 4, 5, 6]

// let newArr = numbers.slice(1)
// console.log("slice", newArr)

// let fruits = ["apple", "banana", "chiku", "mango"]

// fruits.splice(2, 2)

// console.log(fruits)




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

// (map ,filter, foreach, indexof, findindex ,includes, every, some)


// interviews === map , filter, foreach

// map function in array;

// let arr = [1, 2, 3, 4, 5] // iterate (loop)
// let newArre = [2,4,6,8,10] // return new Arr
// nrwarr = [2,4,6,8,10]
// map(()=>{}) HOF heigher order function : when a function takes another function as an argument is called higher order function

// let newArr = arr.map((item) => { return item * 2 })
// console.log("new Arr by map", newArr)
// console.log("originalArr", arr)


// call back

// forEach
// let forEachArr = [3, 5, 7, 9];

// forEachArr.forEach((item) => {
//     console.log(item * 4)
//     return item * 4
// })
// console.log("originalArr", forEachArr)

// let forEachArr = [3, 5, 7, 9];

// let transformedArr = forEachArr.map((item) => {
//     return item * 4;
// });

// console.log("transformedArr", transformedArr);
// console.log("originalArr", forEachArr);



//

// let filArr = [3, 5, 7, 9, 2, 3, 1];

// let newArrr = [5, 7, 9]             //3
// let filteredArr = filArr.filter((item) => item == 5)
// console.log("new arrr", filteredArr) // 5,7,9
// console.log("orginal arr", filArr)





// map function  HOF

// let arr = [1, 2, 3, 4, 5];


// let newArr = arr.map((item, i, arr) => { return item * 3 })

// console.log(newArr)  // newArr


// filter
// let arr = [1, 2, 3, 4, 5];


// let filteredArr = arr.filter((item, i, arr) => { return item > 3 })

// console.log(filteredArr)


// let arr = [1, 2, 3, 4, 5];

// arr.forEach((item) => {
//     console.log(item)
// })



// indexof, findindex ,includes, every, some


// let val = arr.
















/// looping in an array

// let arr = [2, 3, 4, 56, 76, 8, 108];
// console.log(arr.length)

// let max = arr[0];//2

// for (let i = 0; i < arr.length; i++) {
//     // 2   <  3
//     if (max < arr[i]) {
//         max = arr[i]
//     }
// }
// console.log(max)
// minimum


// reverse the arr = [1,2,3] // [3,2,1]

// let ar = [1, 2, 3];  // len 3 , index = 2

// let revereseArr = [];

// for (let i = ar.length - 1; i >= 0; i--) {
//     revereseArr.push(ar[i])
// }

// console.log(revereseArr);

// find the palindrom of a string   // "pop" , bob , level


// check palidrom

// let palindrom = "level"

// function Palindrom(str) {

//     let reverseStr = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reverseStr = reverseStr + str[i]
//     }

//     // console.log(reverseStr)

//     if (str === reverseStr) {
//         console.log(str, "is palindrom ")
//     } else {
//         console.log(str, "is not a palindrom")
//     }

// }

// Palindrom(palindrom)


// console.log("")




// let arr = [1, 2, 3, 4, 5]  // arr.length = 5 - 1 ,

// let reversedArr = []
// // reverse the array

// for (let i = arr.length - 1; i >= 0; i--){
//     reversedArr.push(arr[i]);
// }

// console.log(reversedArr)



// let str = "babalu";
// let reversedStr = "";

// for (let i = str.length - 1; i >= 0; i--) {
//     reversedStr = reversedStr + str[i]
// }

// if (str === reversedStr) {
//     console.log(str, "is palindrom")
// } else {
//     console.log(str, "is not a palindrom")
// }

// console.log(reversedStr)


// objects 

// function() {

// }
// everything in js is an object

// obj is data structure that store data in the form of key and value pair;

// let student = {
//     Name_is: "Ram",
//     age: 34,
//     hobbies: ["archari", "reading vedas", "killing rakchhasa"],
//     city: "Ayodhya",
//     state: "UP",
//     getName: function () {
//         return "my name is " + this.Name
//     },
//     isMarried: true

// };

// in how many ways can we create objects

// let obj = {}; // object literals
// let obj1 = Object.create(student) // by obj.create() 
// 3 object creared with the help of new key word in constructor funciton 
// constructor in class component

// this key word // this is an obj
// function constructor(useName, password) {

//     this.userName = useName
//     this.pass = password

// }
// let persone1 = new constructor("ram@shyam", "kodand dhanush");
// let persone2 = new constructor("shiv", "pinak dhanush");
// let persone3 = new constructor("vishnu", "sarang dhanush");
// let persone4 = new constructor("arjun", "gandiv dhanush");
// let persone5 = new constructor("karn", "vijay dhanush");
// let persone6 = new constructor("vishu ", "sudarshan");
// let persone7 = new constructor("ram@shyam", "kodand dhanush");

// console.log(persone1)
// console.log(persone2)
// console.log(persone3)
// console.log(persone4)
// console.log(persone5)
// console.log(persone6)
// console.log(persone7)


// function add(userame, pass) {

//     return userame, pass

// }

// add("babalu", "dabalu");




// console.log(this) // this is an object  neares jo bhi object indicate karega
// console.log(typeof this, "this is this")


// what are classes in js  // classes are templete use to create objects
let obj = {};
// tmplete
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

}


const Person1 = new Person("krishn", 5000);

console.log(Person1);

const Persone2 = new Person("shiv", "infinity")
console.log(Persone2)

for (key in Person1) {
    console.log(key, "==>", Person1[key])
};





// constructor function






// // console.log(typeof obj)
// // console.log(typeof obj1)

// // console.log(obj1.city)


// // // for in loop
// // for (key in student) {
// //     console.log(student[key])
// // }




//






// student.city = "surat"
// delete student.city //property
// console.log(student.city)
// console.log(student.getName())
// console.log(student.isMarried)
// console.log(student.age)

// student.wife = "sita";

// console.log(student)






