// let arr = [
//   "panoply",
//   "ray",
//   "bedight",
//   "disarray",
//   "attire",
//   "fig",
//   "equip",
//   "battalion",
//   "matrix",
//   "vest",
//   "habit",
//   "Rank",
//   "phalanx",
//   "address",
//   "garb",
//   "outray",
//   "embattle",
//   "dight",
//   "vector",
//   "marshal",
//   "order",
//   "deck",
//   "parade",
//   "busk",
//   "trim",
//   "squadron",
//   "apparel",
//   "draw",
//   "battery",
//   "harness",
//   "weaponry",
//   "robe",
//   "dress",
//   "rainbow",
//   "battle",
//   "gimmickry",
//   "range",
//   "accoutre",
//   "cell",
//   "radio",
//   "column",
//   "beam",
//   "arrayed",
//   "index",
//   "arraying",
//   "claymore",
//   "march",
//   "invest",
//   "battalia",
//   "subscript",
//   "rearray",
//   "tiff",
//   "tire",
// ];

// // this will return a random string from array
// function random() {
//   let size = arr.length;
//   let ran = Math.floor(Math.random() * size);
//   return arr[ran];
// }

// const wordBox = document.querySelector(".type-word");
// const CorrectList = document.querySelector(".correct-text-list");
// const WrongList = document.querySelector(".wrong-text-list");
// const inputWord = document.querySelector("#input-word");

// wordBox.innerText = random();

// let posY = 0;
// let rCounter = 0;
// let wCounter = 0;
// let Fun = () => {
//   if (rCounter == 10) {
//     alert("You win");
//     WrongList.innerHTML = "";
//     CorrectList.innerHTML = "";
//     rCounter = 0;
//   } else if (wCounter == 10) {
//     alert("You lose");
//     WrongList.innerHTML = "";
//     CorrectList.innerHTML = "";
//     wCounter = 0;
//   } else {
//     if (posY >= 610) {
//       WrongList.innerHTML += `<div class="correct-item">${wordBox.innerText}</div>`;
//       inputWord.value = "";
//       posY = 0;
//       wordBox.innerText = random();
//       wCounter++;
//     } else {
//       inputWord.addEventListener("keypress", function (e) {
//         if (e.key == "Enter") {
//           if (inputWord.value == wordBox.innerText) {
//             CorrectList.innerHTML += `<div class="correct-item">${inputWord.value}</div>`;
//             inputWord.value = "";
//             posY = 0;
//             wordBox.innerText = random();
//             rCounter++;
//           }
//         }
//       });
//       posY = posY + 2;
//       wordBox.style.top = `${posY}px`;
//     }
//   }

//   requestAnimationFrame(Fun);
// };

// Fun();
