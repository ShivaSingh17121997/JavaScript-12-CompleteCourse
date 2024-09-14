// prototypical inheritence

// let shatedFunctionalitiesOfIphone1 = {}
// shatedFunctionalitiesOfIphone1.dial = function () {
//     console.log("tring..., tring...")
// }

// iphone1.prototype.dial = function () {
//     console.log("tring... , tring...")
// }



// function iphone1(generation, color) {
//     let obj = {}
//     Object.setPrototypeOf(obj, iphone1.prototype)

//     obj.generation = generation;
//     obj.color = color

//     return obj
// }

// let i1 = iphone1(1, "gray")
// console.log(i1.dial())





// let sharedPropertiesOfIhone2 = {};
// sharedPropertiesOfIhone2.blueTooth = function () {
//     console.log("Connected to bluetooth device...")
// }

// Object.setPrototypeOf(sharedPropertiesOfIhone2, shatedFunctionalitiesOfIphone1);


// Object.setPrototypeOf(iphone2.prototype, iphone1.prototype)

// iphone2.prototype.bluetooth = function () {
//     console.log("Connected to the bluetooth device...")
// }

// function iphone2(generation, color) {
//     let obj = {}
//     Object.setPrototypeOf(obj, iphone2.prototype);

//     obj.generation = generation;
//     obj.color = color


//     return obj;

// }
// let i2 = iphone2(2, "green");
// console.log(i2.dial())
// console.log(i2.bluetooth())


// let student = {

//     name: "john",
//     subject: "javascript"

// }


// function sayHi() {

// Object.setPrototypeOf(student)
//     console.log(`Hi, my name is ${this.name}. I am learning ${this.subject}`)
// }

// student.say = sayHi
// console.log(student.say())
// console.log(student.say())



// class iphone3 {
//     constructor(siri) {
//         this.siri = siri;
//     }

//     respondToHeySiri() {
//         if (this.siri) {
//             console.log("Siri is working")
//         } else console.log("siri is not working")
//     }
// }

// let i3 = new iphone3(true).respondToHeySiri()


// class Creature {
//     constructor(name) {
//         this.name = name

//     }

//     eat() {
//         console.log(this.name + " is eating ")
//     }
// }

// new Creature("ram").eat()

// class Humans extends Creature {
//     constructor(name) {
//         super(name)
//     }

//     sleep() {
//         console.log(`${this.name}  is sleeping`)
//     }

// }

// new Humans("babalu").sleep()


// class Employees extends Humans {
//     constructor(name, sallery) {
//         super(name)
//         this.sallery = sallery
//     }

//     changeSalary() {
//         this.sallery = 2000000
//     }

//     displaySalary() {
//         console.log(`${this.name}'s salary is ${this.sallery}`)
//     }

// }

// new Employees("raghu", 660000).changeSalary()
// new Employees("raghunandan", 876000).displaySalary()



// class Engineer extends Employees {
//     constructor(name, sallery) {
//         super(name, sallery)
//     }

//     code() {
//         console.log(`${this.name} is coding`)
//     }

//     fixBugs() {
//         console.log(`${this.name} fixing the bugs`)
//     }

//     sleep() {
//         console.log(`${this.name} never sleeps`)
//     }
// }

// new Engineer("shyam", 400000).code()
// new Engineer("shyam", 400000).fixBugs()
// new Engineer("shyam", 400000).sleep()













// ### Basic Questions

// 1. **Create an Object with Prototypal Inheritance**
//    - Create a base object `animal` with a property `species` and a method `speak()`. Then create an object `dog` that inherits from `animal` and adds a property `breed` and overrides the `speak()` method to provide a breed-specific sound.


// class Animal {
//     constructor(species) {
//         this.species = species
//     }

//     speak() {
//         console.log(`${this.species}  make the sound`)
//     }
// }

// dog inherites from the animals

// class Dog extends Animal {
//     constructor(breed) {
//         super("Dog")
//         this.breed = breed;
//     }

//     speak() {
//         console.log(`${this.species} says woff-woff`)
//     }
// }

// const myDog = new Dog("golden Retriver")
// console.log(myDog.species)
// console.log(myDog.speak())


// console.log(myDog);



// 2. **Understand Prototype Chain**
//    - Define a constructor function `Person` with properties `name` and `age`. Add a method `introduce()` to `Person`’s prototype. Then create an instance of `Person` and verify that it can use the `introduce()` method.

// function Person(name, age) {
//     this.name = name
//     this.age = age
// };

// const newPerson = new Person("ram", 21);

// Person.prototype.introduce = function () {
//     console.log(`Hi, I'm ${this.name} and I am ${this.age} years old.`);
// };

// console.log(Object.getPrototypeOf(newPerson) === Person.prototype);  // Output: true


// console.log(newPerson.name);
// console.log(newPerson.age);
// console.log(newPerson.introduce());




// 3. **Modify Prototype Properties**
//    - Start with an object `car` with a property `type` and a method `drive()`. Create another object `electricCar` that inherits from `car` and modifies the `drive()` method to include information about battery level.


// function Car(type) {
//     this.type = type
//     this.drive = function () {
//         console.log(`${this.type} is a good car`)
//     }

// }

// Car.prototype.drive = function () {

// }

// const newCar = new Car("TATA");

// console.log(newCar.type)
// console.log(newCar.drive())







// ### Intermediate Questions

// 4. **Prototype Inheritance with Constructor Functions**
//    - Define a constructor function `Shape` with a method `area()`. Create another constructor function `Rectangle` that inherits from `Shape` and adds properties `width` and `height`, and overrides the `area()` method to calculate the area of a rectangle.

// function Shape(area) {
//     area = function () {
//         console.log(`area is this`);
//     };
// };

// Object.setPrototypeOf(Shape, Rectangle)
// function Rectangle(width, height) {
//     this.width = width
//     this.height = height
//     area = function () {
//         console.log(`The area is , ${this.width * this.height}`)
//     };

// }


// Rectangle(2,3).area()


// let obj = {
//     speed: "20kmpr"
// }

// function Car(brand) {

//     // console.log(brand)
//     this.brand = brand;
//     this.speed = "120kmph"

//     this.horn = function () {
//         console.log(`this ${this.brand} has horn & its speed is ${this.speed}`)
//     }
// }
// const bmwCar = new Car("bmw");

// // Object.setPrototypeOf(bmwCar, obj)




// bmwCar.horn.call(obj)






// 5. **Instanceof and Prototypes**
//    - Explain how `instanceof` works in JavaScript. Create a constructor function `Animal` and another `Dog` that inherits from `Animal`. Verify the relationship between instances of `Dog` and `Animal` using `instanceof`.








// 6. **Prototype Chain and Property Shadowing**
//    - Create an object `person` with a property `age` and a method `getAge()`. Then create an object `student` that inherits from `person` and has its own `age` property. Show how to access the `getAge()` method from `student` and explain property shadowing.

// let person = {
//     age: 21,
//     name: "babalu"

// }

// let student = {
//     age: 23,
//     getAge: function () {
//         console.log(`this is the age ${this.age}, ${this.name}`)
//     }
// }

// student.getAge.call(person)

// Object.setPrototypeOf(student, person)
// student.getAge()



// ### Advanced Questions

// 7. **Implement a Class Hierarchy with Prototypal Inheritance**
//    - Implement a basic class hierarchy using constructor functions: `Vehicle` (with properties `brand` and method `start()`), and `Car` (which inherits from `Vehicle`, adds a property `model`, and overrides `start()`).

// class Vehicle {
//     constructor(brand) {
//         this.brand = brand;
//         this.start = function () {
//             console.log(`this is the car ${this.brand}`);
//         }

//     }
// }


// class Car extends Vehicle {
//     constructor(brand, model) {
//         super(brand)
//         this.model = model;
//         this.start = function () {
//             console.log(`this is the car of future ${this.brand} & ${this.model}`)
//         }
//     }
// }

// let newCAr = new Car("tata", "curve")

// newCAr.start();



// 8. **Prototype Inheritance and `Object.create()`**
//    - Use `Object.create()` to create a new object that inherits from a prototype object with properties `name` and `age`. Add a method `greet()` to the prototype object and use it in the new object.






// 9. **Inheritance with Constructor Functions and `Object.setPrototypeOf()`**
//    - Create a constructor function `Person` with properties `name` and `age`. Create another constructor function `Employee` that inherits from `Person`. Use `Object.setPrototypeOf()` to set up the inheritance chain and add a method `getJobTitle()` to `Employee`.

// ### Practical Challenges

// 10. **Build a Simple Inheritance System**
//     - Implement a simple inheritance system where you create a base object `Employee` with properties `name` and `position`, and a method `getDetails()`. Create a derived object `Manager` that adds a property `department` and overrides `getDetails()`.

// 11. **Prototype-based Object Composition**
//     - Create a `Person` object with a method `walk()`. Create an `Employee` object that inherits from `Person` and adds a method `work()`. Then, create an `Engineer` object that inherits from `Employee` and adds a method `code()`. Demonstrate the prototype chain by invoking methods from an instance of `Engineer`.

// 12. **Implement Inheritance and Method Chaining**
//     - Implement a base object `Shape` with a method `describe()`. Create derived objects `Circle` and `Square` that inherit from `Shape`, override `describe()`, and add their own properties. Demonstrate method chaining by creating an instance of `Circle` and calling its methods.

// These questions should provide a comprehensive range of practice problems to help you master prototypal inheritance in JavaScript. Feel free to ask if you need more detailed explanations or code solutions for any of these questions!



//




// console.log(age) // undefinded

// var age = 65

// console.log(age) // 65



// let obj = {
//     name: "ram"
// }



// let Name = {
//     getName: function () {
//         console.log(`my name is ${this.name} `)
//     }
// }

// Object.setPrototypeOf(Name, obj)


// Name.getName.call(obj)

// protypical inheritence