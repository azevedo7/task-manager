import { Plus } from "lucide-react";
import './TaskForm.css'

function TaskForm() {
    return(
        <div className="task-form-component">
            <form className="task-form">
                <div className="task">
                    <input type="text" placeholder="Add a new task..."></input>
                    <button><Plus className="icon"/> Add</button>
                </div>
            </form>
        </div>
    )
}

export default TaskForm;