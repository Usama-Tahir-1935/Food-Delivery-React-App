import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        // yaha pr hum nai useref ka use kia hai is ki jagha hum use sai input lay kr usestate sai bhe store krwaa skty thay lkin wo lenghthy way ho jatahai or hum wo us waqt use krty hai jb hum dynamic page bnanaa hota hai lkin is mai hum sirf static bnaa rhy hai is liay useRef ka use kr rhy hai.useRef humay DOM sai direct accessability provide krta hai.
        const enteredAmount = amountInputRef.current.value;
        // yaha pr current.value hai na wo string value laita hai even kay wo number hi Q na ho wo phr bhe string lay ga is liay hum nai +lgaa kr usay number kr dia.
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input 
            ref={amountInputRef}
            label="Amount"
            input = {{
                id: 'amount',
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }}
            />
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
        </form>
    );
};

export default MealItemForm;