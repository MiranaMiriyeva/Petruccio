import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import "./style.css"; 
import { removeFromFavorites } from '../../redux/actions/favorires.actions';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const favorites = useSelector(state => state.favorites);
const dispatch = useDispatch()
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
