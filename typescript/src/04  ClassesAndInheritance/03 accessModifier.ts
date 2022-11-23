/*
You can use TypeScript to control whether certain methods or
properties are visible to code outside the class.

public
The default visibility of class members is public.
A public member can be accessed anywhere.

protected
protected members are only visible to subclasses of the class they’re declared in.

private
private is like protected, but doesn’t allow access to the member even from subclasses.


*/

class PersonInfos {
  private name: string;
  public email: string;
  protected age: number;

  constructor(name: string, email: string, age: number = 22) {
    this.name = name;
    this.email = email;
    this.age = age;
  }
  public getName() {
    return this.name;
  }
  greet() {
    return `Hello ${this.name}`;
  }
}

class AdminProfile extends PersonInfos {
  public returnName() {
    // return this.name; //Property 'name' is private and only accessible within class 'PersonInfos'
    return this.getName();
  }

  public returnAge() {
    return this.age;
  }
}

const personInfos = new PersonInfos("John", "john@example.com");
personInfos.email = "web@example.com";
console.log(personInfos.email); // web@example.com

const adminProfile = new AdminProfile("John", "john@example.com");

console.log(personInfos);

console.log(adminProfile);
// here we can see name because JS by didn't support access modifier `{name: 'John', email: 'john@example.com'}`
// but we can't access adminProfile.name
// console.log(adminProfile.name); // Property 'name' is private and only accessible within class 'PersonInfos'
console.log(adminProfile.returnAge()); // 22
console.log(adminProfile.email);

//  Shorthand For Initial Properties
// It's same as the PersonInfo initial
class PersonInfosShorthand {
  constructor(
    private name: string,
    public email: string,
    protected age: number = 22
  ) {}

  public getName(): string {
    return this.name;
  }
}
