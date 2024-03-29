import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from './../../../store/cart-context';

const MealItem = (props) => {
    const cartCtx = useContext(CartContext);

    const price = `$${props.price.toFixed(2)};`;

    // "addToCartHandler" mai hum nai cartCtx,addItems ka use is liay kia hai kay user ho bhe items ko add kry wo id name amount or price 
    const addToCartHandler = (amount) => {
        cartCtx.addItems({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    };

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm onAddToCart = {addToCartHandler}/>
            </div>
        </li>
    );
};

export default MealItem;