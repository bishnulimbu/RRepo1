import React, { useState } from "react";
import "./todolist.css";

function ToDoList() {
  const [task, setTask] = useState(["one", "two"]);

  function addTask(e) {
    const data1 = document.getElementById("idOne").value;
    if (data1.trim() !== "") {
      setTask((t) => [...t, data1]);
      e.preventDefault();
      document.getElementById("idOne").value = ""; // Clear input after adding
    }
  }

  function Del(index) {
    const data2 = task.filter((_, i) => i !== index);
    setTask(data2);
  }

  function fnUp(index) {
    if (index > 0) {
      const array1 = [...task];
      [array1[index], array1[index - 1]] = [array1[index - 1], array1[index]];
      setTask(array1);
    }
  }

  function fnDown(index) {
    if (index < task.length - 1) {
      const array1 = [...task];
      [array1[index], array1[index + 1]] = [array1[index + 1], array1[index]];
      setTask(array1);
    }
  }

  return (
    <div className="todo-container">
      <h1 className="todo-header">To Do List</h1>
      <ul className="todo-list">
        {task.map((task, index) => (
          <li key={index} className="todo-item">
            {task}
            <button className="btn btn-up" onClick={() => fnUp(index)}>
              Up
            </button>
            <button className="btn btn-down" onClick={() => fnDown(index)}>
              Down
            </button>
            <button className="btn btn-delete" onClick={() => Del(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <form className="todo-form" action="">
        <input
          type="text"
          placeholder="Tasks"
          id="idOne"
          className="todo-input"
        />
        <button className="btn btn-add" onClick={(e) => addTask(e)}>
          Add
        </button>
      </form>
    </div>
  );
}

export default ToDoList;
