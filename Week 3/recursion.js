// functions calls itself and tries solving a smaller part of the problem then its caller.

function fact(num) {
    if (num == 0 || num == 1) return num;
    const result = fact(num-1) * num;
    return result;
}

console.log(fact(5));