import '../css/homescreen.css';
import React, { Component } from 'react';
import { logout, isLogin } from '../utils';
import { Link } from 'react-router-dom';
import TodoList from '../ToDoList'

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLogin: isLogin()
        }
    }

    handleLogout = () => {
        logout();
        this.props.history.push('/login')
        this.setState({
            isLogin: false
        })
    }

    render() {
        return (
         <div>
                <header className="headerBar">

                    {this.state.isLogin ? 
                    <button  className="logoutButton" onClick={() => this.handleLogout()}>Logout</button>
                    : <Link to="/login" onClick={() => this.handleLogout()}></Link>
                }
                </header>
                <TodoList />
        </div>
   
  
        );
    }
}

export default Home;
