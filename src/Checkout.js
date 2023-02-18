import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Nav from "./Nav";
import CheckoutItem from "./CheckoutItem";
import Bag from "./images/bag.png";
import Bike from "./images/bike.png";

function Checkout(props){
  const navigate = useNavigate();
  const location = useLocation();
  const[cart, setCart] = useState();
  const[checkoutItems, setCheckoutItems] = useState();
  const[subtotal, setSubtotal] = useState(0);

  function goHome(e){
    navigate('/', {state: cart});
  }

  function goToOrderConfirmation(e){
    navigate('/orderconfirmation', {state: cart});
  }

  useEffect(() =>{
    setCart(location.state);
  },[]);

  useEffect(() => {
    if(!cart){
      return;
    }
    let tempSubtotal = 0;
    let tempItems = [];
    for(let x = 0; x < cart.length; x++){
      tempItems.push(<CheckoutItem key={'checkoutItem' + x}itemInfo={cart[x]}></CheckoutItem>)
      tempSubtotal += cart[x].unitPrice * cart[x].itemQuantity;
    } 
    setSubtotal(tempSubtotal);
    setCheckoutItems(tempItems);
  },[cart]);

  return(
    <div className='checkout'>
    <Nav goHome={goHome}></Nav>
      <div className='checkoutArea'>
        <h1><u>Checkout</u></h1>
        <div className='checkoutItem'>
          <img src={Bag}></img>
          <h1><u>Items</u></h1>
          <h1><u>Prices</u></h1>
        </div>
        {checkoutItems}
        <div className='checkoutItem'>
          <span></span>
          <span></span>
          <h1>Total: ¥{subtotal}</h1>
        </div>
        <button onClick={goToOrderConfirmation}><img src={Bike}></img>Complete Order<img src={Bike}></img></button>
      </div>
    </div>
  )
}

export default Checkout;
