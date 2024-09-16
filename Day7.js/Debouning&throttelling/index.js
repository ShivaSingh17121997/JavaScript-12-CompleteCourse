let btn = document.querySelector(".increment-btn")
let btnPressed = document.querySelector("btn-pressed");
let triggered = document.querySelector("increment-count")

var pressedCount = 0;
var triggeredCount = 0;

btn.addEventListener('click', () => {
    btnPressed.innerHTML = ++pressedCount;

})

console.log(pressedCount)