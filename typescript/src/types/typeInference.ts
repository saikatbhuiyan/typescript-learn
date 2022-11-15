/*
type inference?
Type inference is the ability to automatically deduce,
either partially or fully, the type of an expression at
compile time. The compiler is often able to infer the type
of a variable or the type signature of a function, without
explicit type annotations having been given.

In TypeScript, there are several places where type inference is used to provide
type information when there is no explicit type annotation.
For example, in this code

let x = 3;

let x: number
*/

let x = 3;
let firstName = "John";

// Type 'number' is not assignable to type 'string'
// firstName = 45

// not using type inference
let lastName1: string;

let finalResult: number;

function addNumber(a: number, b: number) {
  return a + b;
}

finalResult = addNumber(10, 30);
