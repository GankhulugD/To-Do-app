//DOMs
const inputBox = document.getElementById("input-box");
const addBtn = document.getElementById("add");
const taskList = document.getElementById("list-container");
const taskCounterElement = document.querySelector(".taskCounter");

const deleteAll = document.getElementById("deleteAll");
let tasks = [];
// {id:1, task: input.value, isDone: false}
//
let i = 0;
//Event listeners
addBtn.addEventListener("click", addTask);
deleteAll.addEventListener("click", deleteAlll);
taskList.addEventListener("click", deleteAndToggle);

document.getElementById("count").style.display = "none";

//Functions
function addTask() {
  if (inputBox.value === "") {
    alert("Task name missing. Please enter a task name");
    return;
  } else {
    i++;
    const li = document.createElement("li");
    li.id = "li";
    li.classList.add("li");
    li.innerHTML = `<input id="checkbox" class="check-box" type="checkbox" data-task-id="${i}"/>
              <p>${inputBox.value}</p>
              <button id="deleteButton" class="deleteButton">delete</button>`;
    taskList.appendChild(li);
    console.log(i);
    let task = { id: i, value: inputBox.value, isDone: false };
    tasks.push(task);
    console.log(tasks);
    inputBox.value = "";
    document.getElementById("noTask").style.display = "none";
    document.getElementById("count").style.display = "flex";
    taskCount();
  }
}
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
  if (i < 1) {
    document.getElementById("noTask").style.display = "block";
    document.getElementById("count").style.display = "none";
  }
}
function isTaskCompleted(taskId) {
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];

    if (task.id === taskId) {
      // isDone төлөвийг одоогийн утгаас нь эсрэг утга руу сэлгэнэ (true -> false, false -> true)
      task.isDone = !task.isDone;

      // console.log("Массив дахь төлөв:", task.isDone);
      return;
    }
  }
  console.log(tasks);
}
function deleteAndToggle(e) {
  // Delete
  if (e.target.classList.contains("deleteButton")) {
    deleteTask(e);
    taskCount();
    return;
  }

  // Toggle
  if (e.target.classList.contains("check-box")) {
    const selectedId = parseInt(e.target.getAttribute("data-task-id"));

    // 2. isTaskCompleted функц рүү дамжуулна
    isTaskCompleted(selectedId);

    // DOM-ын төлөвийг өөрчлөх
    e.target.parentElement.classList.toggle("checked");

    taskCount();
  }
}
function taskCount() {
  const completedTasks = tasks.filter((task) => task.isDone === true).length;

  const totalTasks = tasks.length;

  const taskNoun = totalTasks === 1 ? "task" : "tasks";

  if (taskCounterElement) {
    taskCounterElement.textContent = `${completedTasks} of ${totalTasks} ${taskNoun} completed`;
  }
}
// function Toggle(e) {
//   const target = e.target;

//   // 🎯 Шалгалтыг таны сонгосон "check-box" класс-аар хийж байна.
//   if (target.classList.contains("check-box")) {
//     // 2. data-task-id attribute-аас Task-ын ID-г авна
//     const selectedId = parseInt(target.getAttribute("data-task-id"));

//     // 3. Массив доторх Task Object-ийн isDone төлөвийг өөрчлөх
//     toggleTaskIsDone(selectedId);

//     // 4. DOM дээрх <li> элемент дээр 'checked' классыг нэмэх/арилгах
//     target.parentElement.classList.toggle("checked");

//     console.log("Task ID:", selectedId, "Төлөв өөрчлөгдлөө.");
//   }
// }

function deleteAlll() {
  const deleteAll = tasks.filter((task) => task.isDone === true);

  deleteAll.remove();
  console.log(i);
}
