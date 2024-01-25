import { useState } from 'react'
import './App.css'
import { CreatTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const[todos,setTodos]= useState([]);

  fetch("http://localhost:3000/todos")
  .then(async function(res){
    const json = await res.json();
    setTodos(json.todos);
  })

  return <div>
    <CreatTodo></CreatTodo>
    <Todos todos={todos}></Todos>
  </div>
}

export default App
