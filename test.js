const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

let tasks = [];

const addTask = () => {
  const task = taskInput.value.trim();
  const taskObj = {
    task,
    isDone: false,
    id: new Date(),
  };
  tasks.push(taskObj);
  taskInput.value = "";
  render();
};

const defaultMessage = () => {
  if (tasks.length === 0) {
    taskList.innerHTML = `<div>
  No tasks
  </div>`;
  }
};

const render = () => {
  taskList.innerHTML = "";
  taskList.classList.add("background");
  tasks.forEach((el) => {
    taskList.innerHTML += `<div class="flex">
    <input type="checkbox"/>
    <p>${el.task}</p>
    <button id="delete-btn" onclick="()=>deleteTask(${el.id})">Delete</button>
  </div>`;
  });
  console.log(tasks);
};

const deleteTask = (id) => {
  tasks = tasks.filter((task) => task.id !== id);
  console.log(tasks);
  render();
};
addBtn.addEventListener("click", addTask);

defaultMessage();
