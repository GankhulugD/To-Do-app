//DOMs
const inputBox = document.getElementById("input-box");
const addBtn = document.getElementById("add");
const taskList = document.getElementById("list-container");
const deleteAll = document.getElementById("deleteAll");
// const deleteBtn = document.getElementById("deleteButton");
let i = 0;
//Event listeners
addBtn.addEventListener("click", addTask);
deleteAll.addEventListener("click", deleteAlll);
// deleteBtn.addEventListener("click", deleteTask);

//Functions
function addTask() {
  if (inputBox.value === "") {
    alert("Task name missing. Please enter a task name");
    return;
  } else {
    const li = document.createElement("li");
    li.id = "li";
    li.classList.add("li");
    li.innerHTML = `<input id="checkbox" type="checkbox" />
              <p>${inputBox.value}</p>
              <button id="deleteButton" class="deleteButton">delete</button>`;
    taskList.appendChild(li);
    const deleteBtn = document.getElementById("deleteButton");
    deleteBtn.addEventListener("click", deleteTask);
    inputBox.value = "";
    i++;
    console.log(i);
  }
}

function deleteTask() {
  const deleteElement = document.getElementById("li");
  deleteElement.remove();
  i--;
  console.log(i);
}

function deleteAlll() {
  const deleteAll = document.getElementsByClassName("li");

  for (j = 1; j < i; j++) {
    deleteAll.remove();
    i--;
    console.log(i);
  }
}
