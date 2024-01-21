import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const InvalidInput = forwardRef(function ({}, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  function handleClose() {
    document.querySelector("#root").classList.remove("dialog-open");
  }

  return createPortal(
    <dialog ref={dialog} className="invalid-input" onClose={handleClose}>
      <h2>Invalid Input</h2>
      <p>Oops ... looks like you forgot to enter a value.</p>
      <p>Please make sure you provide a valid value for every input field.</p>
      <form method="dialog">
        <button onClick={handleClose} className="ok-btn">
          OK
        </button>
      </form>
    </dialog>,
    document.querySelector("#modal-root"),
  );
});

export default InvalidInput;
