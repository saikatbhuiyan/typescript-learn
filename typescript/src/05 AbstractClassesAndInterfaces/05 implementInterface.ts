enum AutomobileTypes2 {
  car = "car",
  bus = "bus",
  van = "van",
  truck = "truck",
  bike = "bike",
}

enum AutomobileBrands2 {
  ferrari = "ferrari",
  honda = "honda",
  bmw = "bmw",
  toyota = "toyota",
}

enum AutomobileColors2 {
  red = "red",
  blue = "blue",
  white = "white",
  black = "black",
  silver = "silver",
}

interface AutomobileInterface2<Type, Brand, Colors> {
  type: Type;
  brand: Brand;
  colors: Colors[];
  description: string;
}

// Using interfaces with classes
// Implementing Multiple Interfaces
// It is acting like a contract and will force the developer to follow the contract.
class Car2
  implements AutomobileInterface2<string, AutomobileBrands2, AutomobileColors2>
{
  public type: string = "car";

  constructor(
    public brand: AutomobileBrands2,
    public colors: AutomobileColors2[],
    public description: string
  ) {}
}

class Truck
  implements AutomobileInterface2<string, AutomobileBrands2, AutomobileColors2>
{
  public type: string = "truck";

  constructor(
    public brand: AutomobileBrands2,
    public colors: AutomobileColors2[],
    public description: string
  ) {}
}

const ferrari2: Car2 = new Car2(
  AutomobileBrands2.ferrari,
  [AutomobileColors2.black, AutomobileColors2.red],
  "This is a Ferrari"
);

const toyotaTruck: Truck = new Truck(
  AutomobileBrands2.toyota,
  [AutomobileColors2.black, AutomobileColors2.silver],
  "This is a Toyota Truck"
);

console.log(ferrari2);
console.log(toyotaTruck);

/*
  Interfaces can extends multiple interfaces.

  A class can implement as many interfaces as it wants to,
  but a class can only inherit one class at a time.

  Properties of the interface that classes implements cannot be private or protected.
*/
