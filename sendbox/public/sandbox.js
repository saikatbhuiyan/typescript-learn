"use strict";
// Type Basics
let character = "mario";
let age = 30;
let isBlackBelt = false;
// character = 20;
character = "luigi";
// age = 'yoshi';
age = 40;
// isBlackBelt = 'yes';
isBlackBelt = true;
const circ = (diameter) => {
    return diameter * Math.PI;
};
// console.log(area('hello'));
console.log(circ(7.5));
// arrays
let names = ["luigi", "mario", "yoshi"];
names.push("toad");
// names.push(3);
// names[1] = 3;
let numbers = [10, 20, 12, 15];
numbers.push(25);
// numbers.push('shaun');
// numbers[0] = 'shaun';
let mixed = ["ken", 4, "chun-li", 8, 9];
mixed.push("ryu");
mixed.push(10);
mixed[0] = 3;
// objects
let ninja = {
    name: "mario",
    belt: "black",
    age: 30,
};
ninja.age = 40;
ninja.name = "ryu";
// ninja.age = '30';
// ninja.skills = ['fighting', 'sneaking']
ninja = {
    name: "yoshi",
    belt: "orange",
    age: 40,
    // skills: ['running'],
};
let character = "mario";
let age;
let isLoggedIn;
// age = 'luigi';
age = 30;
// isLoggedIn = 25;
isLoggedIn = true;
// arrays
let ninjas = [];
ninjas.push("ryu");
ninjas.push("chun-li");
console.log(ninjas);
// union types
let mixed = [];
mixed.push("hello");
mixed.push(false);
mixed.push(20);
console.log(mixed);
let uid;
// objects
let ninjaOne;
ninjaOne = { name: "yoshi", age: 30 };
let ninjaTwo;
ninjaTwo = { name: "ken", age: 20, beltColour: "black" };
// Dynamic (any) Types
let age = 25;
age = true;
console.log(age);
age = "hello";
console.log(age);
age = { name: "luigi" };
console.log(age);
let mixed = [];
mixed.push(5);
mixed.push("mario");
mixed.push(false);
console.log(mixed);
let ninja;
ninja = { name: "yoshi", age: 25 };
console.log(ninja);
ninja = { name: 25, age: "yoshi" };
console.log(ninja);
// Function Basics
// let greet: Function = () => {
//   console.log('hello, world');
// }
// greet = 'hello';
// greet = () => {
//   console.log('hello, again');
// }
const add = (a, b, c = /*?*/ 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10, "ninja");
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);
console.log(result);
// Function Signatures
// example 1
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === "add") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// example 3
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
const greet = (user) => {
    console.log("hello, again");
};
