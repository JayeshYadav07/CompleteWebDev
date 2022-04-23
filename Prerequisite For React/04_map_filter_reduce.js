let arr = [1, 2, 3, 4, 5];

// map , filter and reduce a way to iterating an array without using for loop


// map function
let marr = arr.map(function (element) {
    return element + 1;
});
// console.log(marr);



// filter function
// Question using filter function filter the odd number from the arr and return

let farr = arr.filter(function (element) {
    return element%2 === 0 ;
})
// console.log(farr);



//reduce function
// Question using reduce function multiply the arr element and return

let rval = arr.reduce(function (accumulator, element) {
    return accumulator * element;

}, 1);

console.log(rval);