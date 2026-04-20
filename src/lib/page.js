
import tasks from "../data/data.json"

export const GetTask = async() => {
return tasks
}

export const postTask = async(newTask) => {
newTask.id = String(tasks.data.length + 1);
tasks.data.push(newTask)
// tasks.data.push(newTask)
return{success: true, message: "task added success"}
}

// 