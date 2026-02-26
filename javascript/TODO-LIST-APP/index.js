/*************************
 * PART 1: SELECT ELEMENTS
 ************************/
let inputField = document.getElementById("input-field")
let addBtn = document.getElementById("add-btn")
let tasksArea = document.getElementById("tasks-area")
let taskList = document.getElementById("task-list")
let msg = document.getElementById("msg")
let cancelBtn = document.querySelector(".fa-times");


 msg.style.display = "none";

 /**********************
 * PART 2: ADD TASK FUNCTION
 ********************/
const addTask = () => {
    // alert ("Button clicked!" + inputField.value)\
    // create an unordered list for tasks
    const taskText = inputField.value.trim();
    //  Validation
    if(taskText === "") {
        msg.style.display = "block";
        return;
    }
// create task item
const li = document.createElement("li");
li.innerHTML = `
<span class="task-text">${taskText}</span>
<div>
    <i class="fa fa-check complete-btn"></i>
    <i class="fa fa-trash-o delete-btn"></i>
</div>
`;
// console.log(li)
// console.log(taskList)
taskList.appendChild(li);
inputField.value = "";
msg.style.display = "none";

// *********
// * PART 3: MARK AS COMPLETED
const completeBtn = li.querySelector(".complete-btn")
completeBtn.addEventListener("click", () => {
    li.classList.toggle("completed");
})
// ************
// * PART 4: DELETE TASK
const deleteBtn = li.querySelector(".delete-btn");
deleteBtn.addEventListener("click", () =>{
    li.remove();
});
};

// PART 5: EVENT LISTENERS
addBtn.addEventListener("click",addTask);

cancelBtn.addEventListener("click",() => {
    msg.style.display = "none";
});

// PART 6: LOCAL STORAGE
function saveData() {
    localStorage.setItem("tasks", taskList.innerHTML);
}

function showTask() {
    taskList.innerHTML = localStorage.getItem("tasks");
}