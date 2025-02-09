// function declration and function expression

function test(a, b) {
    let sum = a + b;
    return sum;
}


// functions are first class citizens in js
// function can be stored, passed as argument and returned from a function
// function expression have different scoping mechanism
// JS is a both compiled and interpreted


// asynchronus programming in js uses passing of function expression as callback
// pub-sub architecture uses returning a function from a function

// types of function expression
// named, anonymous and IIFE (immediately invoked function expression)

const f = function process() {

}

const g = function() {

}

const h = () => {

}

(function() {

})()


(function exec() {

})()