function addTask() {
    const newTaskInput = document.getElementById("new-task");
    const taskList = document.getElementById("todo-list");

    if (newTaskInput.value.trim() !== "") {
        const newTask = document.createElement("li");
        newTask.innerText = newTaskInput.value;
        taskList.appendChild(newTask);
        newTaskInput.value = "";
    }
}
