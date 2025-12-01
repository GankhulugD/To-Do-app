//DOMs
const inputBox = document.getElementById("input-box");
const addBtn = document.getElementById("add");
const taskList = document.getElementById("list-container");

// const deleteAll = document.getElementById("deleteAll");
const tasks = [];
// {id:1, task: input.value, isDone: false}
//
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
    li.innerHTML = `<input id="checkbox" type="checkbox"/>
              <p>${inputBox.value}</p>
              <button id="deleteButton" class="deleteButton">delete</button>`;
    taskList.appendChild(li);
    // const deleteBtn = document.getElementById("deleteButton");
    // deleteBtn.addEventListener("click", deleteTask);
    i++;
    console.log(i);
    let task = { id: i, value: inputBox.value, isDone: false };
    tasks.push(task);
    console.log(tasks);
    inputBox.value = "";
  }
}
// function isTaskCompleted() {
//   for (let i = 0; i < tasks.length; i++) {
//     const task = tasks[i];
//     if (task.id === id) {
//       return (task.isDone = true);
//     } else {
//       return task;
//     }
//   }
// }
function deleteTask(e) {
  if (e.target.classList.contains("deleteButton")) {
    const confirmDelete = confirm("Are you sure you want to delete this task?");

    if (confirmDelete) {
      const listItem = e.target.parentElement;
      listItem.remove();
      i--;
      console.log(i);
    }
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
