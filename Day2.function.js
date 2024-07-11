// functions --> are a block/piece of code that perform  a specific task;
// 
function sayHellow(name, country) {

    console.log("Hello my name is ", name)
    console.log("i live in ", country)

}

// invoke 
sayHellow("sabalu", "america")   // simple functon single task is performed




function Add(a, b) {

    return a + b

}

 let add = Add(4, 5)
 console.log ( "Addtion of the given number is",add)





function average(a, b, c, d) {


    return (a + b + c + d ) / 4
}

let averageVal = average(25, 50, 75, 100)
console.log("the average value of nos is ", averageVal)



function Cube(a) {
    return a * a * a
}

let xy = Cube(298769);
console.log(x)



function percent(totolMarks, sub, marksObtain) {

    return (marksObtain * 100) / totolMarks
}

let percentage = percent(600, 7, 143);


console.log("Your percentage is", percentage + " %");


recurison

function Callingitself() {

    console.log("calling")
    Callingitself()


}
Callingitself()


function factorial(n) {

    if(n == 0 || n==1){
        return 1
    }

    return n * factorial(n-1)
 
  }
  
 let x =  factorial(4)
 console.log(x)
 
