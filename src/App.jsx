import Sidebar from "./components/Sidebar.jsx";
import { useState } from "react";
import MainContent from "./components/MainContent.jsx";
import projectData from "./tasks.js";

function App() {
  const [createProject, setCreateProject] = useState(false);
  const [projectSelected, setProjectSelected] = useState(false);
  function handleSelectProject(index) {
    setProjectSelected(index);
    setCreateProject(false);
  }
  function handleCreateTask() {
    setCreateProject(true);
  }

  function handleCancel() {
    setCreateProject(false);
    setProjectSelected(false);
  }

  function deleteProject(index) {
    const projectList = [...projectData]
      .map((proj, i) => {
        if (index !== i) return proj;
      })
      .filter((proj) => proj !== undefined);
    projectData.splice(index, 1);

    setCreateProject(false);
    setProjectSelected(false);
  }

  function handleSave() {
    localStorage.setItem("projects", JSON.stringify(projectData));
  }

  function clearProjects() {
    localStorage.clear();
    projectData.splice(0, projectData.length);
    setCreateProject(false);
    setProjectSelected(false);
  }

  return (
    <main className={"main"}>
      <Sidebar
        addHandler={handleCreateTask}
        selectHandler={handleSelectProject}
        saveHandler={handleSave}
        clearHandler={clearProjects}
      ></Sidebar>
      <MainContent
        addProject={createProject}
        handleCancel={handleCancel}
        handleCreateTask={handleCreateTask}
        projectSelected={projectSelected}
        handleDeleteProject={deleteProject}
      ></MainContent>
    </main>
  );
}

export default App;
