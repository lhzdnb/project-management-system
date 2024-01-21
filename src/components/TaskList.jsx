export default function TaskList({ tasks, handleClear }) {
  console.log(tasks);

  return tasks.map((task, index) => {
    return (
      <div key={index} className="task-row">
        <span>{task}</span>
        <button onClick={() => handleClear(index)} className="clear-btn">
          Clear
        </button>
      </div>
    );
  });
}
