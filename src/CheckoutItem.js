function CheckoutItem(props){
  return(
    <div className='checkoutItem'>
      <img src={props.itemInfo.itemImage}></img>
      <h2 className='checkoutItemName'>{props.itemInfo.itemName}</h2>
      <h2>¥{props.itemInfo.unitPrice} x {props.itemInfo.itemQuantity} (¥{props.itemInfo.unitPrice * props.itemInfo.itemQuantity})</h2>
    </div>
  )
}

export default CheckoutItem;
