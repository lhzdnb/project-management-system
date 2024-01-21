import NoProject from "../assets/no-projects.png";

export default function NoProjectSelected({ createHandler }) {
  return (
    <section className={"section-no-project"}>
      <img
        src={NoProject}
        alt="A pan and a paper"
        className={"no-project-img"}
      />
      <h2>No Project Selected</h2>
      <p>Select a project or get started with a new one</p>

      <button className={"create-project-btn"} onClick={createHandler}>
        Create new project
      </button>
    </section>
  );
}
