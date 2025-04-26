import React from 'react'
import type Task from '../types/Task'

type Props = {
    task: Task
}

const Task = ({ task }: Props) => {
  return (
    <div>Task</div>
  )
}

export default Task