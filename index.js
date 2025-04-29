/* TaskFlow Solutions, a company specializing in productivity tools, has hired you to develop a Task Manager
 Web Application to help users organize and track their tasks efficiently. This application will allow users to add,
  edit, delete, and mark tasks as important or completed. The application must be built using HTML, CSS, and JavaScript
   and should focus on functionality, user experience, and clean code implementation. */

const nameInput = document.getElementById("taskName")
const prioritySelection = document.getElementById("priority")
const importantSelector = document.getElementById("important")
const addTaskButton = document.getElementById("addTaskButton")
const taskManager = document.getElementById("taskManager")
let task_array = []
let task_counter = 0

class Task {
    id = 0
    name = ""
    priority = ""
    isImportant = false
    isCompleted = false
    date = Date()
    constructor(id, name, priority, isImportant,isCompleted,date) {
        this.id = id
        this.name = name
        this.priority = priority
        this.isImportant = isImportant
        this.isCompleted = isCompleted
        this.date = date
    }
  }



addTaskButton.addEventListener("click", function() {
    for (let tasks in task_array) {
        if (tasks==null) {task_counter = 1}
        else {
            console.log(tasks)
            task_counter = parseInt(tasks)+1
        }
    }
    let pushed_task = new Task(task_counter, nameInput.value, prioritySelection.value, importantSelector.value, false, Date())
        
    task_array.push(pushed_task)
    console.log(JSON.stringify(task_array));
})
