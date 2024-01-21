import projectData from "../tasks.js";

export default function ProjectList({ selectHandler }) {
  const projectList = projectData.map((project, index) => {
    return (
      <button
        key={index}
        className={"project"}
        onClick={() => {
          selectHandler(index + 1);
        }}
      >
        {project.title}
      </button>
    );
  });

  return <div className="project-list">{projectList}</div>;
}
