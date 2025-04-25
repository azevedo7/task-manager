import { CheckCircle } from 'lucide-react'
import './TaskManager.css'
import TaskForm from './TaskForm'

function TaskManager () {
    return (
        <div className="main">
            <div className="card">
                <div className="header">
                    <CheckCircle/> 
                    <div>Task Manager</div>
                </div>
                <TaskForm />

                <div>
                    tasks...
                </div>
            </div>
        </div>
    )
}

export default TaskManager