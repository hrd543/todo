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


const TodoItem = ({id, text, complete, onTextChange, onCompleteChange, onDelete}) => {
  const [isReadOnly, setIsReadOnly] = useState(true); // Is the text box editable?
  const todoRef = useRef(null); // Access the TodoItem in order to check for clicks outside

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
      <Input type="checkbox" checked={complete} onChange={() => onCompleteChange(id)} />
      <TodoText ref={todoRef} type="text" value={text} onChange={(e) => onTextChange(id, e.target.value)} readOnly={isReadOnly} />
      <Button onClick={() => onDelete(id)}>Delete</Button>
      <Button onClick={() => setIsReadOnly(false)}>Edit</Button>
    </Div>
  );
}

export default TodoItem;