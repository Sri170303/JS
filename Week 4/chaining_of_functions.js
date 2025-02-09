// chaining of functions is used in js objects called promises

const obj = {
    func1 : function f() {
        return {
            func2: function g(x) {
                return x*x*x;
            }
        }
    }
}
console.log(obj.func1().func2(2))

// object having a function which returns an object with another function