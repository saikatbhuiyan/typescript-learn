// void type
// any function that not return any value can be assigned a type of void

const addNumbers = (): void => {
  console.log("addNumbers");
};

addNumbers();

// never type
// whenever type is assigned to a function that never completes

const throwNewError = (): never => {
  throw new Error("Your program has failed");
};

throwNewError();

// difference between void and never is that void doesn't return any value but can perform any other procedure unlike the never type it does complete
