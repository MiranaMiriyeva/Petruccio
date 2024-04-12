import React, { useEffect, useState } from 'react';
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { addToFavorites, addToOrders, removeFromFavorites } from '../../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { faArrowUp, faHeart as faHeartSolid, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Modal from '../Modals/AddedToOrder';
import { data } from '../../Db/Data';
import ScrollReveal from 'scrollreveal';






const Menu = () => {
  const favorites = useSelector(state => state.favorites)
  const dispatch = useDispatch();
  const orders = useSelector(state => state.orders)
  const dis = useDispatch();

 
  const [modalOpened, setModalOpened] = useState(false);


  const modalOpen = () => {
    setModalOpened(true);
  };

  const modalClosed = () => {
    setModalOpened(false);
  };
  useEffect(() => {
 

    const sr = ScrollReveal ({
      distance: '30px', 
      duration: 2500,
      reset: true
    });
   
  }, []);
  return (
    <div className='container' id='menu'>
      {data.map((category, index) => (
        <div className='card' key={index}>
          <h1 className='categoryname'>{category.category}</h1>
          <div className='card-container'>
            {category.items.map((item, itemIndex) => (
              <div className='card' key={itemIndex}>
                <h2 className='item-name'>{item.name}</h2>
                <hr />
                <br />
                <div className="image-container" style={{ position: 'relative' }}>
                  <img src={item.image} alt={item.name} />
                  {favorites.find(prop => prop.id === item.id) ? (
                    <span className='fav-icon' onClick={() => dispatch(removeFromFavorites(item.id))}>
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
                  ) : (
                    <span className='fav-icon' onClick={() => dispatch(addToFavorites(item))}>
                      <FontAwesomeIcon
                        icon={faHeart}
                        style={{
                          position: 'absolute',
                          top: '5px',
                          right: '5px',
                          color: '#ff0000',
                          fontSize: '2.5em',
                        }}
                      />
                    </span>
                  )}
                </div>
                <p className='description'>{item.description}</p>
                <div className='button-container'>
                  <button className='price'>{item.price} $</button>
                  <div className='order-container'>
                    <span className='order-button' onClick={() => { dis(addToOrders(item)); modalOpen(); }}>
                      Add To Cart
                    </span>
                    {modalOpened && (
                      <Modal close={modalClosed}>
                        <p>Successfully added to cart! </p>
                      </Modal>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
        <>
    
    {/* scroll top */}
    <a href="#menu" className="scroll-top">
    <div style={{ backgroundColor: 'orange', padding: '10px 15px' , borderRadius: '50%'}}>
      <FontAwesomeIcon icon={faArrowUp} style={{ color: 'white',  backgroundColor: 'orange'}} />
    </div>
    </a>
  </>
    </div>
  );
}

export default Menu;