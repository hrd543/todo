import React, { useEffect, useState } from "react";
import styled from 'styled-components';

const NewTodo = ({onNewTodo}) => {
  const [todoText, setTodoText] = useState("");

  const addNewTodo = () => {
    // Some sort of error correction here.
    if (todoText.length === 0) alert("Please enter a todo.")
    else{
      onNewTodo(todoText);
      setTodoText("");}
  }

  return (
    <div>
      <input type="text" value={todoText} onChange={(e) => setTodoText(e.target.value)}/>
      <button onClick={addNewTodo}>+</button>
    </div>
  )
}

export default NewTodo;