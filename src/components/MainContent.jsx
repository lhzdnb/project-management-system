import CreateProject from "./CreateProject.jsx";
import { useState } from "react";
import NoProjectSelected from "./NoProjectSelected.jsx";
import SelectedProject from "./SelectedProject.jsx";

export default function MainContent({
  addProject,
  handleCancel,
  handleCreateTask,
  projectSelected,
  handleDeleteProject,
}) {
  if (addProject) {
    return <CreateProject cancelHandler={handleCancel}></CreateProject>;
  }
  if (projectSelected) {
    return (
      <SelectedProject
        index={projectSelected}
        handleDeleteProj={handleDeleteProject}
      ></SelectedProject>
    );
  } else {
    return (
      <NoProjectSelected createHandler={handleCreateTask}></NoProjectSelected>
    );
  }
}
