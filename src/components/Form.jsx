import React from "react";

function Form(props) {
  function inputTextHandler(e) {
    props.setInputText(e.target.value);
  }

  function sumbitTodoHandler(event) {
    event.preventDefault();
    props.setTodos([
      ...props.todos,
      { text: props.textInput, completed: false, id: Math.random() * 1000 }
    ]);
    props.setInputText("");
  }

  function statusHandler(event) {
    props.setStatus(() => {
      return event.target.value;
    });
    //    props.setFilter(() => {
    //     if (event.target.value === "completed") {
    //        return "completed";
    //      } else if (event.target.value === "uncompleted") {
    //        return "uncompleted";
    //      } else if (event.target.value === "all") {
    //       return "all";
    //     }
    //  });
  }

  return (
    <form>
      <input
        value={props.textInput}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={sumbitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
