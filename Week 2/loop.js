for (let i = 0; i < 10; i++) {
    console.log(i)
}

// multiplication table using for loop

const n = 17
for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n*i}`)
}

// start with score 21 and reduce it till it reaches 10
// if score hits 15 send a warning

let score = 21
for (; score >= 10; score--) {
    console.log(score);
    if (score == 15) {
        console.log("Score has reached 15")
    }
}
console.log()


// break and continue
score = 25
for (; score >= 10; score--) {
    console.log(score);
    if (score == 15) {
        break;
    }
}

score = 25
for (; score >= 10; score--) {
    console.log(score);
    if (score == 15) {
        continue;
    }
}

score = 25
for (; score >= 10; score--) {
    if (score == 15) {
        continue;
    }
    console.log(score);
}

const statement = "How are you?"
const arrayOfStrings = statement.split(" ")

for (let i = 0, j = 0; i < arrayOfStrings.length; i++) {
    console.log(arrayOfStrings[i]);
}