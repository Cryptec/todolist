// 1
import React from 'react'
import './App.css'
import './todolist/Todo.scss'
import NewTaskForm from './todolist/NewTaskForm'
import TaskList from './todolist/TaskList'

function TodoList() {
  // 2
  return (
    <div className="container">
      <br></br>
       <h1 className="title">Todo List</h1>
      <br></br>
      <NewTaskForm />
      <TaskList />
    </div>
  )
}

export default TodoList