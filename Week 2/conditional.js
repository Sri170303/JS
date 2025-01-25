let temp = 13
if (temp < 16) {
    console.log("It's really cold outside")
} 
else if (temp < 27) {
    console.log("Weather is cool")
}
else {
    console.log("It's hot outside")
}

console.log("Are you okay?")


console.log("PW Skills")

// const score = 99
let score = 99
let life = 3

console.log("Welcome to the SPG Game")

if (score >= 100) {
    console.log("You have gained a life")
    score = score - 100
    life++;
}
else {
    console.log(`You need ${100 - score} more to gain a life`)
}

console.log(`Your score is ${score} and life(s) remaining is ${life}`)


/**
 *  Rating System for Pizza Hut
 *  1 - poor
 *  2 - ok
 *  3 - average
 *  4 - good
 *  5- excellent
 */

let ratingFromUser = "4"

let ratings = parseInt(ratingFromUser)

if (ratings <= 5 && ratings >= 1)
{
    if (ratings == 5) {
        console.log("Excellent")
    }
    else if (ratings == 4) {
        console.log("Good")
    }
    else if (ratings == 3) {
        console.log("Average")
    }
    else if (ratings == 4) {
        console.log("Ok")
    }
    else {
        console.log("Poor")
    }
}

switch (ratings) {
    case 1:
        console.log("Poor");
        break;
    case 2:
        console.log("Ok");
        break;
    case 3:
        console.log("Average");
        break;
    case 4:
        console.log("Good");
        break;
    case 5:
        console.log("Excellent");
        break;
    default:
        console.log("Invalid Ratings");
}


const email = ""

// if email is present ask for password else ask for email

if (email == "sanchit@gmail.com") {
    console.log("Enter password")
}
else {
    console.log("Enter email")
}


if (email != "") {
    console.log("Enter password")
}
else {
    console.log("Enter email")
}


console.log(Boolean(email))

if (email) {
    console.log("Enter password")
}
else {
    console.log("Enter email")
}

// Falsy Values
false
0
-0
0n
""
undefined
NaN
null


// if user provides email, password then allow login, else ask for it

const email1 = ""
const password = ""

if (email1 && password) {
    console.log("Login Allowed")
}
else if (email1){
    console.log("Enter Password")
} 
else {
    console.log("Either email or password not present")
}

// allow user to sign in with google or github

const googleLoginToken = ""
const githubLoginToken = ""

if (googleLoginToken || githubLoginToken) {
    console.log("Welcome to our app")
}
else {
    console.log("Please login to view your account")
}

let age = 19

if (age >= 18) {
    console.log("You can get a driving license")
}
else {
    console.log("You cannot get a driving license")
}

// ternary operator
const getDriverLicense = age >= 18 ? true: false

if (getDriverLicense) {
    console.log("You can get a driving license")
}
else {
    console.log("You cannot get a driving license")
}

let loading = true

if (loading) {
    return "loading ..."
}
console.log("Show the cards to user");
