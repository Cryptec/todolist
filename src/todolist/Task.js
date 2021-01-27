// 1
import React from 'react';
import { useTasks } from './TaskProvider';
import * as FaIcons from 'react-icons/fa';
import './Todo.scss'

export default function Task({ id, task, complete }) {
  // 2
  const { setStatusTask } = useTasks()

  // 3
  const checkTask = e => setStatusTask(id, e.target.checked)

  return (
    <tr>
      <td>
        <input type="checkbox"  onChange={checkTask} />
      </td>
      <td>
        <span className={ complete ? 'task-done' : '' }>{ task }</span>
      </td>
      <td>
         <button type="button" className="delButton" ><FaIcons.FaTrash /></button>
      </td>
    </tr>
  )
}