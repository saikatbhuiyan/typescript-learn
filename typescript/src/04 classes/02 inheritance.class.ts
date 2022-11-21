/*

Inheritance
Inheritance
Just like object-oriented languages such as Java and C#, TypeScript classes can be extended to create new classes with inheritance, using the keyword extends
*/

class User {
  name: string;
  email: string;
  age: number;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;
  }
}

class AdminUser extends User {
  isAdmin: boolean = true;
  usersReporting: number;

  constructor(
    name: string,
    email: string,
    age: number,
    usersReporting: number
  ) {
    super(name, email, age);
    this.usersReporting = usersReporting;
  }
}

const userInstance: User = new User("John", "john@example.com", 27);

const adminInstance: AdminUser = new AdminUser(
  "Mark",
  "mark@example.com",
  25,
  5
);

console.log(adminInstance);
