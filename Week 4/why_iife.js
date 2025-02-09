// immediately invoked function expression

// say we have created new functions and variables that cause naming conflicts or having scope issues
// need is for code isolation
// here comes the use of Immediately Invoked Function Expression(IIFE)


let variable = 10;

function fun() {
    console.log(variable);
}

// 1000 lines of code

function fun() {
    console.log("new output");
}

fun();

// what should be done ?




