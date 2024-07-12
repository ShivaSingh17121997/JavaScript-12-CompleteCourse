// array, push , pop, shift, unshift, splice,slice , maza , frooti



// what is array   to store data  linear data structure contiguouse (one aftet other)

let arr = [1, 2, 3, 4, 5, 6]



//  0          1         2           3

let student = [{ name: "babalu" }, { name: "dabalu" }]

//index start with zero


// get data at any index

// let data = arr1[3]
// let data1 = arr1[1]
// // console.log(data, data1)


// add something into the array;

// arr1.push("grapes")
// console.log(arr1);


// delete

// arr1.pop();
// arr1.pop();
// arr1.pop();

// console.log(arr1)



let arr1 = ["apple", "banana", "strawberry", "orange"]


arr1.unshift("coconut water")
arr1.shift()

console.log(arr1)


const animals = ['ant', 'bison', 'camel', 'duck', 'elephant', 'ant', 'bison', 'camel', 'duck', 'elephant'];
// length
console.log("length of the array is", animals.length)

const newAnimals = animals.slice(2, -1)

const newAnimias2 = animals.slice(1, 4)


console.log(newAnimals)
console.log(newAnimias2)





let num = [2, 34, 54, 43, 65, 77]
let sorteddata = num.sort((a, b) => b - a)


console.log(sorteddata)