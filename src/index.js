import React from "react";
import ReactDOM from "react-dom";
import TodoItem from "./TodoItem";

const element = <TodoItem name="Henry"></TodoItem>;

ReactDOM.render(element, document.getElementById("root"));