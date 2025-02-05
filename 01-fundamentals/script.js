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
    if (toRetirement > 0) {
        console.log(`${firstName} has ${toRetirement} years to retirement.`);
        return toRetirement;
    } else {
        console.log(`Retired since ${Math.abs(toRetirement)} years.`);
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
'use strict'
/*
CHALLENGE #1

Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!


Your tasks:

    Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

    Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

    Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

    Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

    Ignore draws this time. Instead, log No team wins... to the console if there is no winner.


TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.
*/


calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// scoreDolphins = (score1, score2, score3) => calcAverage(score1, score2, score3);
// scoreKoalas = (score1, score2, score3) => calcAverage(score1, score2, score3);

// avgDolphins = calcAverage(score1, score2, score3);
// avgKoalas = calcAverage(score1, score2, score3);

checkWinner = function(avgDolphins, avgKoalas) {
    if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win with ${avgKoalas}:${avgDolphins}!`);
        return 'Koalas'
    } else if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win with ${avgDolphins}:${avgKoalas}!`);
        return 'Dolphins'
    } else {
        console.log(`No team wins...`)
        return -1
    }
}

TEST_DATA1 = {
    "Dolphins": [44, 23, 71],
    "Koalas": [65, 54, 49]
} 

TEST_DATA2 = {
    "Dolphins": [85, 54, 41],
    "Koalas": [23, 34, 27]
}

console.log()
checkData1 = checkWinner(
    calcAverage(TEST_DATA1.Dolphins[0], TEST_DATA1.Dolphins[1], TEST_DATA1.Dolphins[2]), 
    calcAverage(TEST_DATA1.Koalas[0], TEST_DATA1.Koalas[1], TEST_DATA1.Koalas[2]));
console.log(checkData1)

checkData2 = checkWinner(
    calcAverage(TEST_DATA2.Dolphins[0], TEST_DATA2.Dolphins[1], TEST_DATA2.Dolphins[2]), 
    calcAverage(TEST_DATA2.Koalas[0], TEST_DATA2.Koalas[1], TEST_DATA2.Koalas[2]));
console.log(checkData2)

arr = ["a", "b", "c"]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

// for (let i = 0; i < TEST_DATA1.Dolphins.length &&
//     TEST_DATA1.Koalas.length &&
//     TEST_DATA2.Dolphins.length &&
//     TEST_DATA2.Koalas.length; i++) {
//         checkWinner()
//     }

testData = [
    {"Dolphins": [44, 23, 71], "Koalas": [65, 54, 49]},
    {"Dolphins": [85, 54, 41], "Koalas": [23, 34, 27]}
]

for (i = 0; i < testData.length; i++) {
    avgDolphins = calcAverage(...testData[i].Dolphins);
    avgKoalas = calcAverage(...testData[i].Koalas);
    console.log(`Test data ${i + 1}: Dolphins: ${avgDolphins}, Koalas: ${avgKoalas}`);
    checkWinner(avgDolphins, avgKoalas);
}
// arrays

/** 
 * @param {number} billValue
 * @return {number} 
*/
const calcTip = function(billValue) {
    if (50 <= billValue && billValue <= 300) {
        return billValue * 0.15; // + billValue;
    } else {
        return billValue * 0.2; // + billValue;
    }
}

console.log(calcTip(100));
console.log(calcTip(125));
console.log(calcTip(555));
console.log(calcTip(44));

const testBills = [125, 555, 44];
const tips = [calcTip(testBills[0]), calcTip(testBills[1]), calcTip(testBills[2])];
const totals = []

for (let i = 0; i < testBills.length; i++) {
    totals[i] = calcTip(testBills[i]) + testBills[i];
    console.log(totals[i]);
}
console.log(totals);
// add elem
totals.push(100);
console.log(totals);
totals.unshift(10);
console.log(totals);
// remove elem
const popped = totals.pop();
console.log(popped); // last
totals.shift();
console.log(popped); // first 

// index of elem
totals.indexOf(555); // returns index or -1 if its not in there
totals.includes(555); // returns boolean

const obj = {
    firstName: "Joe",
    lastName: "Care",
    phone: 786291092,
    height: 5.6,
    friends: ["Michael", "Bart", "Martha"],
    fullName: function(firstName, lastName) {
        return firstName + " " + lastName;
    } 
};
const keyName = "Name"
console.log(obj);
console.log(obj.phone);
console.log(obj["first" + keyName]); 

// const attr = prompt("Which attribute to print in console?");
// if (obj[attr]) {
//     console.log(obj[attr]);
// } else {
//     console.log("Wrong key name.");
// }

obj.weigth = 66.6;
console.log(obj);
console.log(`${obj.firstName} has ${obj.friends.length} friends and his best friend is ${obj.friends.pop()}.`);

obj["skill"] = function() {
    console.log("I can dance");
}
// obj.fullName = function() {
//     return this.firstName + this.lastName;
// }

console.log(obj.skill());
console.log(obj.fullName());