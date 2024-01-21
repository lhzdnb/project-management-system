import projectData from "../tasks.js";
import { useImperativeHandle, useRef } from "react";
import InvalidInput from "./InvalidInput.jsx";

export default function CreateProject({ cancelHandler }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();
  const dialog = useRef();

  function handleSave() {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const dueDate = dueDateRef.current.value;

    if (title === "" || description === "" || dueDate === "") {
      dialog.current.open();
      document.querySelector("#root").classList.add("dialog-open");
      return;
    }

    projectData.push({
      title: title,
      description: description,
      dueDate: dueDate,
      tasks: [],
    });
    console.log(projectData);
    cancelHandler();
  }

  return (
    <>
      <InvalidInput ref={dialog}></InvalidInput>
      <section className={"section-create-project"}>
        <div className="btn-container">
          <button className="cancel-button" onClick={cancelHandler}>
            Cancel
          </button>
          <button className="save-button" onClick={handleSave}>
            Save
          </button>
        </div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleRef} required />
        <label htmlFor="description">Description</label>
        <textarea id="description" ref={descriptionRef} required />
        <label htmlFor="date">Due Date</label>
        <input type="date" id="date" ref={dueDateRef} required />
      </section>
    </>
  );
}
