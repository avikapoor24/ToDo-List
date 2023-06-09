import React from 'react';
import { useState } from 'react';
import ToDoForm from './ToDoForm'

export default function ToDoList() {

    //state that holds all Todos
    const [todos, setTodos] = useState([]);
   
     //Add Todo to list
    const addTask = task => {
        if (!task.text) {
            return
        }
        const newTodos = [task, ...todos];
        setTodos(newTodos);
    }

    //remove Todo from list
    const removeTask = id => {
        let updatedTasks = [...todos].filter(task => task.id !== id)
        setTodos(updatedTasks)
    }
    //task is completed
    const completedTask = id => {
        let updatedTasks = todos.map(todo =>
        {
            if (todo.id === id) {
                todo.isComplete = true;
            }
            return todo;
        })
        setTodos(updatedTasks)
    }

  return (
      <div>
          <ToDoForm addTask={addTask}></ToDoForm>
          <Todo todos={todo} completedTask={completedTask} removeTask={removeTask} ></Todo>
    </div>
  )
}
