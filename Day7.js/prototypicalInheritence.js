// prototypical inheritence

// let shatedFunctionalitiesOfIphone1 = {}
// shatedFunctionalitiesOfIphone1.dial = function () {
//     console.log("tring..., tring...")
// }

iphone1.prototype.dial = function () {
    console.log("tring... , tring...")
}

function iphone1(generation, color) {
    let obj = {}
    Object.setPrototypeOf(obj, iphone1.prototype)

    obj.generation = generation;
    obj.color = color

    return obj
}

let i1 = iphone1(1, "gray")
console.log(i1.dial())





// let sharedPropertiesOfIhone2 = {};
// sharedPropertiesOfIhone2.blueTooth = function () {
//     console.log("Connected to bluetooth device...")
// }

// Object.setPrototypeOf(sharedPropertiesOfIhone2, shatedFunctionalitiesOfIphone1);


Object.setPrototypeOf(iphone2.prototype, iphone1.prototype)

iphone2.prototype.bluetooth = function () {
    console.log("Connected to the bluetooth device...")
}

function iphone2(generation, color) {
    let obj = {}
    Object.setPrototypeOf(obj, iphone2.prototype);

    obj.generation = generation;
    obj.color = color


    return obj;

}
let i2 = iphone2(2, "green");
console.log(i2.dial())
console.log(i2.bluetooth())