/*
TypeScript Data Type - Boolean
Boolean values are supported by both JavaScript and TypeScript
and stored as true/false values.


TypeScript Boolean:

let isPresent:boolean = true;

Note that, the boolean Boolean is different from the lower case boolean type.
The upper case Boolean is an object type whereas lower case boolean is a
primitive type. It is recommended to use the primitive type boolean in your code, because, while JavaScript coerces an object to its primitive type, the TypeScript type system does not. TypeScript treats it like an object type.

So, instead of using upper case function checkExistence(b: Boolean),
use the lower case function checkExistence(b: boolean) boolean type.
*/

let booleanValue: boolean = true;

// Literal values
booleanValue = false;

// expression of true or false
booleanValue = typeof "abc" === "string";
booleanValue = 1 > 0;
