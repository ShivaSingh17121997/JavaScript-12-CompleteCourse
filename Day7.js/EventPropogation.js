console.log("working")

let div = document.querySelector("div");
let form = document.querySelector("form")
let button = document.querySelector("button")


// div.addEventListener("click", func)

// form.addEventListener("click", func)

// button.addEventListener("click", func)

// function func(event) {
//     alert("currentTarget" + event.currentTarget.tagName + "target ," + event.target.tagName +" "+ "this "+ this.tagName  )
// }



div.addEventListener("click", function (e) {
    // e.stopPropagation();
    alert("div")
});


form.addEventListener("click", function (e) {
    // e.stopPropagation()
    alert("form")
}, {
    capture: true
});


button.addEventListener("click", function (e) {
    // e.stopPropagation()
    alert("button")
});


// Q  6 what is event delegation


// document.querySelector(".products").addEventListener
//     ('click', (e) => {
//         console.log(e)
//         console.log(e.target.tagName)

//         if (e.target.tagName === "SPAN") {
//             window.location.href += "/" + e.target.className

//         }



//     })