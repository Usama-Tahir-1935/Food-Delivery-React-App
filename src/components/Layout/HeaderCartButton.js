import React, { useContext, useEffect,useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from './../Cart/CartIcon';
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    
    const cartCtx = useContext(CartContext);

    // yai hum Object Destructring ka use kr rhy hai jo kay brwoser mai uneccessary trafic ko rokny mai help krta hai.
    const { items } = cartCtx;

    // yaha pr hum number of cart ko cart-context sai update krwa rahy hai..."reduce" aik JS a built in method hai jo kay aik array ko variable mai store krwaany mai help lrta hai...or hum yaha pr items ko aik variable mai store krwaa rahy hai like "numberOfCartItems"
    const numberOfCartItems = items.reduce ((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);  
    
    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump: ''}`;

    // "useEffect" hum side effect ko control krny kay liay use krty hai...jo kay hmaary component kay baahir jo kaam krwana hota hai wo useEffect sai krwaaty hai...or is kay andr hum nai call function ka use kr rhy hai is ka use hum is liay krty hai yai humay uneccery traffic sai bachaata hai...like hmara component jaisy hi koi props ya state change hoti hai hmama component cal hota hai to sideeffect automatically cal hota hai is tarah useeffect baar baar cal ho ga or uneccessary traffic mai izafa hota hai browser mai is sai bachny kay liay hum call function ka use krty hai.
    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);
    
        const time = setTimeout(() => {
            setBtnIsHighlighted(false);    
        }, 300);

        return () => {
            clearTimeout(time);
        };
    }, [items])

    return (
        // yaha pr hum icon ko show krwaany kay liay aik alg component mai js code save krwaya hai or yaha pr is "<CartIcon/>" ko cal kr kay use kr rhy hai.
        <button className={btnClasses} onClick={props.onClick}>
            <div className={classes.icon}><CartIcon/></div>
            <div>
                <span>Your Cart</span>
                <span className={classes.badge}>{numberOfCartItems}</span>
            </div>
        </button>
    );
};

export default HeaderCartButton;

