





// recursion =>    function call itself is called as recursion



function shruti(a) {

    // base condition
    if (a == 0 || a==1) {
        console.log('function is competed')
        return 1;
    } else {

        return a * shruti(a - 1)
    }

    // console.log(a)

}

let ax = shruti(10)
console.log(ax)


// nested function
// closures

function outerFunction() {
    let outerevariable = "hello i am outer variable";


    function innerFunction() {
        // let innerVariable = "hello i am inner variable";

        // console.log(outerevariable)


        function ineermostfunction(){
            console.log(outerevariable)
        }

        return ineermostfunction()

    }

    // console.log(innerVariable)

    return innerFunction()
}

outerFunction();





const Variablefun = () => {

}

function fafafa() {

} // classical function  ES 6 arrow functin


console.log(Variablefun)
const Nency = () => {
    console.log("hello i am nency, i am learning  arrow function aur ab raj se question puchhiye")
}

Nency()



// IIFE immediatly invoked funciton expression

(function raj() {
    console.log("mai apna raj kisi ko nahi batata apni gf ko chhod k")
}) ()


