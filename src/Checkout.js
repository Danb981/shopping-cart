import { useLocation } from "react-router-dom";

function Checkout(props){
  let location = useLocation();
  return(
    <div>
      Checkout Page
      {console.log(location.state)}
    </div>
  )
}

export default Checkout;
