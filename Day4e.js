// Types Of Operator
// Arithmetic operators
// Assignment operators
// Comparison operators
// Logical operators
// conversion with console.log and innerHTML


// console.log("hello bro")

// arithmatic operator  // + - * / % 

let a = 19
let b = 12

let sum = a + b;

console.log(sum)
let sub = a - b
console.log(sub)

let mul = a * b
console.log(mul)

let div = a / b
console.log(div);


// power 
console.log(a ** b)  // 24, 144

// 4 raise to the power 2


// Assignmet operators let a = 6  (=) assignmet operator

let ab = 43
ab += 10  // sort version

ab = ab + 10 // long version

ab -= 20

console.log(ab)


// comparison oprator;  32 > tamatr  || 32 > 12     > , < , <==, >== , ==(shallow equality) , ===(strict equality) ,!== , !===

let c = 14
let d = 12

console.log(c > d)  // true
console.log(c < d) // false
console.log(c == d) // false

console.log(1 == "1") // shallow  //  true

console.log(1 === "1") // false

console.log(1 - false)  // 
console.log(1 + true)  // 

console.log(1 + "1" + 1) // 

console.log({} == {}) // reference memory locationdifferent  ; false
// console.log({} === {}) // false

// console.log(a)
// let a
// a = 10


console.log(1 + 1 + 1)


// logical operator  && ,  || , 


console.log(true && true)  //  ture

console.log(true && false)  //  false

console.log(false && true)  //  false
console.log(false || false) // false

console.log(true || true) // true
console.log(true || false) // true



// conversion of operator

let value = BigInt

// typeOf inbuilt function js which provide data type of value

console.log(typeof (value))

// 

let number = 32
let newdata = number.toString()
console.log(newdata)
console.log(typeof (newdata))


let data = "16108";
let newData = +data
console.log(typeof (newData))