/*

Abstract Classes

Everything about Abstract classes and how are they different from normal classes
along with example of inheritance and their use with child classes.

An abstract method or abstract field is one that hasn’t had an implementation provided.
These members must exist inside an abstract class, which cannot be directly
instantiated.

The role of abstract classes is to serve as a base class for subclasses which do
implement all the abstract members. When a class doesn’t have any abstract members,
it is said to be concrete.


*/

type Holidays = {
  date: Date;
  reason: string;
}[];

abstract class Department {
  protected abstract holidays: Holidays;
  //   default constructor is public
  protected constructor(protected name: string) {}

  //   Shared methods in Abstract Classes
  public addHolidays(holidays: Holidays) {
    if (Array.isArray(holidays)) {
      for (const holiday of holidays) {
        this.holidays.push(holiday);
      }
    }
  }

  //   public printHolidays() {
  //     if (this.holidays.length === 0) {
  //       return console.log("There are no holidays");
  //     }
  //     console.log("Here is the list of holidays");
  //     this.holidays.forEach(
  //       (holiday: { date: Date; reason: string }, index: number) => {
  //         console.log(`${index + 1}. ${holiday.date}, ${holiday.reason}`);
  //       }
  //     );
  //   }

  public abstract printHolidays(): void;
}

class ItDepartment extends Department {
  protected holidays: Holidays = [];

  constructor() {
    super("It Department");
  }

  //   Method Overriding In Child Class
  public printHolidays() {
    if (this.holidays.length === 0) {
      return console.log("There are no holidays");
    }
    console.log(`Here is the list of holidays ${this.name}`);
    this.holidays.forEach(
      (holiday: { date: Date; reason: string }, index: number) => {
        console.log(`${index + 1}. ${holiday.date}, ${holiday.reason}`);
      }
    );
  }
}

class AdminDepartment extends Department {
  protected holidays: Holidays = [];

  constructor() {
    super("Admin Department");
  }

  //   Method Overriding In Child Class
  public printHolidays() {
    if (this.holidays.length === 0) {
      return console.log("There are no holidays");
    }
    console.log(`Here is the list of holidays ${this.name}`);
    this.holidays.forEach(
      (holiday: { date: Date; reason: string }, index: number) => {
        console.log(`${index + 1}. ${holiday.date}, ${holiday.reason}`);
      }
    );
  }
}

const itHolidays: Holidays = [
  {
    date: new Date(2022, 12, 1),
    reason: "It Department Day",
  },
  {
    date: new Date(2022, 12, 16),
    reason: "Victory Day",
  },
];

const adminHolidays: Holidays = [
  {
    date: new Date(2022, 11, 1),
    reason: "Admin Department Day",
  },
  {
    date: new Date(2023, 3, 26),
    reason: "Independence Day",
  },
];

const itDepartment: ItDepartment = new ItDepartment();
const adminDepartment: AdminDepartment = new AdminDepartment();

itDepartment.addHolidays(itHolidays);
adminDepartment.addHolidays(adminHolidays);

console.log(itDepartment);
console.log(adminDepartment);

itDepartment.printHolidays();
adminDepartment.printHolidays();
