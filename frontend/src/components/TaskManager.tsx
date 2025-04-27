import { CheckCircle } from 'lucide-react'
import './TaskManager.css'
import TaskForm from './TaskForm'
import { useState } from 'react'
import TaskList from './TaskList/TaskList'
import Task from '../types/Task'


function TaskManager () {
    const [tasks, setTasks] = useState<Task[]>([
        {
            id: 1,
            name: "teste tarefa",
            completed: false,
            createdAt: new Date(),
        },
        {
            id:2, 
            name: 'tarefa completa',
            completed: true,
            createdAt: new Date(),
        }
    ])

    function onAddTask(taskName: string) {
        // Add task to list
        const maxId = tasks.reduce((acc, curr) => {
            return Math.max(curr.id, acc)
        }, 1)
        setTasks([...tasks, { id: maxId + 1, name: taskName, completed: false, createdAt: new Date() }])

        // Return true for now
        return true;
    }

    // Toggle task
    function toggleTask(id: number){
        const task = tasks.find(task => task.id === id);
        if (task) {
            setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
        }
        return task
    }

    // Delete task
    function deleteTask(id: number){
        setTasks(tasks.filter(task => task.id !== id));
    }

    // Edit task
    function editTask(id: number, newName: string){
        setTasks(tasks.map(t => t.id === id ? {...t, name: newName}: t))
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

                    <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} onEdit={editTask}/>
                </div>
            </div>
        </div>
    )
}

export default TaskManager