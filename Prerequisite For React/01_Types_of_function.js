//Normal functio syntax 

function funNames()    //function Declaration
{
    console.log("I am the body of the function");
}
funNames()   // Invoking the function


console.log("\n------------------------------------------------\n");

//Types of Function

// 1 : IIFE (Imediately Invoking Function Expression)

// (function(){
//     console.log("I am the IIFF function")
//     console.log("I run Without calling the function")
// })();


// 2 :- fuction expression(pass a function to the variable)

let passFun = ()=>{
    console.log("I am the function passed to the variable");
}
passFun() // Invoking the varable as a function


//3 :- pass a funtion as a arguments


function add(a,b)
{
    return a+b;
}
function cal(opration,a,b)   // opration is a function that is called as callback function
{
    let output = opration(a,b);
    console.log(output)
}
cal(add,10,23);

//4 :- return a function (high order function)
function highOrderFunction()
{
    return ()=>{
        console.log("I am the returning the function")
    }
}
let temp = highOrderFunction();
temp();


// 5:- arrow function
let arrowFun = ()=>{
    console.log("I am the Arrow function")
}

arrowFun();