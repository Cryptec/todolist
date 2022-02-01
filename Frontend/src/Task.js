
import React, { Component } from 'react'
import axios from 'axios'

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:5000'


class Task extends Component {
  constructor() {
    super()
    this.state = {
      task: '',
      done: 'false',
      fetchtasks: []
    }
  }

  componentDidMount = async () => {
    const response = await fetch(`${API_ENDPOINT}/api/tasks`)
    if (response.ok) {
      const fetchtasks = await response.json()
      this.setState({ fetchtasks })
      this.state.fetchtasks.map(task => {
      return this.setState({ done: task.done, task: task.task })
      })
    } else {
      console.log('error')
    }
  }
  render() {
    return this.state.fetchtasks.map(tasks => {
     
    return (
    <tr>
      <td>
        <input type="checkbox" id='checkbox' onChange={this.handleChange.bind(this)} />
      </td>
      <td>
        <span className={ this.state.done === "true" ? 'task-done' : '' }>{ tasks.task}</span>
      </td>
      <td>
        <span onClick={() => this.deleteTableRow(tasks.id)}> X </span>
      </td>
    </tr>
  )
  })
  }

  deleteTableRow = async (id) => {
    
    await fetch(`${API_ENDPOINT}/api/task/${id}`, { method: 'DELETE'})
    const response = await fetch(`${API_ENDPOINT}/api/tasks`)
    if (response.ok) {
      const fetchtasks = await response.json()
      this.setState({ fetchtasks })
    } else {
      console.log('error')
    }
  }
  
  
  handleChange(event) {
    const field = event.target.id

    if (field === 'checkbox') {
      this.setState({ done: "true" })
    } 
  }
  handleSubmit(event) {
    event.preventDefault()

    axios({
      method: 'POST',
      url: `${API_ENDPOINT}/api/settask`,
      headers: { 'Content-Type': 'application/json' },
      data: {
        task: this.state.task,
        done: this.state.done,
      },
    }).then((response) => {
      if (response.data.answer === 'success') {
        this.setState({
          task: ''
        })
        console.log('Form sent')
      }
    })
  }
}


export default Task