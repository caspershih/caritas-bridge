import React from "react";
import "./Modal.css";

const Modal = ({ handleClose, show, children }) => {
    const shwowHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={shwowHideClassName}>
        <section className="modal-main">
        {children}
        <button id="submitbtn" onClick={handleClose}>Submit</button>
        </section>
        </div>
    );
};

export default Modal;