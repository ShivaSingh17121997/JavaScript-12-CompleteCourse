CallName();
arrowFun(67, 32);

// closures
// function block of code that perform specific/ particular task
// syntax
// hoisting

function myFun() {
    // bock
    // block scope
    //logic
    // 
}
myFun() // invoking a function // calling


function CallName() {
    console.log("Hello my name is Function");
}


// classical function
function age() {
    let studentAge = 56;
    let fathersAge = 80;
    return studentAge
}

console.log("age is", age());



// type 2 arrow function ES 6 2018

var arrowFun = (age, money) => {
    console.log("this is an arrow function", age, money)
}

// passing an argument in a function

// parameter
function arg(Name) {
    return Name
}
// argument
arg("raj")
arg("shruti")
arg("adarsh")



// function(function() { })

// function(() =>)



