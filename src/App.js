import "./styles.css";
import Input from "./Input";
import Todos from "./Todos";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const [filteredTodos, setFitleredTodos] = useState([]);

  useEffect(() => {
    getLocalStorage();
  
  }, []);

  useEffect(() => {
    saveToLocalStorage();
    filterHandler();
  }, [todos, status]);

  const saveToLocalStorage = () => {
    localStorage.setItem("todos",JSON.stringify(todos));

  };
  const getLocalStorage = () => {
      if (localStorage.getItem('todos') === null){
        localStorage.setItem("todos", JSON.stringify([]))
      }else {
        setTodos(JSON.parse(localStorage.getItem('todos')))
      }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");

    if (input === "") {
      setError("Input field cannot be empty, please add todo.");
    } else {
      setTodos([
        ...todos,
        { complete: false, todoValue: input, todoId: uuidv4() }
      ]);
      setError("");
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.todoId !== id));
  };
  const handleComplete = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.todoId === id) {
          return { ...item, complete: !item.complete };
        }
        return item;
      })
    );
  };
  const dropdownHandler = (e) => {
    setStatus(e.target.value);
  };

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFitleredTodos(todos.filter((todo) => todo.complete === true));
        break;
      case "notCompleted":
        setFitleredTodos(todos.filter((todo) => todo.complete !== true));
        break;
      default:
        setFitleredTodos(todos);
    }
  };

  return (
    <div className="App">
      <Input
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        handleSubmit={handleSubmit}
        dropdownHandler={dropdownHandler}
      />

      <p>{error}</p>
      <Todos
        todos={todos}
        setTodos={setTodos}
        deleteTodo={deleteTodo}
        handleComplete={handleComplete}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}
