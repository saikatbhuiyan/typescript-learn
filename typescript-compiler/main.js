/*
this keyword =>
  this keyword is that it always refers to the object that is executing the
  current function.

we all know that all functions that are part of an object are called methods.
So if this keyword is being used by a method, then this keyword would always refer
to the object.That's the rule number one.And if this keyword is being used by a
normal function or a function that is not a part of an object, then this keyword
would refer to the global object that is the window object in case of browser and global
object in case of node. And that's our rule.

method -> object
function -> window, global

*/

const book = {
  title: "The Title",
  authors: ["John", "Mark", "Rob"],
  read() {
    console.log(this);
  },

  printAuthors() {
    this.authors.forEach(function (author) {
      /*We got an undefined because the this keyword over here is within the scope
      of this internal function that we passed to our for each loop.
      And this inner function refers the this keyword to the global scope. */
      // undefined - John
      // undefined - Mark
      // undefined - Rob
      console.log(this.title + " - " + author);
    });
    // Now there are two ways to solve this problem
    // One of the way is to define the value of this for our for each loop.
    this.authors.forEach(function (author) {
      console.log(this.title + " - " + author);
    }, this);

    // second way is arrow function
    this.authors.forEach((author) => {
      console.log(this.title + " - " + author);
    });
  },
};

book.printAuthors();

book.stopreading = function () {
  console.log(this);
};

book.stopreading();

function watchmovie() {
  //this keyword would refer to the global object
  console.log(this);
}

watchmovie();

console.log("-----Constructor----Constructor");

/*// Constructor Functions
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.points = 0;
  }

  login() {
    console.log(this.name, "He logged in");
  }

  logout() {
    console.log(this.name, "Has logged out");
  }

  addPoints() {
    this.points++;
    console.log("total points", this.points);
  }
}

const user = new User("John", "john@email.com");
const user2 = new User("Mark", "mark@email.com");

console.log(user);
user2.addPoints();
*/

// Javascript’s Own Constructor Function
function User(name, email) {
  this.name = name;
  this.email = email;
  this.points = 0;

  this.login = () => {
    console.log(this.name, "He logged in");
  };

  this.logout = () => {
    console.log(this.name, "Has logged out");
  };

  this.addPoint = () => {
    this.points++;
    console.log("total points", this.points);
  };
}

const user = new User("John", "john@gmail.com");

/*
So I'll expand the user object. You'll see that three methods are added to the
user object itself and not to the prototype of the user object.
If you remember when we created an instance of user using our class, all these
three methods that is add point login and log out were a part of the prototype
object and now only the constructor is a part of the prototype object.

But all these three methods now exist inside the user object and not inside
the prototype of the user object. And to understand this behavior and add our
methods to prototype of the user object, we will need to understand what prototypes
are and why classes add these methods to prototypes of the objects.
We are going to understand this by first understanding what is a prototype.
*/

console.log(user);

/* 
Understanding Prototypes:

Every object in JavaScript has a prototype property.
Just leaving aside the base object, we would not get into the details of the base object, but for
the sake of simplicity we would assume that every object in JavaScript has a prototype.


We can look at the console log of the user object here and we can see that it has a prototype object.

This prototype object further has a lot of methods inside it, and each method can also have its own
prototype object as well.

When it comes to inheritance and programming, there are two schools of thought.

One is the classic inheritance using classes and classes, and the other one is prototypical inheritance.

JavaScript uses the concept of prototypical inheritance. 

Simply put, prototypical inheritance refers to the ability to access object properties from another object. 
We use a JavaScript prototype to add new properties and methods to an existing object constructor. 
We can then essentially tell our JS code to inherit properties from a prototype. 
Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object 
to another through a reference pointer function.
*/

/* If we look at the user object, we know that the add point login and the logic method should be a part
of the prototype, considering that it needs to have the same structure as the user object that is created
by instantiating a class, we can simply add methods to the prototype of an object by accessing the
prototype property of the constructor.

Here is an important note that I'm accessing the prototype property on the prototype constructor function
and not the instance of the user that is created using the constructor function.

We can go ahead and remove these functions from our constructor function.

So now our user constructor function.

Just instantiate these three properties and nothing else.
Let's refresh our console and see the results.

Now you will see that the user object only has three properties and the methods have been added to the

prototype of the user object.

Now you see, we have completely replicated the kind of object that was generated by our class without

using the classes in JavaScript.

In fact, classes use prototypes behind the scenes for inheritance and not the other way around.

So you can basically assume the logic behind how class acts as a syntactic sugar.

So whenever a class is instantiated, it's first fires the constructor function.

The constructor function creates an empty object and adds all the properties to that particular object.

And that's the role of the constructor function.

The constructor function does not interfere with the methods of a class, and if you see the constructor
function over here, that's what it actually does.

It just takes the properties and adds them to the object that is created using the user constructor
function.

The methods are, however, added later on to the prototype of the user, and that's how even the classes
add these methods to the prototype of the user.

We have our prototype object in place and now let's understand how it helps us in inheritance.
 */

function UserP(name, email) {
  this.name = name;
  this.email = email;
  this.points = 0;
}

UserP.prototype.login = function () {
  console.log(this.name, "He logged in");
};

UserP.prototype.logout = function () {
  console.log(this.name, "Has logged out");
};

UserP.prototype.addPoint = function () {
  this.points++;
  console.log("total points", this.points);
};
const userP = new UserP("John", "john@gmail.com");

userP.addPoint();
userP.prototype.addPoint();

console.log(userP);

//
// Inheriting The User Prototypes
function AdminUser(name, email, peopleReporting) {
  UserP.apply(this, [name, email]);
  this.peopleReporting = peopleReporting;
}

AdminUser.prototype = Object.create(User.prototype);

AdminUser.prototype.updatePeopleReporting = function (newNumber) {
  this.peopleReporting = newNumber;
};

const admin = new AdminUser("Mark", "mark@email.com", 10);

console.log(admin);

/* 
Using the add point method on the user object.
So I will grab the user object here.
And I will invoke the add point method.
Let's refresh our console and see the result.
So we see a point was added to user successfully.
But one thing that you need to note over here is that I called the add point method directly on the
user instance, instead of calling it on the prototype of the user instance.
So I did not have to do something like this.
This is because of the way JavaScript treats prototypes when we invoke the method at point on the user object over here.
JavaScript first looks for the add point method within the user object itself.
When it does not find the add object method inside the user object, then it goes to the prototype property
of the user object and tries to find the add point method.

Here it is able to find add point method and it invokes the add point method.
You will see that the prototype chain is nested so prototypes can further have another prototype object
and JavaScript will keep looking for add point method till it does not find it.
You can see prototypes as separate objects that can be inherited by various constructor methods, so
prototype one can be inherited by user as well as the admin user, and hence helping us write all the
methods of prototype one just in one place and let various constructor methods inherit from prototype.
They want to how the various constructor methods can inherit from a prototype is what we are going to
look at in the next video.
But what is important to understand right now is that prototype is a separate object that can be inherited
by many constructor methods.
And the second takeaway is how JavaScript traverses to these prototype objects when it tries to find
the method that you are trying to call on an object. 
*/

//
//  Alternate Methods Of Creating Objects

// value -> The value of the property
// writable (boolean) -> whether this property in question is writable or not
// enumerable (boolean)  -> whether you can enumerate or loop through this property or not
// configurable (boolean) -> The configurable property tells whether the user has permission
//								           to change property descriptor such as to change the value of
//                           writable and enumerable settings.

const book = {
  title: "the title",
  pages: 300,
  author: "John",
};

console.log(Object.getOwnPropertyDescriptors(book));

const book = {
  title: "the title",
  pages: 300,
  author: "John",
};

const book2 = new Object();
book2.title = "Book2 title";
book2.pages = 250;
book2.author = "Mark";

console.log(book2);

//
// defineProperty Method
const book3 = new Object();

Object.defineProperty(book3, "title", {
  value: "This is the title of the book",
  writeable: true,
  enumerable: true,
  configurable: true,
});

Object.defineProperty(book3, "author", {
  value: "John",
  writeable: false,
  enumerable: true,
  configurable: true,
});

book3.author = "Mark"; // author will not update

console.log(book3);
