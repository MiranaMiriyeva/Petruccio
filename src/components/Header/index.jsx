import React from 'react';
import { Link } from 'react-router-dom';
import CheesyLogo from '../../images/Cheesy-logo-second.jpg';
import './style.css';

const Header = () => {
  const cheeseImageUrl  = 'https://i.pinimg.com/originals/98/a8/b9/98a8b95f21e433a1e7874212fd26bb03.png'; 
  const meltedImageUrl = "https://png.pngtree.com/png-clipart/20231017/original/pngtree-slice-of-melting-mozzarella-pizza-png-image_13327683.png"
  return (
    <div>
      <div className='header-container'>
        <div className='navbar-container'>
          <img className='cheesy-logo' src={CheesyLogo} alt='logo' />
          <div className='navbar'>
            <Link to='/'>Home</Link>
            <Link to='/menu'>Menu</Link>
            <Link to='/Favorites'>Favorites</Link>
            <Link to='/order'>Order</Link>
            <Link to='/aboutus'>About Us</Link>
          </div>
        </div>
        <img className='melting-cheese' src={cheeseImageUrl} alt='melted cheese' />
      </div>
    </div>
  );
};

export default Header;
