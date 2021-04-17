import React, { useState, useEffect } from "react";
import "./styles.css";
import Form from "./components/Form.jsx";
import ToDoList from "./components/ToDoList.jsx";

export default function App() {
  const [textInput, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filtered, setFiltered] = useState([]);

  function filterHandler() {
    switch (status) {
      case "completed":
        setFiltered(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFiltered(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFiltered(todos);
        break;
    }
  }

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  return (
    <div className="App">
      <header>
        <h1>To-Do List</h1>
      </header>
      <Form
        textInput={textInput}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
        status={status}
      />
      <ToDoList filter={status} todos={filtered} setTodos={setTodos} />
    </div>
  );
}
