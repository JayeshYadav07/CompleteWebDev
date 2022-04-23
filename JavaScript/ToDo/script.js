const closeBtn = document.getElementById("close");
const addBtn = document.getElementById("add");
const dialogBox = document.querySelector(".dialog-box");
const main = document.querySelector("main");
const title = document.getElementById("title");
const todo__text = document.getElementById("todo__text");
const error = document.querySelector(".error");

// get the todos from local storage and display them
let data = JSON.parse(localStorage.getItem("todos")) || [];
for (let i = 0; i < data.length; i++) {
  let todoText = `<div class="content" todo-id=${i}>
  <div class="box">
  <div class="box-heading">${data[i].title}</div>
  <div class="btn-container">
  <button>X</button>
  </div>
  </div>
  <textarea>${data[i].text}</textarea>
  </div>`;
  main.innerHTML += todoText;
  deletelisteners();
}
let counter = data.length;

addBtn.addEventListener("click", function () {
  dialogBox.style.display = "flex";
  error.style.display = "none";
});

closeBtn.addEventListener("click", function () {
  dialogBox.style.display = "none";
  error.style.display = "none";
});

function addTodo() {
  if (title.value !== "" && todo__text.value !== "") {
    let todoText = `<div class="content" todo-id=${counter}>
    <div class="box">
        <div class="box-heading">${title.value}</div>
        <div class="btn-container">
          <button>X</button>
        </div>
    </div>
    <textarea>${todo__text.value}</textarea>
    </div>`;
    main.innerHTML += todoText;
    deletelisteners();
    // code for adding data to the local storage
    
    // GET the old data [] from local storage
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    
    // add the new todo to the old data
    todos.push({
      id : counter,
      title: title.value,
      text: todo__text.value,
    });
    
    // set the new data to local storage
    localStorage.setItem("todos", JSON.stringify(todos));
    
    title.value = "";
    todo__text.value = "";
    dialogBox.style.display = "none";
    counter++;

  } else {
    error.style.display = "block";
  }
}
function deletelisteners() {
  const delarr = document.querySelectorAll(".btn-container button");
  for (let i = 0; i < delarr.length; i++) {
    delarr[i].addEventListener("click", function (e) {
      let del_todoList = e.target.closest(".content");
      del_todoList.style.display = "none";

      let id = del_todoList.getAttribute('todo-id');
      let todos = JSON.parse(localStorage.getItem("todos"));
      
      // removeing id from todos
      let newData = [];
      for(let i = 0; i < todos.length;i++)
      {
        if(todos[i].id != id)
        {
          newData.push(todos[i]);
        }
      }
      localStorage.setItem("todos",JSON.stringify(newData));
    });
  }
}
