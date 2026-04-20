import { ModalTask } from "@/components/ModalTask";
import TaskCard from "@/components/taskCard";
import { createData } from "@/lib/actions";
import { GetTask } from "@/lib/page";
import Link from "next/link";


const TaskPage = async() => {
    const task = await GetTask();
    const data = task.data
    console.log(data);
    
    return (
        <div>
            <h1>task length: {data.length}</h1>
            <div className="my-5">
                <ModalTask createTask={createData}></ModalTask>

                <Link href ="/task/new">
                <button variant="secondary"> extra task</button>
                </Link>
            </div>
            <div className="grid grid-cols-3 gap-5">
                {
                    data.map(task => <TaskCard key={task.id} task={task}></TaskCard>)
                }
            </div>
        </div>
    );
};

export default TaskPage;