/*
TypeScript Union Types

Union types are used when a value can be more than a single type.

Such as when a property would be string or number.

Union | (OR)
Using the | we are saying our parameter is a string or number:

Example
function printStatusCode(code: string | number) {
  console.log(`My status code is ${code}.`)
}
printStatusCode(404);
printStatusCode('404');


Union Type Errors
Note: you need to know what your type is when union types are being used to avoid type errors:

Example
function printStatusCode(code: string | number) {
  console.log(`My status code is ${code.toUpperCase()}.`) // error: Property 'toUpperCase' does not exist ontype 'string | number'.
  Property 'toUpperCase' does not exist on type 'number'
}
In our example we are having an issue invoking toUpperCase() as its a string method and number doesn't have access to it.
*/

type Dog = {
  name: string;
  barks: boolean;
  wags: boolean;
};

type Cat = {
  name: string;
  purrs: boolean;
};

type DogAndCatUnion = Cat | Dog;

let dog: DogAndCatUnion = {
  name: "Buddy",
  barks: true,
  wags: true,
};

let cat: DogAndCatUnion = {
  name: "Bella",
  purrs: true,
};

// In union object type can be dog or cat or both combined

let dogAndCat: DogAndCatUnion = {
  name: "Hybrid",
  barks: true,
  wags: false,
  purrs: true,
};

// union with primitive types

type stringOrNumber = string | number;

function printStatusCode(code: stringOrNumber) {
  console.log(`My status code is ${code}.`);
}
printStatusCode(404);
printStatusCode("404");

function addNumberOrString(a: stringOrNumber, b: stringOrNumber) {
  if (a === "number" && b === "number") {
    return a + b;
  } else {
    return a.toString() + b.toString();
  }
}

console.log(addNumberOrString(5, 10)); // 15
console.log(addNumberOrString("Mark", 10)); // Mark10
