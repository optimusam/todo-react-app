import React from 'react'
import './Todos.css'

function Todos({list, deleteTodo}) {
  let todos = list.map(todo => {
    return <li key={todo.id} className="collection-item">{todo.content}   
      <button className="btn-floating center btn-small waves-effect waves-light red" onClick={() => deleteTodo(todo.id)}><i className="material-icons">clear</i></button></li>
  })
  return(
    todos.length ? 
    <ul className="todos collection">
      {todos}
    </ul>
    : <p>Wohoo! No Todo's left!</p>
  )
}
export default Todos