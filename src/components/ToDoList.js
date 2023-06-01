import React from 'react';
import { useState } from 'react';
import ToDoForm from './ToDoForm'

export default function ToDoList() {

    //state that holds all Todos
    const [todos, setTodos] = useState([]);
   
     //Add Todo to list
    const addTask = task =>
    {
        if (!task.text) {
            return
        }
        const newTodos = [task, ...todos];
        setTodos(newTodos);
        }
    //remove Todo from list

    //task is completed
    
  return (
      <div>
          <ToDoForm addTask={addTask}></ToDoForm>
    </div>
  )
}
