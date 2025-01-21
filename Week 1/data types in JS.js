// The Runtime environment provides a lot of functionalities which are not native feature of JS like console.log()

console.log("Hello World")
console.log("First time trying JS")
console.error("Error")
console.warn("Warn")

// console.log("Commenting")
// console.log("You look awesome")

/*
console.log("Commenting")
console.log("You look awesome")
*/

/**
 *  We can write multi-line comments in this manner as well
 *  It's more easier than Ctrl + \
 */


// variables - let
// constant - const

let userName = "Sri Darsan Sah"
const userEmail = "sridarsan@gmail.com"
const password = "hello world" 

console.log(userName, userEmail, password)
userName = "Jerry"
console.log(userName, userEmail, password)
// userEmail = "jerry@gmail.com"
// Above line is not allowed to be executed


/**
 * Primitive Type (Occupy Stack Memory)
 * 
 * String
 * Number
 * Boolean
 * Null
 * Undefined
 * Symbol
 * BigInt
 */

const firstName = "Jerry"
const age = 21
const score = 58
let isLoggedIn = true
let bankBalance = undefined
let nodeVersion = null
const buttonId = Symbol("Id")
const longNumber = 992002982202988282n;

/**
 * Reference Type / Objects (Occupy Heap Memory)
 * 
 * Arrays
 * Objects
 * Functions 
 */

const numbers = [1, 2, 3, 4, 5, true, "jerry", 12.09]
const heroes = [
    "batman",
    "flash",
    "123"
]
console.log(numbers)
console.log(numbers[0])



const userObj = {
    "name" : "Jerry",
    "age" : 22,
    "isLoggedIn" : true
}

console.log(userObj)
console.log(userObj["name"])


/**
 * Below example shows difference between Reference and Non-Reference type
 */

userName1 = "jerry"
userName2 = userName1

console.log(userName1, userName2)
userName1 = "jenice"
console.log(userName1, userName2)

// console.log(user)
userObject1 = {
    "name": "Shyam",
    "email": "sridarsansh@gmail.com",
    "phone": 9876543210
}

userObject2 = userObject1

console.log(userObject1)
console.log(userObject2)

userObject2["name"] = "James"
console.log(userObject2)
console.log(userObject1)


// Operations on numbers
console.log(10+3)
console.log(10/3)
console.log(10%3)
console.log(10*3)
console.log(10**3)
console.log(Math.floor(10 / 3))
let num = 13
num++
console.log(num)
num += 2
console.log(num)

// Comparison Operators
num1 = 22
num2 = 22.0
str_num = "22"
console.log(num1 == num2)
console.log(num1 === num2)

console.log(num1 < num2)
console.log(num1 == str_num)
console.log(num1 === str_num)




// Operations on Strings
const price = "750.00"
const user = "sri"
console.log(price * 3)
console.log(user * 3)



