const task = (value) => {
    // creating Element
    const taskContainer = document.createElement("div");
    const taskCheckbox = document.createElement("div");
    const taskValue = document.createElement("input");
    const taskButtons = document.createElement("div");
    const taskWordDeleteButton = document.createElement("button");
    const taskEditButton = document.createElement("button");
    const taskDeleteButton = document.createElement("button");

    // adding classes and atributes
    taskContainer.classList.add("taskContainer");
    taskCheckbox.classList.add("checkbox");
    taskValue.classList.add("taskInput")
    taskValue.setAttribute("autocomplete","off");
    taskValue.setAttribute("readOnly","true")
    taskButtons.classList.add("taskButtons");
    taskWordDeleteButton.setAttribute("id","taskWordDeleteBtn");
    taskEditButton.setAttribute("id","taskEditBtn");
    taskDeleteButton.setAttribute("id","taskDeleteBtn");

    // assing values
    taskValue.setAttribute("value",value)
    taskCheckbox.innerHTML = `<i class="fa-solid fa-check"></i>`
    taskWordDeleteButton.innerHTML = `<i class="fa-solid fa-delete-left"></i>`
    taskEditButton.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`
    taskDeleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`

    // adding Events
    taskCheckbox.addEventListener("click",(e) => {
        taskContainer.classList.toggle("checkboxActive");
    })

    taskWordDeleteButton.addEventListener("click",() => {
        console.log("task word button clicked")
        let currentValue = taskValue.value;

        if(currentValue.length > 0){
            taskValue.value = currentValue.slice(0,-1)
        }else{
            taskWordDeleteButton.disabled = true
        }
    })

    taskEditButton.addEventListener("click",() => {
        taskValue.removeAttribute("readOnly");
        taskValue.focus()
    })

    // appending
    document.getElementById("taskListContainer").append(taskContainer);
    taskContainer.append(taskCheckbox);
    taskContainer.append(taskValue);
    taskContainer.append(taskButtons);
    taskButtons.append(taskWordDeleteButton);
    taskButtons.append(taskEditButton);
    taskButtons.append(taskDeleteButton);
}

export default task;