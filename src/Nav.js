import PokeMart from './images/pokemart2.webp';
import CartIcon from './images/carticon.svg';

function Nav(){
  return(
    <div className='nav'>
      <img src={PokeMart}></img>
      <h1>POKÉ MART</h1>
      <span className='navControls'>
        <img className='redSvg' src={CartIcon} alt='Cart'></img>
      </span>
    </div>
  )
}

export default Nav;
