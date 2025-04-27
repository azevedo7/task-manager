import { CheckCircle, Circle, PencilIcon, Save, Trash, X } from 'lucide-react'
import type TaskType from '../../types/Task'
import classes from './TaskItem.module.css'
import { useState } from 'react'

type Props = {
  task: TaskType,
  onToggle: () => void,
  onDelete: () => void,
  onEdit: (newName: string) => void,
}

const TaskItem = ({ task, onToggle, onDelete, onEdit }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingValue, setEditingValue] = useState(task.name);

  function saveEdit() {
    setIsEditing(false);
    onEdit(editingValue); 
  }

  if (isEditing) {
    return (
        <form className={classes.task}>
          <div className={classes.input}>
            <input className={`${classes.nameEditInput}`} value={editingValue} onChange={(e) => setEditingValue(e.target.value)}></input>
          </div>

          <div className={classes.editActions}>
            <button type='submit' onClick={() => saveEdit()} className={`${classes.iconButton} ${classes.saveButton}`}><Save /></button>
            <button type='button' onClick={() => setIsEditing(false)} className={`${classes.iconButton} ${classes.cancelButton}`}><X /></button>
          </div>
        </form>
    )
  }

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
        })}
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={() => setIsEditing(true)} className={`${classes.iconButton} ${classes.editIcon}`}><PencilIcon /></button>
        <button onClick={onDelete} className={`${classes.iconButton} ${classes.deleteIcon}`}><Trash /></button>
      </div>
    </div >
  )
}

export default TaskItem