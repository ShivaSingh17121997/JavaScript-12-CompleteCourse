

// ticketing system
// age <=5  free 0
// age age >5  age<13 // half ticket 15
// age >13 , age<= 60 // full ticket 30
// age > 60 // 40% discount 

let age = 698

if (age <= 0) {
    console.log("age should be atlease 1 yrs")
    return
}
if (age <= 5) {
    console.log('ticket is free')
} else if (age > 5 && age <= 13) {
    console.log('half ticket , rs-15')
} else if (age > 13 && age <= 60) {
    console.log("full ticket , rs-30")
} else if (age > 60) {
    console.log("30 percent discount, rs-18")
}
