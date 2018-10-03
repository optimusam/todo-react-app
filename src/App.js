import React, { Component } from 'react'
import AddTodo from './AddTodo'
import Todos from './Todos'
class App extends Component {
  
  state = {
    todos: [
      {id:1, content: 'have a nice day!'},
      {id:2, content: '<3'}
    ]
  }
  deleteTodo = (id) => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.filter(todo => {
          return todo.id!==id
        })
      }
    })
  }
  addTodo = todo => {
    this.setState({
      todos: this.state.todos.concat(todo)
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">TODO's</h1>
        <AddTodo addTodo={this.addTodo} />
        <Todos list={this.state.todos} deleteTodo={this.deleteTodo}/>
      </div>
    )
  }
}

export default App;
