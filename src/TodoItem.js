import React, { useEffect, useState, useRef } from "react";
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
`;

const TodoText = styled.input`
  border: solid;
  flex: 1;
`;

const Input = styled.input`
  flex: 0;
`;

const Button = styled.button`
  flex: 0;
`;

// I think i need to add an onChange method to the text input form, and also some sort of readonly
// property which could be en/disabled with the click of an edit button.

const TodoItem = () => {
	// We want two states attached, a checkbox of whether the task is done, and the task string itself.
	const [complete, setComplete] = useState(0); // 0 for no, 1 for yes.
  const [todo, setTodo] = useState("a");
  const [isReadOnly, setIsReadOnly] = useState(true);
  const todoRef = useRef(null);

  const handleInputChange = (e) => {
    setTodo(e.target.value);
    console.log(e.target.value);
  }

  // On the very first render (hence the [] as the second argument), add an event listener to the document
  // to check whether the TodoText has been clicked (i.e. if it is being edited and clicked off, it returns
  // to read only.)
  // The return is so that the event listener is removed once the todo item is deleted.
  useEffect(() => {
    const finishEditing = (e) => {if (e.target !== todoRef.current) setIsReadOnly(true)};
    document.addEventListener("click", finishEditing, true);

    return () => {
      document.removeEventListener("click", finishEditing, true);
    }
  }, []);

	return (
		<Div>
			<Input type="checkbox" checked={complete} onChange={() => setComplete(!complete)} />
			<TodoText ref={todoRef} type="text" value={todo} onChange={handleInputChange} readOnly={isReadOnly} />
	    <Button onClick={(e) => console.log(complete)}>Delete</Button>
      <Button onClick={() => setIsReadOnly(false)}>Edit</Button>
		</Div>
	);
}

export default TodoItem;