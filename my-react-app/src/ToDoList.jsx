import React, { useState } from "react";

function ToDoList() {
  const [task, setTask] = useState([]);

  function addTask() {
    const data1 = document.getElementById("idOne");
    setTask((c) => [...c, data1]);
  }

  return (
    <>
      <h1>To Do List</h1>
      <ul>
        {task.map((cars, index) => (
          <li key={index}></li>
        ))}
      </ul>
      <form action="">
        <input type="text" placeholder="Tasks" value={task} id="idOne" />
        <button type="" onClick={addTask}>
          {/* Added e.preventDefault() inside the addCar function to prevent the form from reloading the page. */}
          Add
        </button>
      </form>
    </>
  );
}

export default ToDoList;
