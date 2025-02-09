// Call Backs in JS
// functions can be passed as arguments as well
// In C++ we can pass function as argument with the help of function pointers

function processArray(arr, fun) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = fun(arr[i]);
    }
    console.log(arr);
}

// what fun will do is decided at function call for processArray
// and not at the time of function definition of processArray
processArray([1, 2, 3, 4, 5, 6], function cube(x) {return x*x*x;})

processArray([1, 2, 3, 4, 5, 6], function sqaure(x) {return x*x;})

// higher order function(hof) -> those which take another function as argument
// and callback is the function which we pass as argument to a function

const arr = [10, 20, 30, 40, 50]

arr.forEach(function byHalf(value) {
    value = value / 2;
    console.log(value);
})


// when we have to do something after a function completes
// we use callbacks
// an important use case of this is during a file donwload
// we need to perform some tasks(performed using callbacks) as soon as the download completes after some time


function fun() {
    console.log("This function is returned.");
    return function clearUp() {
        console.log("Clearing up the resources");
    }
}

const storeFunsReturn = fun();
console.log(storeFunsReturn);
storeFunsReturn();

