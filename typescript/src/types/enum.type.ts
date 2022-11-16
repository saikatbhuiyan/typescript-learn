/* TypeScript Enums
An enum is a special "class" that represents a group of constants (unchangeable variables).

Enums come in two flavors string and numeric. Lets start with numeric.

Numeric Enums - Default
By default, enums will initialize the first value to 0 and add 1 to each additional value: */

// enum Roles {
//   admin = 0,
//   author = 1,
//   editor = 2,
// }

enum Roles {
  admin = "admin",
  author = "author",
  editor = "editor",
}

type Person = {
  name: string;
  email: string;
  password: string;
  role: Roles;
};

const person2: Person = {
  name: "John",
  email: "john@gmail.com",
  password: "password",
  role: Roles.editor,
};

console.log(person2);
