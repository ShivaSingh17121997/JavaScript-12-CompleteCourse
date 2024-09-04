// if else ladder statement with logical operatore;



// instructions
// if attendence > 90 % // excellent
// attendence >80 and less than 90 // good
// else 1000rs fine 

let attendece = 70;

if (attendece >= 90) {
    console.log("Excellent")
} else if (attendece >= 80 && attendece < 90) {
    console.log("good")
} else {
    console.log("Your attendence is less than 80%, pay fine of 1000")
}



// temperature

// budget 0-100 // manchurian,streetfood
// budget 100 -300 // thali,pizza, burger, fries
// budget 300 - 500 // macd,
// 500 -1000  // large size pizza 
// 1000 - 1500 // bahubali thali


let budget = 510;

if (budget <= 0) {
    console.log("enter at least 1 rs")
    return
}
if (budget <= 100) {
    console.log("manchurain street food")
} else if (budget > 100 && budget <= 300) {
    console.log("You can have a thali, small pizza , burger")
} else if (budget > 300 && budget <= 500) {
    console.log("you can have burger of mac donalds")
} else if (budget > 500 && budget <= 1000) {
    console.log("you can have a large size pizza")
} else if (budget > 1000 && budget <= 1500) {
    console.log("you can have bahubali thali")
} else {
    console.log("find a five star hotel enjoy meal there")
}


