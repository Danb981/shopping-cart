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
import PokeBall from './images/pokeball.webp';
import GreatBall from './images/greatball.webp';
import UltraBall from './images/ultraball.webp';
import XAttack from './images/xattack.webp';
import XDefend from './images/xdefend.webp';
import XSpAttack from './images/xspecialattack.webp';
import XSpDefend from './images/xspecialdefend.webp';
import XSpeed from './images/xspeed.png';
import XAccuracy from './images/xaccuracy.png';


const shopItems = [{name: 'Potion', description: 'Heals 20 HP', price: 300, image: Potion},
{name: 'Super Potion', description: 'Heals 50 HP', price: 700, image: SuperPotion},
{name: 'Hyper Potion', description: 'Heals 120 HP', price: 1200, image: HyperPotion},
{name: 'Max Potion', description: 'Heals all missing HP', price: 2500, image: MaxPotion},
{name: 'Full Restore', description: 'Heals all missing HP and status effects', price: 3000, image: FullRestore},
{name: 'Antidote', description: 'Cures poisoning', price: 300, image: Antidote},
{name: 'Burn Heal', description: 'Cures burn', price: 300, image: BurnHeal},
{name: 'Ice Heal', description: 'Cures frozen', price: 300, image: IceHeal},
{name: 'Awakening', description: 'Cures sleep', price: 300, image: Awakening},
{name: 'Paralyze Heal', description: 'Cures paralysis', price: 300, image: ParalyzeHeal},
{name: 'Poke Ball', description: 'Ball with a x1 catch modifier', price: 200, image: PokeBall},
{name: 'Great Ball', description: 'Ball with a x1.5 catch modifier', price: 600, image: GreatBall},
{name: 'Ultra Ball', description: 'Ball with a x2 catch modifier', price: 800, image: UltraBall},
{name: 'X Attack', description: "Raises a Pokemon's attack stat for one battle", price: 500, image: XAttack},
{name: 'X Defend', description: "Raises a Pokemon's defence stat for one battle", price: 550, image: XDefend},
{name: 'X Sp. Attack', description: "Raises a Pokemon's special attack stat for one battle", price: 1000, image: XSpAttack},
{name: 'X Sp. Defend', description: "Raises a Pokemon's special defence stat for one battle", price: 2000, image: XSpDefend},
{name: 'X Speed', description: "Raises a Pokemon's speed stat for one battle", price: 1000, image: XSpeed},
{name: 'X Accuracy', description: "Raises a Pokemon's accuracy stat for one battle", price: 1000, image: XAccuracy}];

function Home() {
  const[items, setItems] = useState([]);
  const[cart, setCart] = useState([]);
  const cartRef = useRef({});
  cartRef.current = cart;
  const[cartIsVisible, setCartIsVisible] = useState(false);

  function toggleCartVisible(e){
    setCartIsVisible(!cartIsVisible);
  }

  function addToCart(name, quantity, price, image){
    if(!cartIsVisible){
      toggleCartVisible();
    }
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
      <div className='mainArea'>
        <div className='shopArea'>
          {items}
        </div>
        <Cart visible={cartIsVisible} cartItems={cart}></Cart>
      </div>
      {console.log(cart)}
    </div>
  );
}

export default Home;
