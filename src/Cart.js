import React, { useEffect, useState, useRef } from "react";
import CartItem from './CartItem';

function Cart(props){
  const[cartItems, setCartItems] = useState([]);
  const[subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    let tempSubtotal = 0;
    let tempItems = [];
    for(let x = 0; x < props.cartItems.length; x++){
      tempItems.push(<CartItem key={'cartItem' + x}itemInfo={props.cartItems[x]}></CartItem>)
      tempSubtotal += props.cartItems[x].unitPrice * props.cartItems[x].itemQuantity;
    }
    setCartItems(tempItems);
    setSubtotal(tempSubtotal);
  },[props.cartItems]);

  return(
    <div className={props.visible ? 'cart' : 'cart collapse'}>
      <u><h1>Cart</h1></u>
      {cartItems}
      <u><h1>Subtotal: ¥{subtotal}</h1></u>
    </div>
  )
}

export default Cart;
