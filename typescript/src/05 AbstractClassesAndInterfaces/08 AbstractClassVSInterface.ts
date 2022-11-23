/*
Abstract classes and interfaces seem to be similar to each other,
and in many ways they are similar.


-> Abstract Classes can have implementation of methods within them that can be
    inherited by classes, whereas interfaces can only have call signature and cannot
    have actual implementation of methods inside them.

-> Classes can implement multiple interfaces, but classes can inherit from only
    one parent class and not multiple classes.

-> Abstract classes can contain static methods as well, whereas interfaces cannot
    contain static methods.
*/

/* abstract class */

abstract class Person7 {
  public abstract name: string;
  public abstract email: string;
  public abstract phone: number;

  public greeting() {
    console.log(`Hello ${this.name}`);
  }

  public static nameClass() {
    return "Class name is Person";
  }
}

class RegisterPerson7 extends Person7 {
  constructor(public name: string, public email: string, public phone: number) {
    super();
  }
}

const person7: RegisterPerson7 = new RegisterPerson7(
  "John",
  "john@example.com",
  54345545
);

person7.greeting();
console.log(Person7.nameClass());

/* Interface */

interface User7 {
  name: string;
  email: string;
  phone: number;
  // greeting: () => void;
}

interface Greeting {
  greeting: () => void;
}

class RegisterUser7 implements User7, Greeting {
  constructor(
    public name: string,
    public email: string,
    public phone: number
  ) {}

  public greeting() {
    console.log(`Hello ${this.name}`);
  }
}
