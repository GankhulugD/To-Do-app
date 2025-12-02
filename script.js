//DOMs
const inputBox = document.getElementById("input-box");
const addBtn = document.getElementById("add");
const taskList = document.getElementById("list-container");
const taskCounterElement = document.querySelector(".taskCounter");

const allBtn = document.getElementById("all");
const activeBtn = document.getElementById("active");
const completedBtn = document.getElementById("completed");

const deleteAll = document.getElementById("deleteAll");
let tasks = [];
// {id:1, task: input.value, isDone: false}
//
let i = 0;
//Event listeners
addBtn.addEventListener("click", addTask);
deleteAll.addEventListener("click", deleteAlll);
taskList.addEventListener("click", deleteAndToggle);

allBtn.addEventListener("click", allClick);
activeBtn.addEventListener("click", activeClick);
completedBtn.addEventListener("click", completedClick);

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
              <p class="line">${inputBox.value}</p>
              <button  class="deleteButton" id="${i}">delete</button>`;
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

      const id = e.target.id;
      console.log(id, "e.target.value");
      tasks = tasks.filter(function (task) {
        console.log(task.id, "task-id");
        if (task.id != id) {
          return task;
        }
      });

      i--;
      console.log(i);
      console.log(tasks);
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

      console.log(tasks);
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
    // checked-ийг reverse
    e.target.parentElement.classList.toggle("checked");

    const taskTextElement = e.target.parentElement.querySelector("p");
    if (taskTextElement) {
      taskTextElement.style.overflowWrap = "break-word";
    }
    // checked-ийг reverse
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

function deleteAlll() {
  // 1. Устгах ёстой (isDone: true) байгаа Task-уудыг олох
  const completedTasks = tasks.filter((task) => task.isDone === true);

  // 2. DOM элементүүдийг устгах
  completedTasks.forEach((task) => {
    const checkboxToDelete = taskList.querySelector(
      `[data-task-id="${task.id}"]`
    );

    if (checkboxToDelete) {
      checkboxToDelete.parentElement.remove();
    }
  });

  // 3. tasks массив доторх Object-уудыг устгах
  // isDone нь false байгаа Task-уудаар шинэ массив үүсгэнэ.
  tasks = tasks.filter((task) => task.isDone === false);

  i = tasks.length;
  if (i < 1) {
    document.getElementById("noTask").style.display = "block";
    document.getElementById("count").style.display = "none";
  }
  console.log(i);
  console.log(tasks);

  taskCount();
}

function allClick() {
  activeBtn.value = 0;
  activeBtn.classList.remove("active");
  completedBtn.value = 0;
  completedBtn.classList.remove("active");
  allBtn.value = 1;
  allBtn.classList.add("active");

  const completedTasks = tasks.filter((task) => task.isDone === true);
  completedTasks.forEach((task) => {
    const checkboxToDelete = taskList.querySelector(
      `[data-task-id="${task.id}"]`
    );
    if (checkboxToDelete) {
      const none = checkboxToDelete.parentElement;
      none.style.display = "flex";
    }
  });
  const completedTasks2 = tasks.filter((task) => task.isDone === false);
  completedTasks2.forEach((task) => {
    const checkboxToDelete = taskList.querySelector(
      `[data-task-id="${task.id}"]`
    );
    if (checkboxToDelete) {
      const none = checkboxToDelete.parentElement;
      none.style.display = "flex";
    }
  });
}
function activeClick() {
  allBtn.value = 0;
  allBtn.classList.remove("active");
  completedBtn.value = 0;
  completedBtn.classList.remove("active");
  activeBtn.value = 1;
  activeBtn.classList.add("active");
  const completedTasks = tasks.filter((task) => task.isDone === true);
  completedTasks.forEach((task) => {
    const checkboxToDelete = taskList.querySelector(
      `[data-task-id="${task.id}"]`
    );
    if (checkboxToDelete) {
      const none = checkboxToDelete.parentElement;
      none.style.display = "flex";
    }
  });
  const completedTasks2 = tasks.filter((task) => task.isDone === false);
  completedTasks2.forEach((task) => {
    const checkboxToDelete = taskList.querySelector(
      `[data-task-id="${task.id}"]`
    );
    if (checkboxToDelete) {
      const none = checkboxToDelete.parentElement;
      none.style.display = "flex";
    }
  });
  const completedTasks3 = tasks.filter((task) => task.isDone === true);
  completedTasks3.forEach((task) => {
    const checkboxToDelete = taskList.querySelector(
      `[data-task-id="${task.id}"]`
    );
    if (checkboxToDelete) {
      const none = checkboxToDelete.parentElement;
      none.style.display = "none";
    }
  });
}
function completedClick() {
  allBtn.value = 0;
  allBtn.classList.remove("active");
  activeBtn.value = 0;
  activeBtn.classList.remove("active");
  completedBtn.value = 1;
  completedBtn.classList.add("active");

  const completedTasks = tasks.filter((task) => task.isDone === true);
  completedTasks.forEach((task) => {
    const checkboxToDelete = taskList.querySelector(
      `[data-task-id="${task.id}"]`
    );
    if (checkboxToDelete) {
      const none = checkboxToDelete.parentElement;
      none.style.display = "flex";
    }
  });
  const completedTasks2 = tasks.filter((task) => task.isDone === false);
  completedTasks2.forEach((task) => {
    const checkboxToDelete = taskList.querySelector(
      `[data-task-id="${task.id}"]`
    );
    if (checkboxToDelete) {
      const none = checkboxToDelete.parentElement;
      none.style.display = "none";
    }
  });
}
