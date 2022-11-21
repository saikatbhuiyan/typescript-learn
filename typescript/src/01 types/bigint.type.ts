/*
A BigInt value, also sometimes just called a BigInt,
is a bigint primitive, created by appending n to the end of an integer literal,
or by calling the BigInt() function (without the new operator) and
giving it an integer value or string value.


BigInt is a built-in object that provides a way to represent whole numbers larger
than 2^53 - 1, which is the largest number JavaScript can reliably represent
with the Number primitive and represented by the Number.MAX_SAFE_INTEGER constant.
BigInt can be used for arbitrarily large integers.


Difference number vs bigint:

    BigInt cannot be used with methods in the built-in Math object and cannot be
    mixed with instances of Number in operations

    Because coercing between Number and BigInt can lead to loss of precision,
    it is recommended to only use BigInt when values greater than 2^53 are
    reasonably expected and not to coerce between the two types.

    BigInt is an integer, number is a decimal
*/

let bigInt1 = BigInt(945845);

// let bigInt2 = 123564564n; // es2020 feature

console.log(bigInt1);

const safeInt = Number.MAX_SAFE_INTEGER;

console.log(safeInt);

const safeIntPlusOne = safeInt + 1;
const safeIntPlusTwo = safeInt + 2;

console.log(safeIntPlusOne);
console.log(safeIntPlusTwo);

console.log(safeIntPlusOne === safeIntPlusTwo);

let a: bigint = BigInt(1234548);

// let b: bigint = 23456465n;

// let c: bigint = a - b;

// let e:bigint = 24551.2n;
// let f = Math.log(a);
