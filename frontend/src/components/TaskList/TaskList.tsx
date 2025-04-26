import { useState } from 'react'
import TaskType from '../../types/Task'
import classes from './TaskList.module.css'
import { FilterType } from '../../types/FilterType'
import TaskFilter from '../TaskFilter/TaskFilter'
import Task from '../Task/Task'


type Props = {
    tasks: TaskType[]
}

const TaskList = ({ tasks }: Props) => {
    const [filter, setFilter] = useState<FilterType>('all') 

    function onFilterChange(filterName: FilterType){

        setFilter(filterName);
    }

    const filteredTasks = filter != 'all' ? tasks.filter(task => task.completed === (filter !== 'active')): tasks;

    return (
        <div className={classes.main}>
            <TaskFilter filter={filter} onFilterChange={onFilterChange} /> 

            <div className={classes.taskList}>
                {filteredTasks.map(task => (
                    <Task task={task} key={task.id} />
                ))}
            </div>
        </div>

  )
}

export default TaskList;