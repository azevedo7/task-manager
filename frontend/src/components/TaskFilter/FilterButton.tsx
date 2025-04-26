import { FilterType } from '../../types/FilterType'
import classes from './TaskFilter.module.css'


type Props = {
    filter: FilterType,
    filterType: FilterType,
    onFilterChange: (type: FilterType) => void,
    children: React.ReactNode
}

const FilterButton = ({ filter, filterType, onFilterChange, children }: Props) => {
  return (
    <button onClick={() => onFilterChange(filterType)} className={`${filter === filterType ? classes.selected : null}`}>{children}</button>
)
}

export default FilterButton