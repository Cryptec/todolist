import './todolist/Todo.scss'
import './App.css';
import TodoList from './ToDoList'
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import Home from './screens/home'
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import LoginWindow from './screens/Loginwindow';
import ForgotWindow from './screens/Forgotwindow.js'

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <PrivateRoute restricted={false} component={Home} path="/" exact />
          <PublicRoute restricted={true} component={LoginWindow} path="/login" exact />
          <PublicRoute restricted={true} component={ForgotWindow} path="/forgot" exact />
        </Switch>
      </Router>
    );
  }
}

export default App;