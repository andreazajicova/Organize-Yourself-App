import React, { Component } from 'react';
import TodoList from './Components/TodoList';
import Header from './Components/Header';
import TodoInputForm from './Components/TodoInputForm';
import './App.css';

class App extends Component {
  state = {
    todos: [],
    todo: ''
  }

  componentDidMount() {
    const data = localStorage.getItem('todos')
    const todoList = JSON.parse(data)
    this.setState({ todos: todoList })
    if (!data) {
      this.setState({
        todos: []
      })
    }
  }
  
  componentDidUpdate(prevProps, prevStates){
    const data = JSON.stringify(this.state.todos)
    localStorage.setItem('todos', data);
  }

  inputHandler = (e) => {
    this.setState({
      todo: e.target.value
    })
  }

  addTodo = (e) => {
    e.preventDefault();
    const id = Date.now();
    this.setState({
      todos: [
        {
          name: this.state.todo,
          id,
          done: false
        },
        ...this.state.todos
      ],
      todo: ''
    })
  }

  toggleTodo = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            id: todo.id,
            name: todo.name,
            done: !todo.done
          } 
        } else {
          return todo;
        }
      })
    })
  }

  deleteTodo = (id) => {
     this.setState({ 
        todos: this.state.todos.filter(item => item.id !== id)
      });
  }
  
  render() {
    return (
      <div className="App">

        <Header /> 

        <TodoInputForm  
          inputHandler={this.inputHandler} 
          addTodo={this.addTodo} 
          todo={this.state.todo} 
        />

        <TodoList 
          todos={this.state.todos} 
          deleteTodo={this.deleteTodo} 
          toggleTodo={this.toggleTodo}
        />

      </div>
    )
  }
}

export default App;
