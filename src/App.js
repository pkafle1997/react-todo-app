import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {

  const [todos, setTodos] = useState([])
    
  const checkTodo = (id) => {
    setTodos(todos.map((todo) => {
      if(todo.id === id) todo.isCompleted = !todo.isCompleted;
        return todo;
      
    }))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const addTodo = (text) => {
    const newTodo = {
      id: uuid(),
      title: text,
      isCompleted: false,
    }
    setTodos([...todos, newTodo])
  }

  return (
    <div>
      <center><h1 style={{color:"#CF5A41 ", fontSize:"3vw"}}>Todo App</h1></center>
      <TodoForm addTodo = {addTodo}/>
      <TodoList todos = {todos} checkTodo = {checkTodo} deleteTodo = {deleteTodo}/>
    </div>
  );
}

export default App;
