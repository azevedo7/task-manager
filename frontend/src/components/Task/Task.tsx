import type TaskType from '../../types/Task'
import classes from './Task.module.css'

type Props = {
  task: TaskType
}

const Task = ({ task }: Props) => {
  return (
    <div className={classes.task}>{task.name}</div>
  )
}

export default Task