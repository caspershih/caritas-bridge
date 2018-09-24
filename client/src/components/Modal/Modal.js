import React from "react";
import "./Modal.css";

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
        <div className="modal-main">
        <div className="modalClose" aria-label="Close Account Info Modal Box" onClick={handleClose}>&times;</div>
        {children}
        </div>
        </div>
    );
};

export default Modal;