// Implementing Multiple Interfaces

enum AutomobileTypes3 {
  car = "car",
  bus = "bus",
  van = "van",
  truck = "truck",
  bike = "bike",
}

enum AutomobileBrands3 {
  ferrari = "ferrari",
  honda = "honda",
  bmw = "bmw",
  toyota = "toyota",
}

enum AutomobileColors3 {
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

interface CommercialVehicle {
  capacity: string;
  licenseRenewalDate: Date;
}

class Truck2
  implements
    AutomobileInterface2<string, AutomobileBrands3, AutomobileColors3>,
    CommercialVehicle
{
  public type: string = "truck";

  constructor(
    public brand: AutomobileBrands3,
    public colors: AutomobileColors3[],
    public description: string,
    public capacity: string,
    public licenseRenewalDate: Date
  ) {}
}

const toyotaTruck2: Truck2 = new Truck2(
  AutomobileBrands3.toyota,
  [AutomobileColors3.black, AutomobileColors3.silver],
  "This is a Toyota Truck",
  "15 Tonners",
  new Date()
);

console.log(toyotaTruck2);
