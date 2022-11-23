/*

`Interface are nothing else but contracts contract in the sense that they define in
advance how an object or a class structure is going to look once the object or the class
is created by the user and that's is`

TypeScript - Interfaces

Interface is a structure that defines the contract in your application.
It defines the syntax for classes to follow. Classes that are derived from an
interface must follow the structure provided by their interface.

The TypeScript compiler does not convert interface to JavaScript.
It uses interface for type checking. This is also known as "duck typing" or
"structural subtyping".

Interface in TypeScript can be used to define a type and also to
implement it in the class.


Interface as Function Type
TypeScript interface is also used to define a type of a function.
This ensures the function signature.

*/

// here interface is pretty similar to type
interface Person4 {
  name: string;
  email: string;
  age: number;
  phone?: number;
  greet?: () => void;
}

const person4: Person4 = {
  name: "John",
  email: "john@gmail.com",
  age: 40,
};

// Extending Interfaces using extends keyword
interface UserInterface {
  name: string;
  email: string;
  age: number;
  phone: number;
  gender: string;
}

interface UserWithAddress extends UserInterface {
  address: string;
}

const user4: UserInterface = {
  name: "John",
  email: "john@gmail.com",
  age: 40,
  phone: 343434,
  gender: "male",
};

const userWithAddress: UserWithAddress = {
  name: "John",
  email: "john@gmail.com",
  age: 40,
  phone: 343434,
  gender: "male",
  address: "Dhaka",
};

console.log(user4);

console.log(userWithAddress);

// The biggest advantage of using interfaces is that you can inherit from multiple interfaces.

enum UserRoles {
  admin = "admin",
  author = "author",
  editor = "editor",
}

interface Role {
  role: Roles;
}

enum PermissionsList {
  read = "read",
  write = "write",
  execute = "execute",
}

interface UserPermissions {
  permissions: PermissionsList;
}

// Inheriting From Multiple Interfaces
interface AdminUserInterface extends UserInterface, Role, UserPermissions {
  numberOfUsersReporting: number;
}

const rob: AdminUserInterface = {
  name: "John",
  email: "john@gmail.com",
  age: 40,
  phone: 343434,
  gender: "male",
  role: Roles.admin,
  permissions: PermissionsList.write,
  numberOfUsersReporting: 45,
};
