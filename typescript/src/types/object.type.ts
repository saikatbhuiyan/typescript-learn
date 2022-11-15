/* TypeScript Object Types
TypeScript has a specific syntax for typing objects.

Object types like this can also be written separately, and even be reused. */

let person = {
  name: "John",
  age: 19,
};

// let car: {} = {};

let car: { color: string; brand: string } = {
  color: "red",
  brand: "bmw",
};

// Example with an optional property
const car1: { type: string; mileage?: number } = {
  // no error
  type: "Toyota",
};
car1.mileage = 2000;

let article: {
  author: string;
  content: string;
  title: string;
  image?: string;
};

article = {
  author: "Stella",
  content: "sayHi",
  title: "My first Article",
};
