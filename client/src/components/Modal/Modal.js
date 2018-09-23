import React from "react";
import "./Modal.css";

const Modal = ({ handleClose, show, children }) => {
    const shwowHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={shwowHideClassName}>
        <section className="modal-main">
        <div class="modalClose" aria-label="Close Account Info Modal Box" onClick={handleClose}>&times;</div>
        {children}
        </section>
        </div>
    );
};

export default Modal;