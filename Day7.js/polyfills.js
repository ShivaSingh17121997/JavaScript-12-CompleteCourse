



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
Array.prototype.myFilterFun = function (callback) {

    if (!callback) throw Error("Undefined is not a function ")

    let arr = this;
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let result = callback(arr[i], i, arr)

        if (result) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

let filArr = [1, 2, 3, 4, 5, 6]
Array.prototype.myFilterFun(() => { })

let newFil = filArr.myFilterFun((item) => {
    return item < 4
})

console.log(newFil)