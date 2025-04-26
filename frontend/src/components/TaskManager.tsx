import { CheckCircle } from 'lucide-react'
import './TaskManager.css'
import TaskForm from './TaskForm'
import { useState } from 'react'
import TaskList from './TaskList/TaskList'

function TaskManager () {
    const [tasks, setTasks] = useState([
        {
            name: "teste tarefa",
            completed: false
        },
        {
            name: 'tarefa completa',
            completed: true,
        }
    ])

    function onAddTask(taskName: string) {
        // Add task to list
        setTasks([...tasks, { name: taskName, completed: false }])

        // Return true for now
        return true;
    }


    return (
        <div className="main">
            <div className="card">
                <div className="header">
                    <CheckCircle/> 
                    <div>Task Manager</div>
                </div>
                <div className='content'>
                    <TaskForm onAddTask={onAddTask}/>

                    <TaskList tasks={tasks}/>
                </div>
            </div>
        </div>
    )
}

export default TaskManager