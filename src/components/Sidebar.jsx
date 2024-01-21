import ProjectList from "./ProjectList.jsx";

export default function Sidebar({
  addHandler,
  selectHandler,
  saveHandler,
  clearHandler,
}) {
  return (
    <aside className={"aside"}>
      <header>
        <h2>Your projects</h2>
      </header>

      <button className={"add-project-btn"} onClick={addHandler}>
        + Add Project
      </button>

      <ProjectList selectHandler={selectHandler}></ProjectList>

      <div className="sidebar-btn-container">
        <button className="save-proj-btn" onClick={saveHandler}>
          Save
        </button>
        <button className="clear-proj-btn" onClick={clearHandler}>
          Clear All
        </button>
      </div>
    </aside>
  );
}
