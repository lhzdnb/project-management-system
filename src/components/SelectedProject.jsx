import projectData from "../tasks.js";
import { useRef, useState } from "react";
import TaskList from "./TaskList.jsx";

const options = {
  year: "numeric",
  month: "short",
  day: "numeric",
};

export default function SelectedProject({ index, handleDeleteProj }) {
  const project = projectData[--index];
  const date = new Date(project.dueDate).toLocaleDateString(
    navigator.language,
    options,
  );
  const [tasks, setTasks] = useState([...projectData[index].tasks]);
  const taskRef = useRef();
  function handleAddTask() {
    const taskValue = taskRef.current.value;
    if (taskValue) {
      // Check if the task is not empty
      projectData[index].tasks = [...projectData[index].tasks, taskValue]; // Update the tasks
      setTasks([...projectData[index].tasks]); // Update the state
      taskRef.current.value = "";
    }
  }

  function handleClear(i) {
    const newTasks = tasks
      .map((task, taskIndex) => {
        if (i !== taskIndex) return task;
      })
      .filter((element) => element !== undefined);
    console.log(newTasks);
    projectData[index].tasks = [...newTasks];
    setTasks([...projectData[index].tasks]);
  }

  return (
    <section className="section-project">
      <header>
        <div className="title-container">
          <h1 className="project-title">{project.title}</h1>
          <button
            className="delete-btn"
            onClick={() => handleDeleteProj(index)}
          >
            Delete
          </button>
        </div>
        <p className="project-date">{date}</p>
        <p className="project-desc">{project.description}</p>
      </header>
      <div>
        <h2 className="tasks-header">Tasks</h2>
        <div>
          <input type="text" required ref={taskRef} className="task-input" />
          <button onClick={handleAddTask} className="add-task-btn">
            Add Task
          </button>
        </div>
      </div>

      {tasks.length ? (
        <li className="tasks-list">
          <TaskList
            tasks={[...projectData[index].tasks]}
            handleClear={handleClear}
          ></TaskList>
        </li>
      ) : (
        <p className="no-task">This project does not have any tasks yet.</p>
      )}
    </section>
  );
}
