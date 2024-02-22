import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./style.css"; 
import { addToOrders, removeFromFavorites } from '../../redux/actions/actions';
import { Link } from 'react-router-dom';
import Modal from '../Modals/AddedToOrder';

export const Favorites = () => {
   const favorites = useSelector(state => state.favorites);
  const dispatch = useDispatch();
  const orders = useSelector(state => state.orders);
  const dis = useDispatch();
  
  const [orderCount, setOrderCount] = useState({});
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
        {favorites.length > 0 ? (
          <>
            <h1 className='categoryname-favorite'>Your Favorites</h1>
            <div className='container-favorite'>
              {favorites.map(item => (
                <div className='card-favorite' key={item.name}>
                  <h2 className='item-name-favorite'>{item.name}</h2>
                  <hr />
                  <div className="image-container-favorite" >
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
                  <p className='description-favorite'>{item.description}</p>
                  <button className='price-favorite'>{item.price} $</button>
                  <div className='order-container-favorite'>
                    <span className='order-button-favorite' onClick={() => { dis(addToOrders(item)); modalOpen(); }}>
                      Add To Cart
                    </span>
                    {modalOpened && (
                      <Modal close={modalClosed}>
                        <p>Successfully added to cart! </p>
                      </Modal>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className='choose-your-fav'>
            <h2>Choose Your Favorites!</h2>
            <button className='go-to-menu' >
              <Link to='/menu' style={{ textDecoration: 'none', color: '#ffffff' }}>
               <p> Go To Menu</p>
              </Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
