import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import Bike from "./images/bike.png";

function OrderConfirmation(props){
  const navigate = useNavigate();

  function goHome(e){
    navigate('/');
  }

  return(
    <div className='orderConfirmation'>
      <Nav goHome={goHome}></Nav>
      <div className='orderConfirmationArea'>
          <h1>Thank you for ordering from POKÉ MART</h1>
          <h2>Order #{Math.floor(Math.random() * 100000)}</h2>
          <button onClick={goHome}><img src={Bike}></img>Back To Shop<img src={Bike}></img></button>
      </div>
    </div>
  )
}

export default OrderConfirmation;
