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