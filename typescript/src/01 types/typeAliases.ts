/* TypeScript Type Aliases
TypeScript allows types to be defined separately from the variables that use them.

Aliases and Interfaces allows types to be easily shared between different variables/objects.

Type Aliases
Type Aliases allow defining types with a custom name (an Alias).

Type Aliases can be used for primitives like string or more complex types such as objects and arrays: */

type CarYear = number;
type CarType = string;
type CarModel = string;
type Car = {
  year: CarYear;
  type: CarType;
  model: CarModel;
};

const carYear: CarYear = 2001;
const carType: CarType = "Toyota";
const carModel: CarModel = "Corolla";

const car2: Car = {
  year: carYear,
  type: carType,
  model: carModel,
};

type Article = {
  author: string;
  content: string;
  title: string;
  image?: string;
};

let article1: Article = {
  author: "Stella",
  content: "sayHi",
  title: "My first Article",
};

let post: Article = {
  author: "Stella",
  content: "sayHi",
  title: "My first Article",
};
