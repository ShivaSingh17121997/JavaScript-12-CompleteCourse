// let obj = {
//     naem: "ram"
// }
// inheritance prototypal inheritence
// let obj2 = {
//     getName: function () {
//         console.log(`my name is `, this.naem)
//     }
// }
// Object.setPrototypeOf(obj2, obj)
// obj2.getName();




// error



// function CheckErr() {
//     try {
//         alert("hello")
//     } catch (error) {

//     }
// }

// CheckErr()


// protypal inheritence    // currying // closures ==>


// let obj = {
//     name: "krishna",
//     age: 21
// };

// let obj2 = {
//     getName: function () {
//         console.log(`hello my name is ${this.name} , &i am ${this.age} year old;`)
//     }
// };

// Object.setPrototypeOf(obj2, obj)
// obj2.getName();

// console.log(obj2.name)// undefned
// console.log(obj.name)
// console.log(obj.name)
// console.log(obj.age)

// inheritence with classes ES6
// sugar coating as syntax extension

// class Vehical {
//     constructor(Name, brand) {
//         this.Name = Name;
//         this.brand = brand
//     }
// }

// class car extends Vehical {
//     constructor(Name, brand, range) {
//         super(Name, brand)
//         this.range = range;

//     }

//     getCar() {
//         console.log(`this car's name is ${this.Name}, and its brand is ${this.brand}, and the range of the car is ${this.range}.`)
//     }
// }

// let Vehical1 = new car("curvv", "tata", 400) // {name:"curvv", brand:"tata"}
// Vehical1.getCar()
// let car1 = new car()

// console.log(car1)




// class Device {
//     constructor(Name, brand) {
//         this.Name = Name
//         this.brand = brand
//     }
//     getDevice() {
//         console.log(`this device is ${this.Name}, and its brand is ${this.brand}`)
//     };

//     setDevice() {
//         console.log(`this is setDevice ${this.brand}`)
//     }
// };

// console.log(typeof Device);

// // let ab = new Device("babalu", "dabalu")

// class iphone extends Device {
//     getIphone() {
//         console.log(`this is ${this.Name}, its brand is ${this.brand}`)
//     };
// };

// class wphone extends iphone {
//     getWhone() {
//         console.log(`this is wphone ${this.brand}`)
//     }
// }

// let iphone1 = new iphone("ram", "shyajm")
// let wphone1 = new wphone("apple", "nike", 987)
// console.log(wphone1)
// wphone1.getDevice()
// wphone1.getIphone();
// wphone1.getWhone();
// iphone1.getIphone()

// iphone1.getDevice()

// iphone1.setDevice()


// var x = 20;

// function hi(){
//     console.log(x);
//     let x = 10

// }

// hi()




// inheritence by clsses



// shallow copy
// properties deep copy


// class Home {
//     constructor(kitchen, door) {
//         this.kitchen = kitchen
//         this.door = door
//     }

//     getHome() {
//         console.log(`this home has ${this.kitchen}kithen & ${this.door} doors`)
//     }
// }


// class childHome extends Home {
//     getChildHome() {
//         console.log(`this childhome has ${this.kitchen} kithen & ${this.door} doors`)
//     }
// }

// const childHome1 = new childHome(2, 10);
// // childHome1.getChildHome()
// childHome1.getHome()



// let arr = [11, 21, 4, 3, 66, 76, 32];  // unsorted array

// let sortedArr = arr.sort((a, b) => b - a) // ascendug order

// console.log(sortedArr)



// let obj = {
//     name:"ram",
//     age:21
// }


// obj.name = "radhe shaym"
// obj.age = 22

// console.log(obj.name)
// console.log(obj.age)


// let arr = [1, 2, 3]

// let newArr = arr.filter((item)=> item !=2 )

// console.log(newArr)






// let page = 1
// console.log( page)


// let page = 10

// function pagination() {
//     console.log(++page)// 10
//     console.log(page)// 11
// }

// pagination()