// Types by Inference

// let helloWorld = "Hello World";
let helloWorld: string;

// Defining Types

// const user = {
//   name: "Hayes",
//   id: 0,
// };

interface User {
  name: string;
  id: number;
}

const userProfile: User = {
  name: "Hayes",
  id: 0,
};

console.log(userProfile);

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: User = new UserAccount("Murphy", 1);

function getAdminUser(): User {
  // "A function whose declared type is neither 'void' nor 'any' must return a value";
  return userProfile;
}

function deleteUser(user: User) {}

// Composing Types
// With TypeScript, you can create complex types by combining simple ones. There are two popular ways to do so: with unions, and with generics.

  // Unions
  // With a union, you can declare that a type could be one of many types. For example, you can describe a boolean type as being either true or false:

type MyBool = true | false;
// Try
// Note: If you hover over MyBool above, you’ll see that it is classed as boolean. That’s a property of the Structural Type System. More on this below.

// A popular use-case for union types is to describe the set of string or number literals that a value is allowed to be:

type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
Try
Unions provide a way to handle different types too. For example, you may have a function that takes an array or a string:

function getLength(obj: string | string[]) {
  return obj.length;
}
// Try
// To learn the type of a variable, use typeof:

// Type	Predicate
string	typeof s === "string"
number	typeof n === "number"
boolean	typeof b === "boolean"
undefined	typeof undefined === "undefined"
function	typeof f === "function"
array	Array.isArray(a)
For example, you can make a function return different values depending on whether it is passed a string or an array:

function wrapInArray(obj: string | string[]) {
  if (typeof obj === "string") {
    return [obj];
            
(parameter) obj: string
  }
  return obj;
}
// Try
// Generics
// Generics provide variables to types. A common example is an array. An array without generics could contain anything. An array with generics can describe the values that the array contains.

type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;
// You can declare your own types that use generics:

interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}
 
// This line is a shortcut to tell TypeScript there is a
// constant called `backpack`, and to not worry about where it came from.
declare const backpack: Backpack<string>;
 
// object is a string, because we declared it above as the variable part of Backpack.
const object = backpack.get();
 
// Since the backpack variable is a string, you can't pass a number to the add function.
backpack.add(23);
// Argument of type 'number' is not assignable to parameter of type 'string'.
// Try
// Structural Type System
// One of TypeScript’s core principles is that type checking focuses on the shape that values have. This is sometimes called “duck typing” or “structural typing”.

// In a structural type system, if two objects have the same shape, they are considered to be of the same type.

interface Point {
  x: number;
  y: number;
}
 
function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}
 
// logs "12, 26"
const point = { x: 12, y: 26 };
logPoint(point);
// Try
// The point variable is never declared to be a Point type. However, TypeScript compares the shape of point to the shape of Point in the type-check. They have the same shape, so the code passes.

// The shape-matching only requires a subset of the object’s fields to match.

const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3); // logs "12, 26"
 
const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect); // logs "33, 3"
 
const color = { hex: "#187ABF" };
logPoint(color);
// Argument of type '{ hex: string; }' is not assignable to parameter of type 'Point'.
//   Type '{ hex: string; }' is missing the following properties from type 'Point': x, y
// Try
// There is no difference between how classes and objects conform to shapes:

class VirtualPoint {
  x: number;
  y: number;
 
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
 
const newVPoint = new VirtualPoint(13, 56);
logPoint(newVPoint); // logs "13, 56"
// Try
// If the object or class has all the required properties, TypeScript will say they match, regardless of the implementation details.

// Next Steps
// This was a brief overview of the syntax and tools used in everyday TypeScript. From here, you can:









// At times, there might be a need to store a collection of values of varied types. Arrays will not serve this purpose. TypeScript gives us a data type called tuple that helps to achieve such a purpose.

// It represents a heterogeneous collection of values. In other words, tuples enable storing multiple fields of different types. Tuples can also be passed as parameters to functions.

// Syntax
var tuple_name = [value1,value2,value3,…value n]
For Example
var mytuple = [10,"Hello"];
You can also declare an empty tuple in Typescript and choose to initialize it later.

var mytuple = []; 
mytuple[0] = 120 
mytuple[1] = 234
// Accessing values in Tuples
// Tuple values are individually called items. Tuples are index based. This means that items in a tuple can be accessed using their corresponding numeric index. Tuple item’s index starts from zero and extends up to n-1(where n is the tuple’s size).

// Syntax
// tuple_name[index]
// Example: Simple Tuple
var mytuple = [10,"Hello"]; //create a  tuple 
console.log(mytuple[0]) 
console.log(mytuple[1])
// In the above example, a tuple, mytuple, is declared. The tuple contains values of numeric and string types respectively.

// On compiling, it will generate the same code in JavaScript.

// Its output is as follows −

// 10 
// Hello
// Example: Empty Tuple
var tup = [] 
tup[0] = 12 
tup[1] = 23 

console.log(tup[0]) 
console.log(tup[1])
// On compiling, it will generate the same code in JavaScript.

// Its output is as follows −

// 12 
// 23 
// Tuple Operations
// Tuples in TypeScript supports various operations like pushing a new item, removing an item from the tuple, etc.

// Example
var mytuple = [10,"Hello","World","typeScript"]; 
console.log("Items before push "+mytuple.length)    // returns the tuple size 

mytuple.push(12)                                    // append value to the tuple 
console.log("Items after push "+mytuple.length) 
console.log("Items before pop "+mytuple.length) 
console.log(mytuple.pop()+" popped from the tuple") // removes and returns the last item
  
console.log("Items after pop "+mytuple.length)
// The push() appends an item to the tuple

// The pop() removes and returns the last value in the tuple

// On compiling, it will generate the same code in JavaScript.

// The output of the above code is as follows −

// Items before push 4 
// Items after push 5 
// Items before pop 5 
// 12 popped from the tuple 
// Items after pop 4
// Updating Tuples
// Tuples are mutable which means you can update or change the values of tuple elements.

// Example
var mytuple = [10,"Hello","World","typeScript"]; //create a  tuple 
console.log("Tuple value at index 0 "+mytuple[0]) 

//update a tuple element 
mytuple[0] = 121     
console.log("Tuple value at index 0 changed to   "+mytuple[0])
// On compiling, it will generate the same code in JavaScript.

// The output of the above code is as follows −

// Tuple value at index 0 10 
// Tuple value at index 0 changed to 121
// Destructuring a Tuple
// Destructuring refers to breaking up the structure of an entity. TypeScript supports destructuring when used in the context of a tuple.

// Example
var a =[10,"hello"] 
var [b,c] = a 
console.log( b )    
console.log( c ) 
// On compiling, it will generate following JavaScript code.

//Generated by typescript 1.8.10
var a = [10, "hello"];
var b = a[0], c = a[1];
console.log(b);
console.log(c);
// Its output is as follows −

// 10 
// hello 



TypeScript - Union


// TypeScript 1.4 gives programs the ability to combine one or two types. Union types are a powerful way to express a value that can be one of the several types. Two or more data types are combined using the pipe symbol (|) to denote a Union Type. In other words, a union type is written as a sequence of types separated by vertical bars.

// Syntax: Union literal
// Type1|Type2|Type3 
// Example: Union Type Variable
var val:string|number 
val = 12 
console.log("numeric value of val "+val) 
val = "This is a string" 
console.log("string value of val "+val)
// In the above example, the variable’s type is union. It means that the variable can contain either a number or a string as its value.

// On compiling, it will generate following JavaScript code.

//Generated by typescript 1.8.10
var val;
val = 12;
console.log("numeric value of val " + val);
val = "This is a string";
console.log("string value of val " + val);
// Its output is as follows −

// numeric value of val  12 
// string value of val this is a string 
// Example: Union Type and function parameter
function disp(name:string|string[]) { 
   if(typeof name == "string") { 
      console.log(name) 
   } else { 
      var i; 
      
      for(i = 0;i<name.length;i++) { 
         console.log(name[i])
      } 
   } 
} 
disp("mark") 
console.log("Printing names array....") 
disp(["Mark","Tom","Mary","John"])
// The function disp() can accept argument either of the type string or a string array.

// On compiling, it will generate following JavaScript code.

//Generated by typescript 1.8.10
function disp(name) {
   if (typeof name == "string") {
      console.log(name);
   } else {
      var i;
      for (i = 0; i < name.length; i++) {
         console.log(name[i]);
      }
   }
}

disp("mark");
console.log("Printing names array....");
disp(["Mark", "Tom", "Mary", "John"]);
// The output is as follows −

// Mark 
// Printing names array…. 
// Mark 
// Tom
// Mary
// John 
// Union Type and Arrays
// Union types can also be applied to arrays, properties and interfaces. The following illustrates the use of union type with an array.

// Example: Union Type and Array
var arr:number[]|string[]; 
var i:number; 
arr = [1,2,4] 
console.log("**numeric array**")  

for(i = 0;i<arr.length;i++) { 
   console.log(arr[i]) 
}  

arr = ["Mumbai","Pune","Delhi"] 
console.log("**string array**")  

for(i = 0;i<arr.length;i++) { 
   console.log(arr[i]) 
} 
// The program declares an array. The array can represent either a numeric collection or a string collection.

// On compiling, it will generate following JavaScript code.

//Generated by typescript 1.8.10
var arr;
var i;
arr = [1, 2, 4];
console.log("**numeric array**");

for (i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
arr = ["Mumbai", "Pune", "Delhi"];
console.log("**string array**");

for (i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
// Its output is as follows −

// **numeric array** 
// 1 
// 2 
// 4 
// **string array** 
// Mumbai 
// Pune 
// Delhi



An interface is a syntactical contract that an entity should conform to. In other words, an interface defines the syntax that any entity must adhere to.

Interfaces define properties, methods, and events, which are the members of the interface. Interfaces contain only the declaration of the members. It is the responsibility of the deriving class to define the members. It often helps in providing a standard structure that the deriving classes would follow.

Let’s consider an object −

var person = { 
   FirstName:"Tom", 
   LastName:"Hanks", 
   sayHi: ()=>{ return "Hi"} 
};
If we consider the signature of the object, it could be −

{ 
   FirstName:string, 
   LastName:string, 
   sayHi()=>string 
}
To reuse the signature across objects we can define it as an interface.

Declaring Interfaces
The interface keyword is used to declare an interface. Here is the syntax to declare an interface −

Syntax
interface interface_name { 
}
Example: Interface and Objects
interface IPerson { 
   firstName:string, 
   lastName:string, 
   sayHi: ()=>string 
} 

var customer:IPerson = { 
   firstName:"Tom",
   lastName:"Hanks", 
   sayHi: ():string =>{return "Hi there"} 
} 

console.log("Customer Object ") 
console.log(customer.firstName) 
console.log(customer.lastName) 
console.log(customer.sayHi())  

var employee:IPerson = { 
   firstName:"Jim",
   lastName:"Blakes", 
   sayHi: ():string =>{return "Hello!!!"} 
} 
  
console.log("Employee  Object ") 
console.log(employee.firstName);
console.log(employee.lastName);
The example defines an interface. The customer object is of the type IPerson. Hence, it will now be binding on the object to define all properties as specified by the interface.

Another object with following signature, is still considered as IPerson because that object is treated by its size or signature.

On compiling, it will generate following JavaScript code.

//Generated by typescript 1.8.10
var customer = { firstName: "Tom", lastName: "Hanks",
   sayHi: function () { return "Hi there"; }
};
console.log("Customer Object ");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());
var employee = { firstName: "Jim", lastName: "Blakes",
   sayHi: function () { return "Hello!!!"; } };

console.log("Employee  Object ");
console.log(employee.firstName);
console.log(employee.lastName);
The output of the above example code is as follows −

Customer object 
Tom 
Hanks 
Hi there 
Employee  object 
Jim  
Blakes 
Hello!!!
Interfaces are not to be converted to JavaScript. It’s just part of TypeScript. If you see the screen shot of TS Playground tool there is no java script emitted when you declare an interface unlike a class. So interfaces have zero runtime JavaScript impact.

Interface and Objects
Union Type and Interface
The following example shows the use of Union Type and Interface −

interface RunOptions { 
   program:string; 
   commandline:string[]|string|(()=>string); 
} 

//commandline as string 
var options:RunOptions = {program:"test1",commandline:"Hello"}; 
console.log(options.commandline)  

//commandline as a string array 
options = {program:"test1",commandline:["Hello","World"]}; 
console.log(options.commandline[0]); 
console.log(options.commandline[1]);  

//commandline as a function expression 
options = {program:"test1",commandline:()=>{return "**Hello World**";}}; 

var fn:any = options.commandline; 
console.log(fn());
On compiling, it will generate following JavaScript code.

//Generated by typescript 1.8.10
//commandline as string
var options = { program: "test1", commandline: "Hello" };
console.log(options.commandline);

//commandline as a string array
options = { program: "test1", commandline: ["Hello", "World"] };
console.log(options.commandline[0]);
console.log(options.commandline[1]);

//commandline as a function expression
options = { program: "test1", commandline: function () { return "**Hello World**"; } };
var fn = options.commandline;
console.log(fn());
Its output is as follows −

Hello 
Hello 
World 
**Hello World**
Interfaces and Arrays
Interface can define both the kind of key an array uses and the type of entry it contains. Index can be of type string or type number.

Example
interface namelist { 
   [index:number]:string 
} 

var list2:namelist = ["John",1,"Bran"] //Error. 1 is not type string  
interface ages { 
   [index:string]:number 
} 

var agelist:ages; 
agelist["John"] = 15   // Ok 
agelist[2] = "nine"   // Error
Interfaces and Inheritance
An interface can be extended by other interfaces. In other words, an interface can inherit from other interface. Typescript allows an interface to inherit from multiple interfaces.

Use the extends keyword to implement inheritance among interfaces.

Syntax: Single Interface Inheritance
Child_interface_name extends super_interface_name
Syntax: Multiple Interface Inheritance
Child_interface_name extends super_interface1_name, 
super_interface2_name,…,super_interfaceN_name
Example: Simple Interface Inheritance
interface Person { 
   age:number 
} 

interface Musician extends Person { 
   instrument:string 
} 

var drummer = <Musician>{}; 
drummer.age = 27 
drummer.instrument = "Drums" 
console.log("Age:  "+drummer.age) console.log("Instrument:  "+drummer.instrument)
On compiling, it will generate following JavaScript code.

//Generated by typescript 1.8.10
var drummer = {};
drummer.age = 27;
drummer.instrument = "Drums";
console.log("Age:  " + drummer.age);
console.log("Instrument:  " + drummer.instrument);
Its output is as follows −

Age: 27 
Instrument: Drums 
Example: Multiple Interface Inheritance
interface IParent1 { 
   v1:number 
} 

interface IParent2 { 
   v2:number 
} 

interface Child extends IParent1, IParent2 { } 
var Iobj:Child = { v1:12, v2:23} 
console.log("value 1: "+this.v1+" value 2: "+this.v2)
The object Iobj is of the type interface leaf. The interface leaf by the virtue of inheritance now has two attributes- v1 and v2 respectively. Hence, the object Iobj must now contain these attributes.

On compiling, it will generate following JavaScript code.

//Generated by typescript 1.8.10
var Iobj = { v1: 12, v2: 23 };
console.log("value 1: " + this.v1 + " value 2: " + this.v2);
The output of the above code is as follows −

value 1: 12   value 2: 23