/*
In object-oriented programming, a class is a blueprint for creating objects.
A class defines the initial values various properties and methods of an object.

Constructor
The constructor is a special type of method which is called when creating an object.
In TypeScript, the constructor method is always defined with the name "constructor".
*/

let personObj = {
  name: "John",
  email: "john@example.com",
  greet: () => console.log(`Hello ${personObj.name}`),
};

class PersonClass {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  greet() {
    return `Hello ${this.name}`;
  }
}

const personInstance1 = new PersonClass("John", "john@example.com"); // create object for the person class
const personInstance2 = new PersonClass("Mark", "mark@example.com"); // create object for the person class

console.log(personInstance1);
console.log(personInstance1.greet());
