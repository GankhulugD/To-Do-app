//DOMs
const inputBox = document.getElementById("input-box");
const addBtn = document.getElementById("add");
const taskList = document.getElementById("list-container");
// const deleteAll = document.getElementById("deleteAll");

let i = 0;
//Event listeners
addBtn.addEventListener("click", addTask);
// deleteAll.addEventListener("click", deleteAlll);
taskList.addEventListener("click", deleteTask);

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
    // const deleteBtn = document.getElementById("deleteButton");
    // deleteBtn.addEventListener("click", deleteTask);
    inputBox.value = "";
    i++;
    console.log(i);
  }
}

function deleteTask(e) {
  if (e.target.classList.contains("deleteButton")) {
    const listItem = e.target.parentElement;
    listItem.remove();
    i--;
    console.log(i);
  }
}

// function deleteAlll() {
//   const deleteAll = document.getElementsByClassName("li");

//   for (j = 1; j < i; j++) {
//     deleteAll.remove();
//     i--;
//     console.log(i);
//   }
// }
