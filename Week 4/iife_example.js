let variable = 10;

function fun() {
    console.log(variable);
}

// 1000 lines of code

fun();

(function () {
    function fun() {
        console.log(variable ** 2);
    }
    fun();
})();

fun();

// this cannot be done with use of block scope