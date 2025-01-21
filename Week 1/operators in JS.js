// loose equality check
console.log(2 == 3)
console.log(2 == 2)
console.log(2 != 3)
console.log(2 != 2)
console.log(2 == "2")

// strict equality check
console.log(2 === "2")


let a = 22, b = 33
c = a + b
console.log(c)

let str1 = "33"
d = a + str1
console.log(d)
d = str1 + a
console.log(d)


// Type Coercion

console.log(typeof(12))
console.log(typeof("12"))
console.log(typeof(12.00))

a = 22
str1 = "22"
let str2 = "Hello"
console.log(String(a))
console.log(Boolean(a))
console.log(Number(str1))
console.log(Boolean(str1))
console.log(Number(str2))
console.log(Boolean(str2))


// Null and Undefined
console.log(5 + null)
console.log(5 + undefined)

console.log("5" + null)
console.log("5" + undefined)

// Strings
const firstName = "Hello"
const lastName = "World"

console.log(firstName + ' ' + lastName)
console.log(`My name is ${firstName} ${lastName}`)

let userName = new String("jerry1703")
console.log(userName)
console.log(userName[0])

console.log(userName.length)
console.log(userName.charAt(1))

userName = "    hello world "
userName = userName.trim();
console.log(userName)
console.log(userName.includes("hello"))
userName = userName.replace("world", "boy")
console.log(userName)

str1 = " hhaahhbbhhccHHcc "
str1 = str1.replaceAll("hh"," ")
console.log(str1)

str1 = str1.toUpperCase()
console.log(str1)


// Numbers
let num = new Number(55)
console.log(num.toString())

num = new Number(10066.66)
console.log(num.toLocaleString())
console.log(Math.floor(num))
console.log(num.toFixed(0))

console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)

// Math Library
console.log(Math.floor(Math.random(6)*10))