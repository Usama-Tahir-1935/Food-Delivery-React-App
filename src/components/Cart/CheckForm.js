import React from "react";
import classes from "./CheckForm.module.css";
import useInput from "../../hooks/user-input";

const isEmpty = value => value.trim() !== '';
const isNotFiveChars = value => value.trim().length !== 5;

const CheckForm = (props) => {
    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetName
    } = useInput(isEmpty);

    const {
        value: enteredStreet,
        isValid: enteredStreetIsValid,
        hasError: streetInputHasError,
        valueChangeHandler: streetChangeHandler,
        inputBlurHandler: streetBlurHandler,
        reset: resetStreet
    } = useInput(isEmpty);

    const {
        value: enteredPostalCode,
        isValid: enteredPostalCodeIsValid,
        hasError: postalCodeInputHasError,
        valueChangeHandler: postalCodeChangeHandler,
        inputBlurHandler: postalCodeBlurHandler,
        reset: resetPostalCode
    } = useInput(isNotFiveChars);

    const {
        value: enteredCity,
        isValid: enteredCityIsValid,
        hasError: cityInputHasError,
        valueChangeHandler: cityChangeHandler,
        inputBlurHandler: cityBlurHandler,
        reset: resetCity
    } = useInput(isEmpty);

    let formIsValid = false;
    if (enteredNameIsValid && enteredStreetIsValid && enteredPostalCodeIsValid && enteredCityIsValid) {
        formIsValid = true;
    };

    const confirmHandler = (event) => {
        event.preventDefault();

        if (!enteredCityIsValid && !enteredStreetIsValid && !enteredPostalCodeIsValid && !enteredCityIsValid){
            return;
        }

        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            postalCode: enteredPostalCode,
            city: enteredCity
        });

        resetName();
        resetStreet();
        resetPostalCode();
        resetCity();
    };

    const nameControlClasses = `${classes.control} ${!nameInputHasError ? '' : classes.invalid}`
    const streetControlClasses = `${classes.control} ${!streetInputHasError ? '' : classes.invalid}`
    const postalCodeControlClasses = `${classes.control} ${!postalCodeInputHasError ? '' : classes.invalid}`
    const cityControlClasses = `${classes.control} ${!cityInputHasError ? '' : classes.invalid}`

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={nameControlClasses}>
                <label htmlFor="name">Your Name</label>
                <input id="name" type="text" value={enteredName} onChange={nameChangeHandler} onBlur={nameBlurHandler}/>
                { nameInputHasError && <p className={classes['error-text']}>Name must no be empty.</p> }
            </div>
            <div className={streetControlClasses}>
                <label htmlFor="street">Street</label>
                <input id="street" type="text" value={enteredStreet} onChange={streetChangeHandler} onBlur={streetBlurHandler}/>
                { streetInputHasError && <p className={classes['error-text']}>Street must not be empty.</p> }
            </div>
            <div className={postalCodeControlClasses}>
                <label htmlFor="postal">Postal Code</label>
                <input id="postal" type="text" value={enteredPostalCode} onChange={postalCodeChangeHandler} onBlur={postalCodeBlurHandler}/>
                { postalCodeInputHasError && <p className={classes['error-text']}>Postal Code must not be empty.</p>}
            </div>
            <div className={cityControlClasses}>
                <label htmlFor="city">City</label>
                <input id="city" type="text" value={enteredCity} onChange={cityChangeHandler} onBlur={cityBlurHandler}/>
                { cityInputHasError && <p className={classes['error-text']}>City must not be empty.</p>}
            </div>
            <div className={classes.actions}>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button disabled={!formIsValid} className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default CheckForm;