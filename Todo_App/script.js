import task from "./components/task.js"

const mainInput = document.getElementById("mainInput");
const taskAddBtn = document.getElementById("addTask");
const taskListContainer = document.getElementById("taskListContainer");

console.log(task("hello"))

taskAddBtn.addEventListener("click",() => {
    if(!mainInput.value){
        console.log("Input box is empty");
    }else{
        task(mainInput.value);
        mainInput.value = "";
    }
})

// console.log(taskListContainer)