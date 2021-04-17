import React from "react";

function Todo({ todo, setTodos, todos, text, id }) {
  //Events of completion and deletion of todos
  function deleteTodo() {
    setTodos(() => {
      return todos.filter((element) => {
        return element.id !== id;
      });
    });
  }

  function completeTodo() {
    setTodos(() => {
      return todos.map((element) => {
        if (element.id === todo.id) {
          return {
            ...element,
            completed: !element.completed
          };
        }
        return element;
      });
    });
  }
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : null}`}>
        {text}
      </li>
      <button onClick={completeTodo} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteTodo} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;
