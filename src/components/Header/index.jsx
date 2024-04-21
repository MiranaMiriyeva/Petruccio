import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const favorites = useSelector(state => state.favorites);
  const dispatch = useDispatch();
  const orders = useSelector(state => state.orders);
  const dis = useDispatch();
  
  return (
    <div>
      <header className='header'>
        <Link to="/"  className="logo">
          <img  src="https://d3q0fpse3wbo5h.cloudfront.net/production/uploads/innovations/a56ad223cc8c22677ab3df8350440ba7.jpg" alt="logo" />
        </Link>
        <div className="navbar">
          <Link to='/'>Home</Link>
          <Link to='/menu'>Menu</Link>
          <Link to='/Favorites' style={{ color: favorites.length > 0 ? 'red' : 'black' }}>Favorites</Link>
          <Link to='/order' style={{ position: 'relative' }}>
            Order
            {orders.length > 0 && <span className="order-count-header">{orders.length}</span>}
          </Link>
          <Link className='about-us' to='/aboutus'>About</Link>
          <div className="bx bx-menu" id="menu-icon" />
        </div>
      </header>
    </div>
  );
};

export default Header;
