let a1: number[] = [1, 2, 3];

let b: Array<string> = ["a", "b", "c"];

let c1: (string | number)[] = ["a", "b", "c", 1, 2];

type Airplane1 = {
  flightNumber: string;
  airplaneModel: string;
  dateOfDeparture: string;
  timeOfDeparture: string;
  from: string;
  to: string;
  seats: {
    [key: string]: string;
  };
};

type Airplanes = Airplane1[];

const airplanes: Airplanes = [
  {
    flightNumber: "SG102",
    airplaneModel: "A380",
    dateOfDeparture: "01/12/2022",
    timeOfDeparture: "00:00:00",
    from: "JFK",
    to: "DCA",
    seats: {
      "10A": "Mark Thomas",
      "10B": "John Smith",
    },
  },
  {
    flightNumber: "SG102",
    airplaneModel: "A381",
    dateOfDeparture: "01/12/2022",
    timeOfDeparture: "00:00:00",
    from: "JFK",
    to: "DCA",
    seats: {
      "10A": "Mark Thomas",
      "10B": "John Smith",
    },
  },
];

// readonly array

let numbers: readonly number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Property 'push' does not exist on type 'readonly number[]
// numbers.push(10);

type readOnlyPerson = readonly [string, string, number];

const person1: readOnlyPerson = ["John", "Smith", 32];

// Cannot assign to '0' because it is a read-only property.
// person1[0] = "John";

type a = Readonly<string[]>;

type tuple = Readonly<[string, string, number]>;
