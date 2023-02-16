import React, { useEffect, useState, useRef } from "react";
import Nav from './Nav';
import Item from './Item';
import Cart from './Cart';
import Potion from './images/potion.webp';
import SuperPotion from './images/superpotion.webp';
import HyperPotion from './images/hyperpotion.webp';
import MaxPotion from './images/maxpotion.webp';
import FullRestore from './images/fullrestore.webp';
import Antidote from './images/antidote.webp';
import BurnHeal from './images/burnheal.webp';
import IceHeal from './images/iceheal.webp';
import Awakening from './images/awakening.webp';
import ParalyzeHeal from './images/paralyzeheal.webp';

const shopItems = [{name: 'Potion', description: 'Heals 20 HP', price: 300, image: Potion},
{name: 'Super Potion', description: 'Heals 50 HP', price: 700, image: SuperPotion},
{name: 'Hyper Potion', description: 'Heals 120 HP', price: 1200, image: HyperPotion},
{name: 'Max Potion', description: 'Heals all missing HP', price: 2500, image: MaxPotion},
{name: 'Full Restore', description: 'Heals all missing HP and status effects', price: 3000, image: FullRestore},
{name: 'Antidote', description: 'Cures poisoning', price: 300, image: Antidote},
{name: 'Burn Heal', description: 'Cures burn', price: 300, image: BurnHeal},
{name: 'Ice Heal', description: 'Cures frozen', price: 300, image: IceHeal},
{name: 'Awakening', description: 'Cures sleep', price: 300, image: Awakening},
{name: 'Paralyze Heal', description: 'Cures paralysis', price: 300, image: ParalyzeHeal}];

function Home() {
  const[items, setItems] = useState([]);
  const[cart, setCart] = useState([]);
  const cartRef = useRef({});
  cartRef.current = cart;
  const[cartIsVisible, setCartIsVisible] = useState(true);

  function toggleCartVisible(e){
    setCartIsVisible(!cartIsVisible);
  }

  function addToCart(name, quantity, price, image){
    for(let x = 0; x < cartRef.current.length; x++){ //check if item already in cart
      if(cartRef.current[x].itemName === name){
        let currentItem = structuredClone(cartRef.current[x]);
        currentItem.itemQuantity = currentItem.itemQuantity + quantity > 99 ? 99 : currentItem.itemQuantity + quantity; //dont let quantity exceed 99
        setCart(cartRef.current.slice(0, x).concat(currentItem).concat(cartRef.current.slice(x + 1)));
        return;
      }
    } 
    setCart(cartRef.current.concat({itemName: name, itemQuantity: quantity, unitPrice: price, itemImage: image}));
  }

  useEffect(() => {
    let loadItems = [];
    for(let x = 0; x < shopItems.length; x++){
      const shopItem = shopItems[x];
      loadItems.push(<Item key={'item' + x} info={shopItem} addToCart={addToCart}></Item>)
    }
    setItems(loadItems);
  }, []);

  return (
    <div className="home">
      <Nav cartClickEvent={toggleCartVisible}></Nav>
      <div className='shopArea'>
        {items}
      </div>
      <Cart visible={cartIsVisible} cartItems={cart}></Cart>
      {console.log(cart)}
    </div>
  );
}

export default Home;
