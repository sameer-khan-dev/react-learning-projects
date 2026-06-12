import { useState } from 'react'
import './App.css'
import { v4 as uuidv4 } from "uuid";

function App() {
  let [todos,setTodos]=useState([{task: "sample-task", id: uuidv4()}]);
  let [newTodo,setNewTodo]=useState("");
  let addNewTodo=()=>{
    if (!newTodo.trim()) return;
    setTodos([...todos,{task: newTodo, id: uuidv4()}]);
    setNewTodo("");
  }
  let updateTodoValue=(event)=>{
    setNewTodo(event.target.value);
  }
  let deleteTodo=(id)=>{
    setTodos((prevTodos)=>prevTodos.filter((todo)=> todo.id !==id)
    );
  }
  let toUpperCase=()=>{
    setTodos((prevTodos)=>
      prevTodos.map((todo)=>{
        return{...todo,task: todo.task.toUpperCase()};
      })
    )
  }
  let toLowerCase=()=>{
    setTodos((prevTodos)=>
    prevTodos.map((todo)=>{
      return {...todo,task: todo.task.toLowerCase()}
    })
    )
  }
  return (
    <>
     <br />
     <input placeholder='Enter a task...' value={newTodo} onChange={updateTodoValue} />
     <button onClick={addNewTodo}>Add task</button>
     <h4>Tasks Todo:</h4>
     
     <ul>
      {todos.map((todo)=>{
       return <li key={todo.id}>{todo.task} <button onClick={()=>deleteTodo(todo.id)} style={{color: "red"}}>X</button></li>
      })}
     </ul>
     <br />
     <button onClick={toUpperCase}>UpperCase</button>
     &nbsp;
     <button onClick={toLowerCase}>LowerCase</button>
    </>
  )
}

export default App
