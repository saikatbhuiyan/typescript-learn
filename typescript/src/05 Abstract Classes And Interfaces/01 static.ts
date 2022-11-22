/*
Static properties and Abstract Classes

Static properties

What are static properties of a class along with real world examples of static
properties you already use in JavaScript

static members are those members of a class which can be accessed
without instantiating a class.

static properties or methods can be used wherever you do not need to instantiate
the class before accessing its properties and methods




Abstract Classes

Everything about Abstract classes and how are they different from normal classes
along with example of inheritance and their use with child classes.

An abstract method or abstract field is one that hasn’t had an implementation provided. These members must exist inside an abstract class, which cannot be directly instantiated.

The role of abstract classes is to serve as a base class for subclasses which do
implement all the abstract members. When a class doesn’t have any abstract members,
it is said to be concrete.


*/

class Automobile {
  public static color: string = "red";

  public name: string = "Automobile";

  public static calculateMileage(miles: number, litres: number): number {
    return miles / litres;
  }
}

console.log(Automobile.color);
console.log(Automobile.name);
console.log(Automobile.calculateMileage(50, 7));

// real example is Math class
console.log(Math.PI);
