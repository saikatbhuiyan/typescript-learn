/*
Intersection Types

An intersection type creates a new type by combining multiple existing types.
The new type has all features of the existing types.

To combine types, you use the & operator as follows:

type typeAB = typeA & typeB;
Code language: TypeScript (typescript)
The typeAB will have all properties from both typeA and typeB.

Note that the union type uses the | operator that defines a variable which can hold a value of either typeA or typeB

let varName = typeA | typeB; // union type
*/

interface BusinessPartner {
  name: string;
  credit: number;
}

interface Identity {
  id: number;
  name: string;
}

interface Contact {
  email: string;
  phone: string;
}

type Employee = Identity & Contact;
type Customer = BusinessPartner & Contact;

let e: Employee = {
  id: 100,
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "(408)-897-5684",
};

let c: Customer = {
  name: "ABC Inc.",
  credit: 1000000,
  email: "sales@abcinc.com",
  phone: "(408)-897-5735",
};

type Employee2 = Identity & BusinessPartner & Contact;

let e2: Employee2 = {
  id: 100,
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "(408)-897-5684",
  credit: 1000,
};

/* Type Order
  When you intersect types, the order of the types doesn’t matter. For example:
  In this example, typeAB and typeBA have the same properties.

  type typeAB = typeA & typeB;
  type typeBA = typeB & typeA;

  */
