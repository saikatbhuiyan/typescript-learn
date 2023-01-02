// Multiple Decorators And Returning Values from Class Decorators

/* 
function DecoratorOne(target: Function) {
  console.log("Decorator One");
}

function DecoratorTwo(target: Function) {
  console.log("Decorator Two");
}

@DecoratorTwo
@DecoratorOne
class Person5 {
  constructor(public name: string, public age: number) {}
}

Decorator One
Decorator Two 


@DecoratorOne
@DecoratorTwo
class Person5 {
  constructor(public name: string, public age: number) {}
}
Decorator Two 
Decorator One
*/

interface MapLocation {
  lat: number;
  long: number;
}

function AddLocation(lat: number, long: number) {
  return <T extends { new (...args: any[]): {} }>(classConstructor: T) => {
    return class extends classConstructor {
      public mapLocation: MapLocation;
      constructor(...args: any[]) {
        super(...args);
        this.mapLocation = { lat, long };
      }
    };
  };
}

@AddLocation(1.234, 1.876)
class Person10 {
  constructor(public name: string, public age: number) {}
}

const person10: Person10 = new Person10("John", 32);

console.log(person10);
