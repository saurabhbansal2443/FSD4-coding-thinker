import React from "react";
import { useState } from "react";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [taskArray, setTaskArray] = useState([]);

  const handleTextChange = (e) => {
    // console.log(e.target.value);
    setTask(e.target.value);
  };

  const handleClick = () => {
    setTaskArray([...taskArray, { task: task, id: Date.now() }]);
    setTask("");
  };

  const handleDelete = (id) => {
    let filteredTask = taskArray.filter((taskObj) => taskObj.id !== id);
    setTaskArray(filteredTask);
  };

  return (
    <div style={style.root}>
      {console.log(taskArray, task)}
      <div style={style?.inputContainer}>
        <input
          onChange={handleTextChange}
          type="text"
          style={style.input}
          value={task}
        />
        <button onClick={handleClick} style={style.btn}>
          Add
        </button>
      </div>

      {taskArray.map((taskObj) => (
        <div key={taskObj.id} className="container" style={style?.container}>
          <p style={style?.text}>{taskObj.task}</p>
          <button
            onClick={() => {
              handleDelete(taskObj.id);
            }}
            style={{ ...style.btn, backgroundColor: "#f83d3dff" }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;

const style = {
  root: {
    padding: "5vh 10vw",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f6f9",
    minHeight: "100vh",
  },

  inputContainer: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },

  input: {
    flex: 1,
    padding: "12px 14px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
    outline: "none",
    transition: "0.2s",
  },

  btn: {
    padding: "12px 20px",
    backgroundColor: "#4A90E2",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "0.2s",
  },

  container: {
    padding: "15px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    marginTop: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  text: {
    margin: 0,
    fontSize: "18px",
    color: "#333",
  },
};
