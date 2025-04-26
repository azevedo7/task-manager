import React, { useState } from 'react'
import type Task from '../../types/Task'
import classes from './TaskList.module.css'
import { FilterType } from '../../types/FilterType'
import TaskFilter from '../TaskFilter/TaskFilter'


type Props = {
    tasks: Task[]
}

const TaskList = ({ tasks }: Props) => {
    const [filter, setFilter] = useState<FilterType>('all') 

    function onFilterChange(filterName: FilterType){
        setFilter(filterName);
    }

    return (
        <div className={classes.main}>
            <TaskFilter filter={filter} onFilterChange={onFilterChange} /> 
            {tasks.map(task => 
                <div>
                    {task.name}
                </div>
            )}
        </div>

  )
}
export default TaskList;