const isEvenOrOdd = function process(num, fun) {
    fun();
    return num % 2 == 0;
}

const EvenOrOdd = function (num, fun) {
    console.trace();
    return num % 2 == 0;
}


// Why named function expression preferred?
// - Debugging
// - Recursion
// - Readability


// isEvenOrOdd(23, function exec() {
//     console.trace();
//     return 1+2;
// })

isEvenOrOdd(23, function () {
    console.trace();
    return 1+2;
})

// EvenOrOdd(34, function () {
//     console.trace();
//     return 1+2;
// })

// tracing function calls is much more easier with named function expression


// function names should tell what the function will be doing
// writing comments everytime to make readers understand
