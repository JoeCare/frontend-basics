// let js = `amazing`;

// let firstName = `Jonas`;
// console.log(firstName);
// let PI = `3.14`;
// const country = `Poland`;
// const language = `Polish`;
// let population = 2;

// console.log(typeof population, typeof language)

// day = Number(prompt(`what day it is?`))
// function fun(x) {
//   return x
// }
// if (day === 1) {
//     console.log(`it's monday`);
// } else if (day === 2) {
//     console.log === `it's tuesday`;
// } else if (day === 3) {
//     console.log === `it's wednesday`;
// } else {
//     console.log(`idk what day it is`)
// }

day = 1

switch (day) {
    case 1:
        console.log(`it' ${day}`);
        break;
    case 2:
        console.log(`it's ${day}`);
        break;
    case 3: 
        console.log(`it's ${day}`);
        break;
    case 4:
        console.log(`it's ${day}`);
        break;
    case 5:
        console.log(`it's ${day}`);
        break;
    case 6:
        console.log(`it's ${day}`);
        break;
    case 7:
        console.log(`it's ${day}`);
        break;
}
// ternary operators
age = 18;
age >=  18 ? console.log("You're adult.") : console.log("You're under age.");
const drink = age >= 18 ? "wine" : "water";
console.log(drink);

console.log(`I like to drink ${age >= 18
     ? "wine" : "water"}.`)
console.log(`I like to drink ${drink}.`)



const billValue = 275;
const tip = billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.20
console.log(`You should pay ${billValue + tip}`)

function fruitProcessor(fruits, number) {
    console.log(fruits);
    const juice = `Juice with ${number} ${fruits}.`;
    return juice;
}

console.log(fruitProcessor('apples', 3));
appleJuice = fruitProcessor('apples', 3);
console.log(appleJuice);

function manyArgs(var1, var2, var3) {
    args = [].concat.call(arguments);
    return args;
}
console.log(String(manyArgs("one", "two", "three")));
console.log(manyArgs("one", "two", "three").toString());

function restArgs(x, ...args) {
    console.log(`First argument is ${x} and rest are ${args}`)
}

restArgs(1, 2, 3, 4, 5)