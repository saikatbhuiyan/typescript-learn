/*
compare interfaces and types::

-> The first advantage of using types over interfaces is that types provide us with
    the ability to create union types as well as intersection types.

-> Another use case for using types is if you want to declare tuples,
    tuples can be declared using type keywords. However, tuples cannot be declared using interfaces.


Now let's have a look at things that we can do with interfaces and what makes them different from type

-> One of the major differences is that TypeScript automatically merges two interfaces with the same name,
    but that does not happen in case of types.
-> The second major difference is that interfaces can extend each other, whereas types cannot.
-> Also, implementation of multiple interfaces is possible when you use them in conjunction with classes,
    so the person interface can here be called as a class as well.
*/

type User4 = {
  name: string;
};

type AdminUser4 = {
  isAdmin: boolean;
};

/* interface cannot do */

// Intersection Type
const userAndAdmin: User4 & AdminUser4 = {
  name: "John",
  isAdmin: false,
};

// Union Type
const userOrBothAdmin: User4 | AdminUser4 = {
  name: "John",
};

// Tuples
type ResponseTuple = [string, number];

/* type cannot do */

// Duplicate identifier 'User4'
// type User4 = {
//   email: string;
// };

interface Person3 {
  name: string;
}

interface Person3 {
  email: string;
}

// merge two instances

const person3: Person3 = {
  name: "John",
  email: "john@example.com",
};

interface Name {
  name: string;
}

interface Email {
  email: string;
}

interface Person5 extends Name, Email {}

const person5: Person5 = {
  name: "John",
  email: "john@example.com",
};

class Person6 implements Name, Email {
  constructor(public name: string, public email: string) {}
}

const person6: Person6 = new Person6("John", "john@example.com");
