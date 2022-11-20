/*
TypeScript Generics

Generics allow creating 'type variables' which can be used to create classes,
functions & type aliases that don't need to explicitly define the types that
they use.

Generics makes it easier to write reusable code.
*/

// type Filter = {
//   (array: number[], predicate: (item: number) => boolean): number[];
//   (array: string[], predicate: (item: string) => boolean): string[];
//   (array: object[], predicate: (item: object) => boolean): object[];
// };

// function filter(array: any[], predicate: Function) {
//   let result = [];

//   for (let i = 0; i < array.length; i++) {
//     let item = array[i];
//     if (predicate(item)) {
//       result.push(item);
//     }
//   }

//   return result;
// }

/*  Generics */
/* type Filter = {
  <T>(array: T[], predicate: (item: T) => boolean): T[]; // can be used anything instead of T
}; */

/* type Filter<T> = {
  (array: T[], predicate: (item: T) => boolean): T[];
}; */

type Filter = <T>(array: T[], predicate: (item: T) => boolean) => T[];

const filter: Filter = (array, predicate) => {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (predicate(item)) {
      result.push(item);
    }
  }

  return result;
};

let numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function greaterThanSeven(item: number) {
  return item > 7;
}

console.log(filter(numbersList, greaterThanSeven));

let animals = ["cat", "dog", "rat", "lion"];

function filterCats(item: string) {
  return item === "cat";
}

console.log(filter(animals, filterCats));

// Implement map function

// type MapType = <T, U>(array: T[], func: (item: T) => U) => U[];
type MapType = {
  <T, U>(array: T[], predicate: (item: T) => U): U[]; // can be used anything instead of T
};

const map = <T, U>(array: T[], func: (item: T) => U) => {
  if (array.length === 0) return array;

  let result = [];

  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    const newItem = func(item);
    result.push(newItem);
  }

  return result;
};

function square(item: number) {
  return item.toString();
}

console.log(map(numbersList, square));

function concat(item: string) {
  return "animal" + item;
}

console.log(map(animals, concat));

// @ts-ignore
