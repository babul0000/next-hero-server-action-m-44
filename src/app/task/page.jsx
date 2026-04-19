import TaskCard from "@/components/taskCard";
import { GetTask } from "@/lib/page";


const TaskPage = async() => {
    const task = await GetTask();
    const data = task.data
    console.log(data);
    
    return (
        <div>
            <h1>task length: {data.length}</h1>
            <div className="grid grid-cols-3 gap-5">
                {
                    data.map(task => <TaskCard key={task.id} task={task}></TaskCard>)
                }
            </div>
        </div>
    );
};

export default TaskPage;