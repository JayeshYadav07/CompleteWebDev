const plusBtn = document.querySelector(".plus");
const dialog = document.querySelector(".dialog");
const cross = document.querySelector(".cross");

plusBtn.addEventListener("click", function () {
  dialog.style.display = "flex";
});
function closeDialogBox() {
  dialog.style.display = "none";
  var boxContent = document.querySelector("#box-content");
  var boxTitle = document.querySelector("#title");
  boxContent.value = "";
  boxTitle.value = "";
}
cross.addEventListener("click", function () {
  closeDialogBox();
});
function addDelTktLogic() {
  var closeBtnArr = document.querySelectorAll(".icon.color-3");
  var minimizeIcons = document.querySelectorAll(".icon.color-1");

  function closeTicket(e) {
    var box = e.target.closest(".box");
    console.log(box);
    box.style.display = "none";
  }

  function minimize(e) {
    var box = e.target.closest(".box");
    console.log(box);
    if (box.querySelector("main").style.display !== "none") {
      box.querySelector("main").style.display = "none";
    } else {
      box.querySelector("main").style.display = "block";
    }
  }

  for (let index = 0; index < closeBtnArr.length; index++) {
    const closeBtn = closeBtnArr[index];
    closeBtn.addEventListener("click", closeTicket);
  }
  for (let index = 0; index < minimizeIcons.length; index++) {
    const closeBtn = minimizeIcons[index];
    closeBtn.addEventListener("click", minimize);
  }
}
function addTicket() {
  dialog.style.display = "none";
  var boxes = document.querySelector(".wrapper main");
  var puranaHTML = boxes.innerHTML;
  var boxContent = document.querySelector("#box-content");
  var boxTitle = document.querySelector("#title");
  boxes.innerHTML =
    puranaHTML +
    `
  <div class="box">
        <header>
            <div class="box-heading">${boxTitle.value}</div>
            <div class="icon color-1">-</div>
            <div class="icon color-2">E</div>
            <div class="icon color-3">x</div>
        </header>
        <main>
            <textarea rows="15">${boxContent.value}</textarea>
        </main>
    </div>
  `;
  closeDialogBox();
  addDelTktLogic();
}
function minimize() {
  const minBtn = document.querySelectorAll(".color-1");
}
