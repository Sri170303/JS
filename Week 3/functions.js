// Functions help us to implement DRY principle
// DRY - Don't Repeat Yourself
// Once we write some code, we should be able to reuse it again whenever possible
// Functions are set of instructions that are wrapped under the same name 
// and can be called everytime when we need to implement a functionality


function checkPrime(num) {
    let sqrt_num = Math.pow(num, 0.5);
    if (num < 2) return false;
    for (let i = 2; i < Math.floor(sqrt_num + 1); i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

console.log(checkPrime(10));

// whatever the function return can be stored in a variable

let num = 34
let isPrime = checkPrime(34);

if (isPrime) console.log(`${num} is a prime.`);
else console.log(`${num} is not a prime.`)

// function with no return in js will return undefined
// It is not generally used as we have to return output of one function to another
// Though there can be specific situations where we need to have function without return

// Function Definition is the logic that we write inside the function block
// Parameters are placeholders for storing actual values passed during function call
// Arguments are the actual input that are passed to function when it is called


// Lets practise wrting functions
function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}

console.log(sum(12, 13, 14))

// Write a function to calculate sum of some numbers passed as arguments

// javascript has special array-like object called arguments that stores all the incoming arguments 
function sum() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(sum(11, 12, 13, 14));