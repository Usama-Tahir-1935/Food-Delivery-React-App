import React from "react";

// "CartContext" hum is liay bnaaty hai kay jo function or method hum nai again and again use krna hota hai..us ka hum aik lag component bnaa laity hai por us mai sirf aik baar declare kr daity hai or jaha bhe use krna hota hai waha useContext ki help sai access kr kay use kr laity hai
const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItems: (item) => {},
    removeItems: (id) => {},
    clearCart: () => {}
});

export default CartContext;