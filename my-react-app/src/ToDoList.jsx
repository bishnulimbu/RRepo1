import React, { useState } from "react";

function ToDoList() {
  const [task, setTask] = useState(["one", "two"]);

  function addTask(e) {
    const data1 = document.getElementById("idOne").value;
    if (data1.trim !== "") {
      setTask((t) => [...t, data1]);
      e.preventDefault();
    }
  }
  // function fnOne(e) {
  //   setTask(e.target.value);
  // }
  function Del(index) {
    const data2 = task.filter((_, i) => i != index);
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
    const array1 = [...task];
    [array1[index], array1[index + 1]] = [array1[index + 1], array1[index]];
    setTask(array1);
  }

  return (
    <>
      <h1>To Do List</h1>
      <ul>
        {task.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => fnUp(index)}>Up</button>
            <button onClick={() => fnDown(index)}>Down</button>
            <button onClick={() => Del(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <form action="">
        <input
          type="text"
          placeholder="Tasks"
          id="idOne"
          // onChange={(e) => fnOne(e)}
        />
        <button type="" onClick={(e) => addTask(e)}>
          Add
        </button>
      </form>
    </>
  );
}

export default ToDoList;
