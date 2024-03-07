import React from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    // "HeaderCartButton" ko hum nai alg bna kr use kia hai hum yaha bhe bnaa skty thay lkin code typical or lengthy ho jata is liay hum nai alg component use kia hai.
    // "assets" hum nai alg folder bnaa kr us mai pic store krwaai hai or yaha pr usay cal kr kay use kia hai.
    return (
        <div>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick = {props.onAddToShow}/> 
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="A table with full of delicious."/>
            </div>
        </div>
    );
};

export default Header;