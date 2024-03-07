import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

const App = (props) => {
  const [cartItemIsValid, setCartItemIsValid] = useState(false);

  const showCartItemHandler = (props) => {
    setCartItemIsValid(true);
    return;
  };

  const hideCartItemHandler = (props) => {
    setCartItemIsValid(false);
    return;
  };

  return (
    <CartProvider>
      {cartItemIsValid &&  <Cart onClose={hideCartItemHandler}/>}
      <Header onAddToShow = {showCartItemHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
};

export default App;