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

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}.`);

function likeToEat(drink) {
    console.log(`I like to eat oranges}.`);
}
likeToEat()

if (likeToEat() === undefined) {
    console.log(`likeToEat returns undefined`)
}
console.assert(typeof likeToEat() === undefined, "AssertionError: returns undefined")

const billValue = 275;
const tip = billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.20
console.log(`You should pay ${billValue + tip}`)

function fruitProcessor(fruits, number) {
    console.log(fruits);
    return `Juice with ${number} ${fruits}.`;
}

console.log(fruitProcessor('apples', 3));
appleJuice = fruitProcessor('apples', 3);
console.log(appleJuice);

function manyArgs(var1, var2, var3) {
    return [].concat.call(arguments);
}
console.log(String(manyArgs("one", "two", "three")));
console.log(manyArgs("one", "two", "three").toString());

function restArgs(x, ...args) {
    console.log(`First argument is ${x} and rest are ${args}`);
}

restArgs(1, 2, 3, 4, 5)
// birthYear = 1991;

// Function expression:
// more readable because u have to declare function before invoking and it's stored in variable from the beginning
calcAge1 = function(birthYear) {
    return 2037 - birthYear;
}

console.log(calcAge1(1991));


// function declaration:
// might be invoked before declaration : o (hoisting)
console.log(calcAge2(1991));
function calcAge2(birthYear) {
    return 2037 - birthYear;
}

// Arrow function (kind of function expression) (doesn't get 'this' keyword)
// good oneliners

calcAge3 = birthYear => 2037 - birthYear;
console.log(calcAge3(1991));

calcYearsToRetire = (birthYear, firstName) => {
    const age = calcAge3(birthYear);
    toRetirement = 67 - age
    if (retirement > 0) {
        console.log(`${firstName} has ${retirement} years to retirement.`);
        return retirement
    } else {
        console.log(`Retired since ${Math.abs(retirement)} years.`);
        return -1
    }
}
// multicaret in vsc ctrl+alt+click, ctrl+d
console.log(calcYearsToRetire(1993, 'John'));
console.log(calcYearsToRetire(1968, 'Joe'));
peelFruit = function(wholeFruit) {
    return wholeFruit * 0.9;
}

juicerCounter = function(apples, oranges) {
    console.log(`Got ${apples}kg of apples and ${oranges}kg of oranges.`);
    const peeledApples = peelFruit(apples);
    const peeledOranges = peelFruit(oranges);
    console.log(`After peeling there is ${peeledApples}kg of apples and ${peeledOranges}kg of oranges.`);
    const appleJuicePerFruit = peeledApples * 0.5;
    const orangeJuicePerFruit = peeledOranges * 0.2;
    return `${appleJuicePerFruit + orangeJuicePerFruit}l of juice made from ${apples}kg apples and ${oranges}kg oranges.`;
}

console.log(juicerCounter(1, 4));


calcAvarage = (score1, score2, score3) => score1 + score2 + score3 / 3;

scoreDolphins = (score1, score2, score3) => calcAvarage(score1, score2, score3);
scoreKoalas = (score1, score2, score3) => calcAvarage(score1, score2, score3);

console.log(calcAvarage(1, 2, 3));