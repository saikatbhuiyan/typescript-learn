function intro(name: string, age: number): string {
  return `My name is ${name} and age is ${age}`;
}

const intro2 = function intro(name: string, age: number): string {
  return `My name is ${name} and age is ${age}`;
};

const intro3 = (name: string, age: number): string => {
  return `My name is ${name} and age is ${age}`;
};

// optional parameter
// country is optional parameter
function intro4(name: string, age: number, country?: string): string {
  if (country) {
    return `My name is ${name} and age is ${age} I live in ${country}`;
  }

  return `My name is ${name} and age is ${age}`;
}

console.log(intro4("John", 32));
console.log(intro4("John", 32, "Bangladesh"));

// Custom parameters and return types

enum AgeUnit {
  years = "years",
  months = "months",
}

type PersonInfo = {
  name: string;
  age: number;
  ageUnit: AgeUnit;
  country: string;
};

const personInfo: PersonInfo = {
  name: "John",
  age: 22.5,
  ageUnit: AgeUnit.years,
  country: "Bangladesh",
};

function convertAgeToMonth(person: PersonInfo): PersonInfo {
  person.age = person.age * 12;
  person.ageUnit = AgeUnit.months;
  return person;
}

console.log(convertAgeToMonth(personInfo));

// custom function call signature

type greetingFunction = (greeting: string, ageUnit: AgeUnit) => string;

type PersonInfo1 = {
  name: string;
  age: number;
  ageUnit: AgeUnit;
  country: string;
  //   greet: (greeting: string, ageUnit: AgeUnit) => string; // function call signature
  greet: greetingFunction;
};

const personInfo1: PersonInfo1 = {
  name: "John Wicks",
  age: 24.5,
  ageUnit: AgeUnit.years,
  country: "Bangladesh",
  greet: (greeting: string) => {
    return `${greeting} ${personInfo1.name}`;
  },
};

function convertAgeToMonth1(person: PersonInfo1): PersonInfo1 {
  person.age = person.age * 12;
  person.ageUnit = AgeUnit.months;
  return person;
}

console.log(convertAgeToMonth(personInfo1));

// Intro to Function Overloading

type Reservation = {
  departureDate: Date;
  returnDate?: Date;
  departingFrom: string;
  destination: string;
};

// type Reserve = (
//   departureDate: Date,
//   returnDate: Date,
//   departingFrom: string,
//   destination: string
// ) => Reservation;

// multiple call signature
// since we have to call in a single type, TypeScript knows that this function can be called multiple ways and might different values
// Using Same Function With Different Params
type Reserve = {
  (
    departureDate: Date,
    returnDate: Date,
    departingFrom: string,
    destination: string
  ): Reservation | never;
  (departureDate: Date, departingFrom: string, destination: string):
    | Reservation
    | never;
};

const reserve: Reserve = (
  departureDate: Date,
  returnDateOrDepartingFrom: Date | string,
  departingFromOrDestination: string,
  destination?: string
) => {
  if (returnDateOrDepartingFrom instanceof Date && destination) {
    return {
      departureDate: departureDate,
      returnDate: returnDateOrDepartingFrom,
      departingFrom: departingFromOrDestination,
      destination: destination,
    };
  } else if (typeof returnDateOrDepartingFrom === "string") {
    return {
      departureDate: departureDate,
      departingFrom: returnDateOrDepartingFrom,
      destination: departingFromOrDestination,
    };
  }

  throw new Error("Please provide all required parameters");
};

console.log(reserve(new Date(), new Date(), "New York", "Washington"));
console.log(reserve(new Date(), "New York", "Washington"));
