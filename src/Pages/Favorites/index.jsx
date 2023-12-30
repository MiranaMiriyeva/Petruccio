import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./style.css"; 
import { addToOrders, removeFromFavorites } from '../../redux/actions/actions';
import { Link } from 'react-router-dom';
import Modal from '../Modals/Confirm';


const Favorites = () => {
  const favorites = useSelector(state => state.favorites)
  const dispatch = useDispatch();
  const orders = useSelector(state => state.orders)
  const dis = useDispatch();
  
  const [orderCount, setOrderCount] = useState({});

  const handleAddToOrder = (itemId) => {
    setOrderCount(prevCount => ({
      ...prevCount,
      [itemId]: (prevCount[itemId] || 1) + 1,
    }));
  };

  const handleRemoveFromOrder = (itemId) => {
    if (orderCount[itemId] && orderCount[itemId] > 1) {
      setOrderCount(prevCount => ({
        ...prevCount,
        [itemId]: prevCount[itemId] - 1,
      }));
    }
  };
  const [modalOpened, setModalOpened] = useState(false);


  const modalOpen= () => {
    setModalOpened(true);
  };

  const modalClosed = () => {
    setModalOpened(false);
  };
  return (
    <div>
      <div>
        <h1 className='categoryname-favorites'>Your Favorites</h1>
        <div className='container-favorites'>
          
          {favorites.map(item => (
            <div className='card-container-favorites' key={item.name}>
              <h2 className='item-name-favorites'>{item.name}</h2>
              <hr />
              <div className="image-container" >
                <img width={"200px"}  src={item.image} alt={item.name} />
                <span  className='fav-icon' onClick={() => dispatch(removeFromFavorites(item.id))}>
                  <FontAwesomeIcon
                    icon={faHeartSolid}
                    style={{
                      position: 'absolute',
                      top: '5px',
                      right: '5px',
                      color: '#ff0000',
                      fontSize: '2.5em',
                    }}
                  />
                </span>
              </div>
              <p className='description-favorites'>{item.description}</p>
              <button className='price-favorites'>{item.price} $</button>
              <div className='order-container'>
                      <div className='order-controls'>
                        <button onClick={() => handleRemoveFromOrder(item.id)}>-</button>
                        <span className='order-count'>{orderCount[item.id] || 1}</span>
                        <button onClick={() => handleAddToOrder(item.id)}>+</button>
                      </div>
                      <span onClick={() => { dis(addToOrders(item)); modalOpen(); }}>
                      <FontAwesomeIcon className='order-button' icon={faShoppingCart} style={{ color: 'green' }} />
                    </span>
                      {modalOpened && (
                    <Modal close={modalClosed}>
                      <p>Successfully added to cart! </p>
                      <p>Go to Order to confirm the cart.</p>
                    </Modal>
                  )}
                    </div>
            </div>
          ))}
        </div>
      </div>
      <div className='choose-your-fav'>
        <h2>Choose Your Favorites!</h2>
        <button className='go-to-menu' >
          <Link to='/menu' style={{ textDecoration: 'none', color: '#ffffff' }}>
            Go To Menu
          </Link>
        </button>
      </div>
  
    </div>
  );
};

export default Favorites;
