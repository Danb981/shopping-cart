function CartItem(props){
  return(
    <div className='cartItem'>
      <img src={props.itemInfo.itemImage}></img>
      <h3>{props.itemInfo.itemName}: {props.itemInfo.itemQuantity} x ¥{props.itemInfo.unitPrice} 
      (¥{props.itemInfo.itemQuantity * props.itemInfo.unitPrice})</h3>
    </div>
  );
}

export default CartItem;
