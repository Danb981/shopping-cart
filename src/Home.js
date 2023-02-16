import Nav from './Nav';
import Item from './Item';
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

let shopItemsComponents = [];

for(let x = 0; x < shopItems.length; x++){
  const shopItem = shopItems[x];
  shopItemsComponents.push(<Item key={'item' + x} info={shopItem}></Item>)
}

function Home() {
  return (
    <div className="home">
      <Nav></Nav>
      <div className='shopArea'>
        {shopItemsComponents}
      </div>
    </div>
  );
}

export default Home;
