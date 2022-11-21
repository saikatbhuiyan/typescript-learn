/* What is Index Signature?
Index signature is used to represent the type of object/dictionary
when the values of the object are of consistent types.

Syntax: { [key: KeyType] : ValueType }

Assume that we have a theme object which allows us to configure the
color properties that can be used across the application.
The values will be consistent with the type string.
This makes a perfect opportunity **for us to **apply the index signature. */

type Airplane = {
  flightNumber: string;
  airplaneModel: string;
  dateOfDeparture: string;
  timeOfDeparture: string;
  from: string;
  to: string;
  seats: {
    [key: string]: string;
  };
  //   seats: {
  //     orderProperty: string;
  //     [key: string]: string;
  //   };
  //   seats: {
  //     [key: string | number]: string | number;
  //   };
};

const airPlane: Airplane = {
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
};
