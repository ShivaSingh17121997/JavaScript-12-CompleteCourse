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


class Creature {
    constructor(name) {
        this.name = name

    }

    eat() {
        console.log(this.name + " is eating ")
    }
}

new Creature("ram").eat()

class Humans extends Creature {
    constructor(name) {
        super(name)
    }

    sleep() {
        console.log(`${this.name}  is sleeping`)
    }

}

new Humans("babalu").sleep()


class Employees extends Humans {
    constructor(name, sallery) {
        super(name)
        this.sallery = sallery
    }

    changeSalary() {
        this.sallery = 2000000
    }

    displaySalary() {
        console.log(`${this.name}'s salary is ${this.sallery}`)
    }

}

new Employees("raghu", 660000).changeSalary()
new Employees("raghunandan", 876000).displaySalary()



class Engineer extends Employees {
    constructor(name, sallery) {
        super(name, sallery)
    }

    code() {
        console.log(`${this.name} is coding`)
    }

    fixBugs() {
        console.log(`${this.name} fixing the bugs`)
    }

    sleep() {
        console.log(`${this.name} never sleeps`)
    }
}

new Engineer("shyam", 400000).code()
new Engineer("shyam", 400000).fixBugs()
new Engineer("shyam", 400000).sleep()