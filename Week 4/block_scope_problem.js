let variable = 10;

function fun() {
    console.log(variable);
}

// 1000 lines of code

fun();

if (true) {
    function fun() {
        console.log(variable ** 2);
    }
    fun();
}


fun();

// see the problem when we use block scope
// scope of new definition of fun inside if block
// competes with old defintion in global scope

