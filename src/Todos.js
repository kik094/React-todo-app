import React from "react";
import { FaCheck, FaTrash } from "react-icons/fa";

const Todos = ({ deleteTodo, handleComplete, filteredTodos }) => {
  return (
    <div className="todos-container">
      {filteredTodos.map(({ todoId, todoValue, complete }) => (
        <div className={`todo-box ${complete ? "complete" : ""}`} key={todoId}>
          <h2 className="todo-box-h2">{todoValue}</h2>
          <div className="buttons-wrapper">
            <p onClick={() => handleComplete(todoId)} className="todo-button">
              <FaCheck />
            </p>
            <p className="todo-button" onClick={() => deleteTodo(todoId)}>
              <FaTrash />
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todos;
