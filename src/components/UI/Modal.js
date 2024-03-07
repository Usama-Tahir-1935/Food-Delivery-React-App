import React, { Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const BackDrop = (props) => {
    // "BackDrop" hum is liay use kr rhy hai kay jb bhe cart show ho ga usay hum cose button pr click kr kay bhe cancel kr skty hai or agr hum kahi bhe website pr click kry or hum chahty hai kay hmara cart cancel ho jay to is kay liay hum nai backdrop ka use kia hai.
    return (
        <div className={classes.backdrop} onClick={props.onClose}/>
    );
};

const ModalOverlays = (props) => {
    return (
        // "{props.children}" hum nai is liay use kia hai kay jaha bhe hum modal use kry gay humay as a wrap component use krna ho ga is liay us kay andr jo bhe data ho ga wo automatic children mai store ho jata hai or props.children ki help sai qo automatic acces kr laita hai component react kau andr.
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return (
        <Fragment>
            { ReactDOM.createPortal(<BackDrop onClose={props.onClose}/>, portalElement) }
            { ReactDOM.createPortal(<ModalOverlays>{props.children}</ModalOverlays>, portalElement)} 
        </Fragment>
    );
};

export default Modal;