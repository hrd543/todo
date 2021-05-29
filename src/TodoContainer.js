import React, { useState } from "react";
import styled from 'styled-components';
import TodoItem from "./TodoItem";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  align-items: center;
`;

const TodoContainer = () => {
  const [todos, setTodos] = useState([{text: "hello", id: 0, complete: true}, {text:"number2", id:1, complete:false}]);

  const handleTextChange = (index, text) => {
    // Change the text property on only the index-th todo element.
    setTodos(todos.map((e, i) => (i === index) ? {...e, text} : e));
  };

  const handleCompleteChange = (index) => {
    // Negate the complete property on only the index-th todo element.
    setTodos(todos.map((e, i) => (i === index) ? {...e, complete:!e.complete} : e));
  }

  const handleDelete = (index) => {
    // Remove the index-th todo
    setTodos(todos.filter((_,i) => i !== index));
  }

  return (
    <Div>
      {todos.map(e => <TodoItem key={e.id} id={e.id} text={e.text} complete={e.complete} onTextChange={handleTextChange} onCompleteChange={handleCompleteChange} onDelete={handleDelete} />)}
    </Div>
  );
}

export default TodoContainer;