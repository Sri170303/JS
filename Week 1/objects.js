const user = {
    'username' : 'jerry',
    'email' : 'jerry@gmail.com',
    'gender' : 'm',
    'phone' : 9876543210,
    'isLoggedIn' : true,
    'preferences' : ["DSA", "DS", "Dev"],
    'add' : {
        'city' : 'Silchar',
        'pin' : 7880101,
        'state' : 'Assam'
    },
    rating : 5
}


console.log(user)
console.log(user["phone"])
console.log(user["add"]['city'])
console.log(user.rating)

delete user["rating"]
console.log(user)

console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

console.log(user.hasOwnProperty('email'))
console.log(user.hasOwnProperty('age'))