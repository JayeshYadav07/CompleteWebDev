/*
What are Callbacks in JavaScript?
When you nest a function inside another function as an argument, that's called a callback.

Why do we use callbacks?
When doing a complex task, we break that task down into smaller steps. To help us establish a relationship between these steps according to time (optional) and order, we use callbacks.
*/

function uno() {
  console.log("I am uno");
}
function dos() {
  setTimeout(function () {
    console.log("I am setTimeout");
  }, 5000);
}

function tres() {
  console.log("I am tres");
}

uno();
dos();
tres();

// Output
// I am uno
// I am tres
// I am setTimeout
