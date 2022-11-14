/*
TypeScript Data Type - Number
Just like JavaScript, TypeScript supports number data type. All numbers are stored as floating point numbers.
These numbers can be Decimal (base 10), Hexadecimal (base 16) or Octal (base 8).
*/

let number: number = 100;

number = 28.7;

number = -300;

number = Infinity * 0.01;

number = parseInt("12");

// Type 'string' is not assignable to type
// number = "123";

let first: number = 123; // number
let second: number = 0x37cf; // hexadecimal
let third: number = 0o377; // octal
let fourth: number = 0b111001; // binary

console.log(first); // 123
console.log(second); // 14287
console.log(third); // 255
console.log(fourth); // 57
