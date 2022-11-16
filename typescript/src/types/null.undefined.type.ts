/*
JavaScript have two primitive types that represent the absence of something.
Now one of them is null and the other one is undefined.

Undefined  means that something that has not been defined as yet,
and Null is sometimes that JavaScript has not been able to compute and ran into an error.
*/

let user: string;

// console.log(user); // undefined

// there is no id called save
let saveButton = document.getElementById("save");

console.log(saveButton); // null

let loggedInUsername: string;

const users = [
  { name: "Abby", age: 12 },
  { name: "Abby1", age: 32 },
];

const logInUser = users.find((user) => user.name === loggedInUsername);

// Object is possibly 'undefined'
// console.log(logInUser.age);

let saveButton1: HTMLElement = document.getElementById("save")!; // this exclamation point mark tells typescript that we developer know that this statement will definitely return and element.
let saveButton2: HTMLElement | null = document.getElementById("save");

if (saveButton2 !== null) {
  // do something
}
