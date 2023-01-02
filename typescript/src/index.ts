/*
 *
 * A Decorator is a special kind of declaration that can be
 * attached to a class declaration, method, accessor,
 * property, or parameter. Decorators use the form
 * @expression, where expression must evaluate to a
 * function that will be called at runtime with
 * information about the decorated declaration.
 * */

// function FirstDecorator(constructor: Function) {
//     console.log("Decorator Invoked");
//     console.log(constructor);

// }

// Decorator Factories
function FirstDecorator(name: string) {
  return function (constructor: Function) {
    console.log(`${name} Invoked`);
    console.log(constructor);
  };
}

// @FirstDecorator
@FirstDecorator("First Decorator")
class Aircraft {
  constructor(public _aircraftModel: string, private pilot: string) {
    console.log("Aircraft Class Instantiated");
  }

  public pilotName() {
    console.log(this.pilot);
  }

  public get aircraftModel() {
    return this._aircraftModel;
  }
}

const aircraft = new Aircraft("Airbus A380", "saikat");

/* 
Decorator Invoked
index.ts:27 class Aircraft {
    constructor(_aircraftModel, pilot){
        this._aircraftModel = _aircraftModel;
        this.pilot = pilot;
        console.log("Aircraft Class Instantiated");
    }
    pilotName() …
index.ts:34 Aircraft Class Instantiated 
*/

/* Since we have enabled experimental decorators in our config file, we can now write our first decorator.
Decorators are nothing but functions.
We will write a decorator that can be applied to a class.
So for the purpose of writing our decorators, I have this aircraft class over here.


You'll see that the first letter of this function is a capital letter, and that's the standard practice
or the standard practice for decorators.


But for now, since we are applying this decorator to a class, in case of a class, the decorator needs
to get one argument, which is the constructor function of the class.
So to our decorator function we can add a target.

Parameter and set it as a dipole function, because in case of class decorators, we get constructor
functions.


So the moment our first decorator is invoked as a decorator function.
It's automatically going to get the constructor function of this particular class as an argument passed
to it.
I can name this anything.
I can name this as constructor as well.

Now let's refresh our console and print the value of decorator invoked and the constructor function.

Now you will see that we get decorator invoked and then we get the entire class.

Actually, the constructor function, because now we know that classes are just syntactic sugar or constructor
functions.
 */

/* 
You'll notice that the decorator function was invoked before the class was instantiated.
And this happened at the time when the class is defined by TypeScript at runtime.
And then we can see that the class was instantiated and the message from the constructor function of
the class was printed to the console.
So two important things to take away from this video.

The first one is that decorators are fired once throughout the lifecycle of the application and only
once and the decorators are invoked at the time.

The class is defined at the runtime and not when the class is instantiated. 
*/

/* ------------------ */

enum Manufacturers {
  boeing = "boeing",
  airbus = "airbus",
}

interface AircraftInterface {
  _aircraftModel: string;
  prototype?: any;
  origin?: string;
  manufacturer?: string;
  type?: string;
  airbusMethod?: () => void;
  boeingMethod?: () => void;
}

function AircraftManufacturer(manufacturer: Manufacturers) {
  return (target: Function) => {
    if (manufacturer === Manufacturers.airbus) {
      target.prototype.origin = "United States Of America";
      target.prototype.manufacturer = Manufacturers.airbus;
      target.prototype.type = "Jet";
      target.prototype.airbusMethod = () => {
        console.log("Function performed by airbus");
      };
    } else {
      target.prototype.origin = "France";
      target.prototype.manufacturer = Manufacturers.boeing;
      target.prototype.type = "Helicopter";
      target.prototype.boeingMethod = () => {
        console.log("Function performed by boeing");
      };
    }
  };
}

@AircraftManufacturer(Manufacturers.airbus)
class Airplane2 implements AircraftInterface {
  constructor(public _aircraftModel: string, private pilot: string) {
    console.log("Aircraft Class Instantiated");
  }

  public pilotName() {
    console.log(this.pilot);
  }

  public get aircraftModel() {
    return this._aircraftModel;
  }
}

const airplane: AircraftInterface = new Airplane2("Airbus A380", "John");

// prototypical inheritance
console.log(airplane.manufacturer);

airplane.airbusMethod
  ? airplane.airbusMethod()
  : console.log("Method Does not Exist");
