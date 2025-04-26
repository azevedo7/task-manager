import { Plus } from "lucide-react";
import './TaskForm.css'
import { useState } from "react";

interface TaskFormProps {
    onAddTask: (text: string) => boolean;
}


function TaskForm({ onAddTask }: TaskFormProps) {
    const [taskName, setTaskName] = useState('');

    function onSubmit(e: React.FormEvent) {
        e.preventDefault();

        // If added successfully, clear task name
        if(onAddTask(taskName)){
            setTaskName('');
        }
    }


    return(
        <div className="task-form-component">
            <form className="task-form" onSubmit={onSubmit}>
                <div className="task">
                    <input value={taskName} onChange={(e) => setTaskName(e.target.value)} name="taskName" type="text" placeholder="Add a new task..."></input>
                    <button><Plus className="icon"/> Add</button>
                </div>
            </form>
        </div>
    )
}

export default TaskForm;