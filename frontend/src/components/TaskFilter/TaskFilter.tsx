import React from 'react'
import { FilterType } from '../../types/FilterType'
import classes from './TaskFilter.module.css'
import FilterButton from './FilterButton'

type Props = {
    filter: FilterType,
    onFilterChange: (type: FilterType) => void 
}

const TaskFilter = ({ filter, onFilterChange }: Props) => {
    return (
        <div className={classes.tab}>
            <FilterButton filter={filter} filterType='all' onFilterChange={onFilterChange}>All</FilterButton>
            <FilterButton filter={filter} filterType='active' onFilterChange={onFilterChange}>Active</FilterButton>
            <FilterButton filter={filter} filterType='completed' onFilterChange={onFilterChange}>Completed</FilterButton>
        </div>
    )
}

export default TaskFilter;