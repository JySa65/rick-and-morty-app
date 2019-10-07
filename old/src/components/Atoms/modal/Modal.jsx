import React from "react";
import { createPortal } from "react-dom";

const Modal = props => {
  if (!props.isOpen) {
    return null;
  }

  return createPortal(
    <div className="Modal">
      <div className="Modal__container">
        <button onClick={props.onClose} className="Modal__close-button">
          X
        </button>

        {props.children}
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
