/* 
let a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20

// Stage 4(finished) proposal
({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}
*/

/* Array distructuring

let arr = [10, 20, 30, 40];
// let [a , b, c , d] = arr; // a = 10, b = 20, c = 30 , d = 40
// let [a, b, , c] = arr;  // a = 10 , b = 20, c = 40
// let [a, b,...c] = arr; // a = 10, b = 20, c = [ 30, 40]
let [a, b, c, d, e] = arr; //10 20 30 40 undefined

*/

/* Object Distructuring


*/

let obj = {
    name: "jayesh",
    rollNo: 12,
    address: {
        chawl: "ganesh",
        pincode: 400080
    }
}
// console.log(obj)

// varible name is the same name as in obj
// let { name } = obj;  //name = "jayesh";

// diffrent varible name (myName)
// let { name: myName } = obj; // myName = jayesh

let { name, rollNo, address: { chawl: mahesh } } = obj;
console.log(name, rollNo, mahesh);  