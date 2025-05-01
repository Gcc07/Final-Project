/* TaskFlow Solutions, a company specializing in productivity tools, has hired you to develop a Task Manager
 Web Application to help users organize and track their tasks efficiently. This application will allow users to add,
  edit, delete, and mark tasks as important or completed. The application must be built using HTML, CSS, and JavaScript
   and should focus on functionality, user experience, and clean code implementation. */

/*Creates all of the references to html objects */

const nameInput = document.getElementById("taskName")
const prioritySelection = document.getElementById("priority")
const importantSelector = document.getElementById("important")
const addTaskButton = document.getElementById("addTaskButton")
const taskManager = document.getElementById("taskManager")
let task_array = []
let task_counter = 0


/*Creates task class which all tasks will be made from*/
class Task {
    constructor(id, name, priority, isImportant,isCompleted) {
        this.id = id
        this.name = name
        this.priority = priority
        this.isImportant = isImportant
        this.isCompleted = isCompleted
        this.date = new Date().toLocaleDateString()
    }
  }


/*On add task button click, create task pertaining to the values of the html form objects*/
addTaskButton.addEventListener("click", function() {

    if (nameInput.value == "") {
        alert("You must assign a task name first.")
        return
        
    }
    for (let tasks in task_array) {
        if (tasks==null) {task_counter = 1}
        else {
            task_counter = parseInt(tasks)+1
        }
    }
    /*creates the task*/
    let pushed_task = new Task(task_counter, nameInput.value, prioritySelection.value, importantSelector.checked, false)
        
    task_array.push(pushed_task)
    console.log(JSON.stringify(task_array));


    shown_task = document.createElement("div");
    shown_task.innerHTML =
    `<div class="task-bar">
        <div class="task-item">${pushed_task.name}</div>
        <div class="task-item">${pushed_task.priority}</div>
        <div class="task-item">${pushed_task.date}</div>
        <div class="task-item">
            <input type="checkbox" id="done"></input><label for="done">Done</label> 
            <button type="submit" id="deleteTaskButton">Delete</button>
        </div>`
    shown_task.style.backgroundColor = pushed_task.isImportant ? "red" : "white";
    shown_task.style.color = pushed_task.priority == "high" ? "yellow" : "white";

    const deleteTaskButton = shown_task.querySelector("#deleteTaskButton")
    deleteTaskButton.addEventListener("click", function() {
        deleteTaskButton.parentElement.parentElement.remove()
        task_array.pop()        
        console.log(JSON.stringify(task_array));
    })
    const taskDoneSelector = shown_task.querySelector("#done")
    taskDoneSelector.addEventListener("change", function() {
        shown_task.isCompleted = taskDoneSelector.checked
        shown_task.style.textDecoration = pushed_task.isCompleted ? "line-through" : "none" /* Can't get this to work*/
        shown_task.style.textColor = pushed_task.isImportant ? "blue" : "white";
        console.log(JSON.stringify(task_array));
    })

    taskManager.appendChild(shown_task);
})


