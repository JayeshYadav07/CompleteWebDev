/*
----------------------------------------------------------------

// Function Declaration:-

    function Function_Name() { 
        console.log("I am a function");
    }
    Function_Name(); // calling a function
    console.log(typeof Function_Name());  //Function

----------------------------------------------------------------

// Function Expressions:-

A JavaScript function can also be defined using an expression.
A function expression can be stored in a variable:

Example
    const x = function (a, b) {return a * b};   

After a function expression has been stored in a variable, the variable can be used as a function:

Example
    const x = function (a, b) {return a * b};
    let z = x(4, 3);

----------------------------------------------------------------

// Function Hoisting:-

Earlier in this tutorial, you learned about "hoisting" (JavaScript Hoisting).

Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.

Hoisting applies to variable declarations and to function declarations.

Because of this, JavaScript functions can be called before they are declared:

    myFunction(5);

    function myFunction(y) {
    return y * y;
    }

Functions defined using an expression are not hoisted.

----------------------------------------------------------------

// Self-Invoking Functions:-

Function expressions can be made "self-invoking".

A self-invoking expression is invoked (started) automatically, without being called.

Function expressions will execute automatically if the expression is followed by ().

You cannot self-invoke a function declaration.

You have to add parentheses around the function to indicate that it is a function expression:

Example
    (function () {
    let x = "Hello!!";  // I will invoke myself
    })();

The function above is actually an anonymous self-invoking function (function without name).

----------------------------------------------------------------

// Functions Can Be Used as Values:-

JavaScript functions can be used as values:

Example
    function myFunction(a, b) {
    return a * b;
    }

    let x = myFunction(4, 3);   
JavaScript functions can be used in expressions:

Example
    function myFunction(a, b) {
    return a * b;
    }

    let x = myFunction(4, 3) * 2;   

----------------------------------------------------------------

// Functions are Objects:-

The typeof operator in JavaScript returns "function" for functions.

But, JavaScript functions can best be described as objects.

JavaScript functions have both properties and methods.

The arguments.length property returns the number of arguments received when the function was invoked:

Example
    function myFunction(a, b) {
    return arguments.length;
    }
The toString() method returns the function as a string:

Example
    function myFunction(a, b) {
    return a * b;
    }

let text = myFunction.toString();
A function defined as the property of an object, is called a method to the object.
A function designed to create new objects, is called an object constructor.

----------------------------------------------------------------

// Arrow Functions:-

Arrow functions allows a short syntax for writing function expressions.

You don't need the function keyword, the return keyword, and the curly brackets.

Example
ES5
    var x = function(x, y) {
    return x * y;
    }

ES6
    const x = (x, y) => x * y;  
Arrow functions do not have their own this. They are not well suited for defining object methods.

----------------------------------------------------------------

Arrow functions are not hoisted. They must be defined before they are used.

Using const is safer than using var, because a function expression is always constant value.

You can only omit the return keyword and the curly brackets if the function is a single statement. Because of this, it might be a good habit to always keep them:

Example
    const x = (x, y) => { return x * y };
Arrow functions are not supported in IE11 or earlier.
----------------------------------------------------------------
*/

// Examples :-

// 1)Function expression :-

const fun1 = function (x, y) {
  return x + y;
};
console.log(fun1(1, 2));

// Callback functions:-
// example 1
function myFunction() {
  console.log("My function is called");
}
function fun(func) {
  func();
}
fun(myFunction);

// Best example
function addition(x, y) {
  return x + y;
}
function multiplication(x, y) {
  return x * y;
}
function division(x, y) {
  return x / y;
}

function callculator(x, y, callback) {
  console.log(callback(x, y));
}

callculator(1, 2, addition);
callculator(1, 2, multiplication);
callculator(1, 2, division);
