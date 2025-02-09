let variable = 10;

function fun() {
    console.log(variable);
}

// 1000 lines of code

fun();

if (true) {
    let g = function fun() {
        console.log(variable ** 2);
    }
    g();
}


fun();

// see the problem when we use block scope
