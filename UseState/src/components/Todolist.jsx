import React, { useState } from 'react';

const Todolist = () => {
  const [task, setTask] = useState("");
  const [tasklist, setTasklist] = useState([]);

  const Add = () => {
    if (task.trim() !== "") {
      setTasklist([...tasklist, task]);
      setTask("");
      console.log(setTask,"value")
    }
  };

  return (
    <div>
      <h2>Hello To-Do List</h2>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={Add}>ADD</button>

      <ul>
        {tasklist.map((i    ) => (
          <li>{i}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
