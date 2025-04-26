import { CheckCircle, Circle, PencilIcon, Trash } from 'lucide-react'
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
      <div className={classes.taskMain}>
        <div>{task.name}</div>
        <div className={classes.taskDate}>{task.createdAt.toLocaleDateString("pt-PT", {
          month: 'short',
          day: 'numeric',
          hour: 'numeric',
          minute: '2-digit',
        })}</div>
      </div>
      <div className={classes.actions}>
        <button onClick={onDelete} className={`${classes.iconButton}`}><PencilIcon /></button>
        <button onClick={onDelete} className={`${classes.iconButton}`}><Trash /></button>
      </div>
    </div>
  )
}

export default TaskItem