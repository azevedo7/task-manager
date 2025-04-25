import { CheckCircle } from 'lucide-react'
import './TaskManager.css'

function TaskManager () {
    return (
        <div className="main">
            <div className="card">
                <div className="header">
                    <CheckCircle/> 
                    <div>Task Manager</div>
                </div>
                <div>
                    tasks...
                </div>
            </div>
        </div>
    )
}

export default TaskManager