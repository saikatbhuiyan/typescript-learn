/* TypeScript Tuples
Typed Arrays
A tuple is a typed array with a pre-defined length and types for each index.

Tuples are great because they allow each element in the array to be a known type of value.

To define a tuple, specify the type of each element in the array: */

// fistName, lastName, age

let personTuple: [string, string, number?];

personTuple = ["Java", "Script", 10];
personTuple = ["Java", "Script"];

// [
//     NumberOfStudent: Number,
//     passing: boolean,
//     'John', 'Smith'
// ]

type listOfStudents = [number, boolean, ...string[]];

const passingStudent: listOfStudents = [3, true, "John", "Smith", "Mark"];

let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, "Coding God was here"];
// We have no type safety in our tuple for indexes 3+
ourTuple.push("Something new and wrong");
console.log(ourTuple); // [ 5, false, 'Coding God was here', 'Something new and wrong' ]

// instead use our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [
  5,
  true,
  "The Real Coding God",
];

// throws error as it is readonly.
// ourReadonlyTuple.push("Coding God took a day off");
