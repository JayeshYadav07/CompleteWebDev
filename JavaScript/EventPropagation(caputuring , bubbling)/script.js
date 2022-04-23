// event propagation -> determine in which order the event elements receive the event(Bubble and Capture)


//default behaviour is bubble -> target event to window event
//bubble -> event bubble form the target event and goes all the way up to window event

const start = document.querySelector("#start");
const parent = document.querySelector("#parent");
const grandparent = document.querySelector("#grandparent");
start.addEventListener("click", () => {
  alert("start clicked");
});
parent.addEventListener("click", () => {
  alert("parent clicked");
});
grandparent.addEventListener("click", () => {
  alert("grandparent clicked");
});
document.addEventListener("click", () => {
  alert("document clicked");
});
window.addEventListener("click", () => {
  alert("window clicked");
});

/*
addEventListener takes a third argument, which is to set the useCapture option. Is that’s set to true, then events will occur in the capturing phase instead of the bubbling phase, which is the default.
For example, if we have the following code:
 */

//capturing -> events start from window then goew down all thw way to child elements until it reaches the target element

// const start = document.querySelector("#start");
// const parent = document.querySelector("#parent");
// const grandparent = document.querySelector("#grandparent");
// start.addEventListener(
//   "click",
//   () => {
//     alert("start clicked");
//   },
//   true
// );
// parent.addEventListener(
//   "click",
//   () => {
//     alert("parent clicked");
//   },
//   true
// );
// grandparent.addEventListener(
//   "click",
//   () => {
//     alert("grandparent clicked");
//   },
//   true
// );
// document.addEventListener(
//   "click",
//   () => {
//     alert("document clicked");
//   },
//   true
// );
// window.addEventListener(
//   "click",
//   () => {
//     alert("window clicked");
//   },
//   true
// );
