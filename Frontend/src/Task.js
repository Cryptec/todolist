
import React, { Component } from 'react'
import axios from 'axios'

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:5000'


class Task extends Component {
  constructor() {
    super()
    this.state = {
      task: '',
      done: '',
      fetchtasks: []
    }
  }

  componentDidMount = async () => {
    const response = await fetch(`${API_ENDPOINT}/api/tasks`)
    if (response.ok) {
      const fetchtasks = await response.json()
      this.setState({ fetchtasks })
      this.state.fetchtasks.map(task => {
      this.setState({ done: task.done, task: task.task })
      this.handleCheck()
      })
    } else {
      console.log('error')
    }
  }

  handleCheck = () => {
    if (this.state.done === 'true') {
      document.getElementById('checkbox').checked = true
    } else if  (this.state.done === 'false') {
      document.getElementById('checkbox').checked = false
    }
  }

  render() {
    return this.state.fetchtasks.map(tasks => {
  
    return (
    <tr>
      <td>
        <input 
           type="checkbox" 
           id='checkbox' 
           onChange={() => this.handleChange(tasks.id)}
           value={this.state.done}
           />
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
  
  
  handleChange(id) {

    var checkBox = document.getElementById('checkbox')

    if (checkBox.checked === true) {
      this.setState({ done: 'true' })
      axios({
        method: 'POST',
        url: `${API_ENDPOINT}/api/setstate/${id}`,
        headers: { 'Content-Type': 'application/json' },
        data: {
          id: id,
          done: 'true',
        },
      }).then((response) => {
        if (response.data.answer === 'success') {
          this.setState({
            task: ''
          })
          console.log('Form sent')
        }
      })
    } else if (checkBox.checked === false) { 
      this.setState({ done: 'false' }) 
      axios({
        method: 'POST',
        url: `${API_ENDPOINT}/api/setstate/${id}`,
        headers: { 'Content-Type': 'application/json' },
        data: {
          id: id,
          done: 'false',
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