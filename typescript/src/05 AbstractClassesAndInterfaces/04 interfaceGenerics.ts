enum AutomobileTypes {
  car = "car",
  bus = "bus",
  van = "van",
  truck = "truck",
  bike = "bike",
}

enum AutomobileBrands {
  ferrari = "ferrari",
  honda = "honda",
  bmw = "bmw",
  toyota = "toyota",
}

enum AutomobileColors {
  red = "red",
  blue = "blue",
  white = "white",
  black = "black",
  silver = "silver",
}

// Assigning Generics To Interface
// Using Multiple Types as Generics
interface AutomobileInterface<Type, Brand, Colors> {
  type: Type;
  brand: Brand;
  colors: Colors[];
  description: string;
}

const ferrari: AutomobileInterface<
  AutomobileTypes,
  AutomobileBrands,
  AutomobileColors
> = {
  type: AutomobileTypes.car,
  brand: AutomobileBrands.ferrari,
  colors: [AutomobileColors.black, AutomobileColors.red],
  description: "This is a Ferrari",
};

const honda: AutomobileInterface<string, string, string> = {
  type: "car",
  brand: "Honda",
  colors: ["silver", "red"],
  description: "This is a Honda",
};

const toyota: AutomobileInterface<string, AutomobileBrands, number> = {
  type: "car",
  brand: AutomobileBrands.toyota,
  colors: [6676, 97897],
  description: "This is a Toyota",
};

console.log(ferrari);
console.log(honda);
console.log(toyota);
