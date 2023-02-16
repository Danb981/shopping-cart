import React, { useEffect, useState, useRef } from "react";

function Item(props){
  const[quantity, setQuantity] = useState(0);

  function updateQuantity(e){
    if(!isNaN(e.target.value) && Number(e.target.value < 100)){
      setQuantity(Number(e.target.value));
    }
  }

  function incrementQuantity(e){
    if(quantity < 99){
      setQuantity(quantity + 1);
    }
  }

  function decrementQuantity(e){
    if(quantity > 0){
      setQuantity(quantity - 1);
    }
  }

  function preAddToCart(e){
    if(quantity > 0){
      props.addToCart(props.info.name, quantity, props.info.price);
      setQuantity(0);
    }
  }

  return(
    <div className='item'>
      <img src={props.info.image}></img>
      <div className='itemInfo'>
        <h2>{props.info.name}</h2>
        <p>{props.info.description}</p>
        <h3>¥{props.info.price}</h3>
        <span className='itemControls'>
          <button onClick={decrementQuantity}>-</button>
          <input type='text' value={quantity} onChange={updateQuantity}></input>
          <button onClick={incrementQuantity}>+</button>
        </span>
        <button className='addToCartBtn' onClick={preAddToCart}>Add to Cart</button>
      </div>
    </div>
  )
}

export default Item;
