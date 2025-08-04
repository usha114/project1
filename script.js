document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
  const time = document.getElementById("timeInput").value;
  const task = document.getElementById("taskInput").value;

  if (!time || !task) {
    alert("Please enter both time and task.");
    return;
  }

  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push({ time, task });
  localStorage.setItem("tasks", JSON.stringify(tasks));

  displayTasks();
  document.getElementById("taskInput").value = "";
  document.getElementById("timeInput").value = "";
}

function displayTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((t, index) => {
    const taskItem = document.createElement("div");
    taskItem.className = "task-item";

    taskItem.innerHTML = `
      <span>${t.time} - ${t.task}</span>
      <button onclick="deleteTask(${index})">Delete</button>
    `;

    taskList.appendChild(taskItem);
  });
}

function deleteTask(index) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
}

function loadTasks() {
  displayTasks();
}
