/*
//👉👉👉let and var
/// let has a block scope ({} => block scope) let can not be redefine again  && Cannot access before initialization

function temp() {
    let a = 10;
    {
        let a = 20;
        console.log(a)   //10
    }
    console.log(a)  //20
}
/// var has a function scope (function(){} => finction scope) var can easily redefine again
function temp1() {
    var a = 10;
    {
        var a = 20;
        console.log(a) //20
    }
    console.log(a)  //20
}
temp1();

*/

/*

//👉👉👉arrow function

let fun = (n) => {
    return n*n;
}
console.log(fun(2))

let fun = (n) =>n*n;
console.log(fun(2))

let fun = n => n * n;
console.log(fun(2));

*/


/*

// 👉👉👉Import and Export

// if more then export then use this method
// import * as bundle from "./ImportFun.js";

// bundle.obj.fun()

//If we want to export only single then use this

import { obj } from "./ImportFun.js";
console.log(obj);
*/

/*

//👉👉👉Class and Object

class Human{
    populatoinOfHuman = 100;
    constructor(n)    // use for initilization
    {
        this.name = n;
    }
    printFun() {
        console.log(this.name);
        console.log(this.populatoinOfHuman);
    }
}
let obj = new Human("jayesh")   // creation of object of type Human
obj.printFun();

*/

/*

//👉👉👉Inheritence

class car {
    wheels = 4;
    sheet = 2;
    type = "Sport Car";
    constructor(carName, carColor) {
        this.carName = carName;
        this.carColor = carColor;
    }
    printInfo() {
        console.log(`The name of car is ${this.carName}. It has a ${this.wheels} wheels and ${this.sheet} sheet and the color of car is ${this.carColor}`)
    }
}
class Audi extends car {
    // The Audi class access all the properties and methods of a class car
}

let obj = new Audi("Audi", "Black");
obj.printInfo();

*/


//👉👉👉spread and rest operator (...)  it use to shallow copy of array and objects

// 👉👉👉spread in array
/*

let arr = [1, 2, 3, 4, 5]

//...arr copy all element of itself into nArr
let nArr = [...arr, 6];   // 1 2 3 4 5 6
let nArr = [0,...arr];   // 0 1 2 3 4 5
console.log(nArr)

*/

// 👉👉👉spread in object

/*

let obj = {
    a: 10,
    print() {
        console.log(a);
    }
}

let nObj = {
    ...obj,
    method() {
        console.log(a);
    }
}

console.log(nObj)

*/


//👉👉👉Rest operator :- Same as spread but when it comes in function  it called as rest operator, Use for accept n number of arguments

// function rest(...arr) {
//     let sum = arr.reduce(function (accumulator, n) {
//         return accumulator + n;
//     }, 0);
//     console.log(sum)
// }
// rest(1, 2, 3, 4 ,5);


//👉👉👉Destructuring

//👉👉👉Array Destructuring  :- Use for accessing value without dot(.) and [](array) operator  and store into diffrent variable at a same time

// let arr = ["Audi", "Honda", "BMW"];
// [car1, car2, car3 , car4 = "Jaguar"] = arr;  // Audi Honda BMW Jaguar

// [car1, , car3 , car4 = "Jaguar"] = arr;  //Audi BMW Jaguar

//👉👉👉 Object Destructuring

let obj = {
    myName: "jayesh",
    print() {
        console.log(myName);
    }
}