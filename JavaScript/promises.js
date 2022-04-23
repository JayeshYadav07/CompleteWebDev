function dos(val) {
  return new Promise((resolve, reject) => {
    if (val == 1) {
      setTimeout(function () {
        resolve("I am setTimeout");
      }, 5000);
    } else {
      reject("I am error");
    }
  });
}

/*
"I Promise a Result!"
"Producing code" is code that can take some time
"Consuming code" is code that must wait for the result
A Promise is a JavaScript object that links producing code and consuming code 
*/
dos(1)
  .then((ele) => {
    console.log(ele);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("I Promise");

/*
"async and await make promises easier to write"
async makes a function return a Promise
await makes a function wait for a Promise
*/

const callMe = async () => {
  let ans = await dos(1);
  console.log(ans);
};
callMe();
