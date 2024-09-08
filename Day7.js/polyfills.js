



// console.log((typeof Array.prototype))

// polyfill of map
// Array.prototype.myMapFun = function (callback) {
//     if (!callback) {
//         throw Error("undefined is not a function")
//     }
//     let arr = this;
//     console.log(arr)
//     let newArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         const result = callback(arr[i], i, arr)
//         newArr.push(result)
//     }
//     return newArr;
// }

// Array.prototype.myMapFun(() => { })


// let arrr = [1, 2, 3, 4, 5]

// let maparr = arrr.myMapFun((item) => {
//     console.log(item * 2)
// })



// filtet polyfill
// Array.prototype.myFilterFun = function (callback) {

//     if (typeof callback !== "function") throw Error("Undefined is not a function ")

//     let arr = this;
//     let newArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         let result = callback(arr[i], i, arr)

//         if (result) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;

// }

// let filArr = [1, 2, 3, 4, 5, 6]
// Array.prototype.myFilterFun(() => { })

// let newFil = filArr.myFilterFun((item) => {
//     return item < 4
// })

// console.log(newFil)


// polyfilof reduce

// Array.prototype.myReduce = function (callback, IntialVal) {
//     if (typeof callback !== "function") throw Error("undefined is not a function!");

//     let arr = this
//     for (let i = 0; i < arr.length; i++) {
//         const ans = callback(IntialVal, arr[i], i, arr)
//         IntialVal = ans;
//     }
//     return IntialVal
// }


// let arr = [1, 2, 3, 4, 5]

// let val = arr.myReduce((acc, cv) => {
//     return acc + cv
// }, 0)

// console.log(val)

// let arr = [3, 4, 5, [3, 4, 3], 9, 3]

//  console.log(arr.flat())

// Array.prototype.myFlat = function () {

//     const arr = this;
//     const result = [];

//     function flat(arr) {
//         for (let i = 0; i < arr.length; i++) {
//             if (Array.isArray(arr[i])) {
//                 flat(arr[i])
//             } else {
//                 result.push(arr[i]);
//             }
//         }
//     }
//     flat(arr)

//     return result;
// }

// let flattenArray = arr.myFlat()
// console.log(flattenArray)




// practice question of polyfills
// polyfill of map functin 

// let arr = [1, 2, 3, 4, 5]

// Array.prototype.myMapFunction = function (callback) {

//     if (typeof callback !== "function") throw Error("Undefined is not a function ");

//     let newArr = [];
//     let arr = this;

//     for (let i = 0; i < arr.length; i++) {
//         let res = callback(arr[i], i, arr)
//         newArr.push(res);
//     }

//     return newArr;

// }

// let answer = arr.myMapFunction((item) => item * 4)
// console.log(answer)


// polyfill of filter 

// let arr = [1, 2, 3, 4, 5];

// Array.prototype.myFilterFun = function (callback) {

//     if (typeof callback !== 'function') throw Error("undefined is not a function");
//     let arr = this;
//     let newArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         let ans = callback(arr[i], i, arr)
//         if (ans) {
//             newArr.push(arr[i])
//         }
//     }
//     return newArr;
// }

// let filteredArr = arr.myFilterFun((item) => { return item == 4 });
// console.log(filteredArr)



// polyfill of reduce function 

// let arr = [1, 2, 3, 4, 5];
// Array.prototype.myReduceFun = function (callback, initialVal) {
//     if (typeof callback !== 'function') {
//         throw Error("Undefined is not a function");
//     }

//     let arr = this;


//     for (let i = 0; i < arr.length; i++) {
//         let ans = callback(initialVal, arr[i], i, arr)
//         initialVal = ans;
//     }
//     return initialVal;
// }

// let val = arr.myReduceFun((acc, cv) => {
//     console.log("acc", acc);
//     return acc + cv;
// }, 0);
// console.log(val);


// polyfill of flat array;

// let array = [1, 2, 3, [4, 5, [3, 4], 6, [7, 8, 9], 8], 3, 4, 5];

// Array.prototype.myflatFun = function () {
//     let newArr = [];
//     let arr = this;

//     function flat(arr) {
//         for (let i = 0; i < arr.length; i++) {
//             if (Array.isArray(arr[i])) {
//                 // console.log(arr[i])
//                  flat(arr[i]);
//             }
//             else newArr.push(arr[i])
//         }
//     }
//     flat(arr);
//     return newArr;
// }

// console.log(array.myflatFun());



// polyfil of call , apply

// Function.prototype.mybindFun = function (context = {}, args = []) {
//     if (typeof this !== 'function') throw Error("This is not a callable function ")
//     if (!Array.isArray(args)) throw Error("argument should be array")

//     context.fn = this
//     context.fn(...args)
// }

// let obj = {
//     name: "ram",
//     age: "12"
// }

// function hello() {
//     console.log(`hello ${this.name} my age is ${this.age}`)
// }

// 


//    polyfill for bind function 

// Function.prototype.myBindFun = function (contex = {}, ...args) {
//     if (typeof this !== "function") {
//         throw Error("this is not a function ")
//     }

//     contex.fn = this;
//     return function () {
//         return contex.fn(...args)
//     }

// }

// let newufn = hello.myBindFun(obj, 12)
// console.log(newufn())
