import React, { useState } from "react";

function TaskManagement() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (task) {
      setTasks([...tasks, { name: task, completed: false }]);
      setTask("");
    }
  };

  const handleToggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Task Management</h2>
      <input 
        type="text" 
        placeholder="Enter Task" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            {task.name}
            <button onClick={() => handleToggleTask(index)}>
              {task.completed ? "Undo" : "Complete"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManagement;
