class Persons {
  // private _age: number | undefined;

  private checkUserAge(age: number) {
    if (age > 150 || age < 0) {
      throw new Error("The age must be between 0 and 150");
    }
    return age;
  }

  constructor(
    private _name: string,
    private email: string,
    private _age: number
  ) {
    this.checkUserAge(_age);
  }

  public set name(name: string) {
    this._name = name;
  }
  public get name(): string {
    return this._name;
  }

  // setter method for age
  // set method can only one parameter
  // we don't need to call set method like : object.age = 70
  public set age(age: number) {
    this.checkUserAge(age);
    this._age = age;
  }

  // because of this we can it like object.age
  // get method can't have parameters
  // we don't call get method, like object.age
  public get age(): number {
    if (this._age === undefined) {
      throw new Error("The age property has not been set yet");
    }
    return this._age;
  }
}

const john: Persons = new Persons("John", "john@example.com", 27);
// john.age = 15;

const mark: Persons = new Persons("Mark", "mark@example.com", 140);

console.log(john.name);
console.log(john.age);

console.log(mark);
