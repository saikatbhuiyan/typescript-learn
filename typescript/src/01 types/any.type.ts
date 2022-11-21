/*
Type: any
    any is a type that disables type checking and effectively allows
    all types to be used.
*/

let lastName: any = "Khan";

lastName = 23; // that will not throw an error

lastName = [1, 2, 3, 4];

// Parameter 'number' implicitly has an 'any' type.
function multiByTwo1(number: any) {
  return number * 2;
}
