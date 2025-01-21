// Arrays
let myNewArr = new Array(1, 3, 5, 7, 9)
console.log(myNewArr)
console.log(myNewArr[3])

myNewArr = [12, "100", true, null, NaN, -1]

console.log(myNewArr)

let n = myNewArr.push("hi")
console.log(myNewArr, n)

let lastElement = myNewArr.pop()
console.log(myNewArr, lastElement)

myNewArr.unshift(100)
console.log(myNewArr)

let heroes = ["superman", "batman", "flash"]
console.log(heroes.toString())
console.log(heroes.join(" "))


heroes.push("Arrow")
heroes.push("supergirl")
console.log(heroes)
console.log(heroes.slice(0,3))
console.log(heroes.splice(1,2, "hulk"))
console.log(heroes)