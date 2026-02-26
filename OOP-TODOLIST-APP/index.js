class Task {
  constructor(text) {
    this.text = text;
    this.completed = false;
  }

  toggleComplete() {
    this.completed = !this.completed;
  }
}

// create a class for the entire application
class TodoApp {
  constructor() {
    // Select elements
    this.inputField = document.getElementById("input-field");
    this.addBtn = document.getElementById("add-btn");
    this.tasksArea = document.getElementById("tasks-area");
    this.taskList = document.getElementById("task-list");
    this.msg = document.getElementById("msg");
    this.cancelBtn = document.querySelector(".fa-times");

    this.msg.style.display = "none";

    // Store task in array
    this.tasks = [];

    // initialize event listeners
    this.initializeEvents();
  }
  initializeEvents() {
    this.addBtn.addEventListener("click", () => this.addTask());
    this.cancelBtn.addEventListener("click", () => {
    this.hideMessage();
    });
  }

  // show error message
  showMessage() {
    this.msg.style.display = "block";
  }

  hideMessage() {
    this.msg.style.display = "none";
  }

  // Add task
  addTask() {
    const taskText = this.inputField.value.trim();

    if (taskText === "") {
      this.showMessage();
      return;
    }

    const newTask = new Task(taskText);
    this.tasks.push(newTask);
    this.renderTask(newTask);
    this.inputField.value = "";
    this.hideMessage();
  }

  // render task to DOM
  renderTask(task) {
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="task-text">${task.text}</span>
      <div>
      <i class="fa-solid fa-pen edit-btn"></i>
      <i class="fa fa-check complete-btn"></i>
      <i class="fa fa-trash-o delete-btn"></i>
      </div>
    `;

    this.taskList.appendChild(li);

    // edit task
    // const editBtn = li.querySelector("edit-btn");
    // editBtn.addEventListener("click")

    // complete task
    const completeBtn = li.querySelector(".complete-btn");
    completeBtn.addEventListener("click", () => {
      task.toggleComplete();
      li.classList.toggle("completed");
    });

    // Delete Task
    const deleteBtn = li.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
      this.deleteTask(task, li);
    });
  }

  deleteTask(task, li) {
    this.tasks = this.tasks.filter((t) => t !== task);
    li.remove();
  }
}
const app = new TodoApp();
