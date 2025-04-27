import { useState } from 'react'
import Task from '../../types/Task'
import classes from './TaskList.module.css'
import { FilterType } from '../../types/FilterType'
import TaskFilter from '../TaskFilter/TaskFilter'
import TaskItem from '../TaskItem/TaskItem'

type Props = {
    tasks: Task[],
    onToggle: (id: number) => Task | undefined,
    onDelete: (id: number) => void,
    onEdit: (id: number, newName: string) => void,
}

const TaskList = ({ tasks, onToggle, onDelete, onEdit }: Props) => {
    const [filter, setFilter] = useState<FilterType>('all')

    function onFilterChange(filterName: FilterType) {
        setFilter(filterName);
    }

    const filteredTasks = filter != 'all' ? tasks.filter(task => task.completed === (filter !== 'active')) : tasks;

    return (
        <div className={classes.main}>
            <TaskFilter filter={filter} onFilterChange={onFilterChange} />

            <div className={classes.taskList}>
                {filteredTasks.map(task => (
                    <TaskItem task={task} onDelete={() => onDelete(task.id)} onToggle={() => onToggle(task.id)} onEdit={(newName: string) => onEdit(task.id, newName)} key={task.id} />
                ))}
            </div>
        </div>

    )
}

export default TaskList;