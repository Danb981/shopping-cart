function Item(props){
  return(
    <div className='item'>
      <img src={props.info.image}></img>
      <h2>{props.info.name}</h2>
    </div>
  )
}

export default Item;
