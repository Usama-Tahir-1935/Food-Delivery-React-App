import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
    return (
        // yaha pr hum props sai or bhe data access kr skty thay lkin {...props.input} sai bhe hum all data access kr skty hai is sai code clean hai or humay har chz ko declare nhe krna parra props ki help sai
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input}/>
        </div>
    );
});

export default Input;