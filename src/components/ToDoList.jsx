import React from "react";
import Todo from "./Todo";

function ToDoList({ status, todos, setTodos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => {
          return (
            <Todo
              todos={todos}
              setTodos={setTodos}
              key={todo.id}
              id={todo.id}
              text={todo.text}
              todo={todo}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ToDoList;
