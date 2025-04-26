import { CheckCircle, Circle, Trash } from 'lucide-react'
import type TaskType from '../../types/Task'
import classes from './TaskItem.module.css'

type Props = {
  task: TaskType,
  onToggle: () => void,
  onDelete: () => void,
}

const TaskItem = ({ task, onToggle, onDelete }: Props) => {
  return (
    <div className={classes.task}>
      <div>
        <button onClick={onToggle} className={`${classes.toggle} ${task.completed ? classes.completed : ''}`}>
          {task.completed ? <CheckCircle /> : <Circle />}
        </button>
      </div>
      <div className={classes.taskMain}>{task.name}</div>
      <div>
        <button onClick={onDelete} className={`${classes.iconButton}`}><Trash /></button>
      </div>
    </div>
  )
}

export default TaskItem