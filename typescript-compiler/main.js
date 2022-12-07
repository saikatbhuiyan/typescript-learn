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
