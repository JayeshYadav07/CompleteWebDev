// array in js is a collection of different data types.

// Craeting an array in javascript :-

let arr = [1, "jayesh", true, null, 2];
let arr1 = [];
let arr2 = new Array(1, "jayesh", true, null);

// console.log(arr);
// console.log(arr1);
// console.log(arr2);

// Iterating an array in javascript :-

// for (var i = 0; i < arr.length; i++) {
//     console.log(typeof arr[i]);
//     console.log(arr[i]);
// }

arr.push("Add to last ");
arr.unshift("Add to First ");
console.log(arr);

console.log("------------------------------------------------------");

arr.pop(); //"romove from last "
arr.shift(); //"romove from First "
console.log(arr);

console.log("------------------------------------------------------");

let copyOfArray = arr.slice(0, 2); // create a copy of the array
console.log(copyOfArray);
console.log(arr);

console.log("------------------------------------------------------");

arr.splice(2, 2); // delete the element from the array. start form first idx and delete number of second idx.
console.log(arr);

console.log("------------------------------------------------------");

//index of

console.log(arr.indexOf("jayesh"));

// arr.reverse();
arr.sort();
console.log(arr);
console.log(arr.includes("Yadav"));

for (const key in arr) {
  console.log(key);
}

for (const value of arr) {
  console.log(value);
}
