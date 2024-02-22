import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import "./style.css";
import { decreaseItemCount, increaseItemCount, removeFromOrders } from '../../redux/actions/actions';
import Modal from '../Modals/Confirm';
import SuccesModal from '../Modals/SuccesOrder';
import ReactEmoji from 'react-emoji-render';
import { Link } from 'react-router-dom';

const Orders = () => {

  const theOrders = useSelector(state => state.theOrders);
  const dispatch = useDispatch();

  const handleDecrease = (itemId) => {
    dispatch(decreaseItemCount(itemId));
    
  };

  const handleIncrease = (itemId) => {
    dispatch(increaseItemCount(itemId));
  };

  const [theCardDetails, settheCardDetails] = useState(false);

  const handleThePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
    setShowCardDetails(e.target.value === 'creditCard');
    setPaymentError(false);
  };

  const orders = useSelector(state => state.orders);
  const dis = useDispatch();

  const [modalOpened, setModalOpened] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showCardDetails, setShowCardDetails] = useState(false);
  const [succesed, setSuccesed] = useState(false);
  const [paymentError, setPaymentError] = useState(false);
  const [thankYouModalOpened, setThankYouModalOpened] = useState(false);

  const modalOpen = () => {
    setModalOpened(true);
  };

  const modalClosed = () => {
    setModalOpened(false);
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
    setShowCardDetails(e.target.value === 'creditCard');
    setPaymentError(false);
  };

  const modalSucces = () => {
    setSuccesed(true);
  };

  const modalok = () => {
    setSuccesed(false);
    modalClosed();
  };
  const [accordionOpen, setAccordionOpen] = useState(false);


  const handleAccordionToggle = () => {
    setAccordionOpen(!accordionOpen);
  };
  const handleSubmit = () => {
    let formIsValid = true;

    if (firstName === '') {
      formIsValid = false;
      document.getElementById('firstName').style.border = '1px solid red';
    } else {
      document.getElementById('firstName').style.border = '';
    }

   
    if (phoneNumber === '') {
      formIsValid = false;
      document.getElementById('phoneNumber').style.border = '1px solid red';
    } else {
      document.getElementById('phoneNumber').style.border = '';
    }

    if (address === '') {
      formIsValid = false;
      document.getElementById('address').style.border = '1px solid red';
    } else {
      document.getElementById('address').style.border = '';
    }

    if (paymentMethod) {
      if (cardNumber === '') {
        formIsValid = false;
        document.getElementById('cardNumber').style.border = '1px solid red';
      } else {
        document.getElementById('cardNumber').style.border = '';
      }

      if (expiryDate === '') {
        formIsValid = false;
        document.getElementById('expiryDate').style.border = '1px solid red';
      } else {
        document.getElementById('expiryDate').style.border = '';
      }

      if (cvv === '') {
        formIsValid = false;
        document.getElementById('cvv').style.border = '1px solid red';
      } else {
        document.getElementById('cvv').style.border = '';
      }
    }

    if (paymentMethod === '') {
      formIsValid = false;
      setPaymentError(true);
    } else {
      setPaymentError(false);
    }

    if (formIsValid) {
      modalSucces();
    }
  };
  
  let totalPrice = 0;
  orders.forEach(item => {
    totalPrice += item.price * item.count;
  });
  return (
    <div>
         {orders.length > 0 ? (
          <>
      <h1 className='categoryname-orders'>Your Orders</h1>
      <div className='container-orders'>
        {orders.map(item => (
          <div className='card-container-orders' key={item.name}>
            <div className='card-orders'>
              <div className='baseline'>
                <h2 className='item-name-orders'>{item.name}</h2>
                <img width={'200px'}  src={item.image} alt={item.name} />
              </div>
             <div className='left-side-orders'>
             <div className="actions">
             <button onClick={() => handleDecrease(item.id)}>-</button>
              <span className='order-count'>{item.count}</span>
             <button onClick={() => handleIncrease(item.id)}>+</button>
             </div>
              <button className='price-orders'>{item.price*item.count} $</button>
              </div>
              <span className='trash-icon' onClick={() => dis(removeFromOrders(item.id))}>
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  style={{
                   
                    color: 'red',
                    fontSize: '2em',
                  }}
                />
              </span>
            </div>
            <hr />
          </div>
          
        ))}
        <div className='total-price'>
          <h1>Total price: </h1>
          <br />
          <p>{totalPrice}$</p>
        </div>
        
      </div>
      <button className='confirm-cart' onClick={handleAccordionToggle} style={{ textDecoration: 'none', color: '#ffffff' }}>
        Confirm Cart
      </button>

      {accordionOpen && (
        <div className="accordion-content">
          <div className="order-form">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="tel" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />

            <label htmlFor="address">Address:</label>
            <textarea id="address" rows="4" value={address} onChange={(e) => setAddress(e.target.value)}></textarea>

            <label>Payment Method:</label>
            <div className="methodOfPay">
              <div>
                <label htmlFor="creditCard">Credit Card Payment</label>
                <input type="radio" id="creditCard" name="paymentMethod" value="creditCard" onChange={(e) => handleThePaymentMethodChange(e)} />
              </div>

              <div>
                <label htmlFor="cashOnDelivery">Cash on Delivery</label>
                <input type="radio" id="cashOnDelivery" name="paymentMethod" value="cashOnDelivery" onChange={(e) => handleThePaymentMethodChange(e)} />
              </div>
            </div>

            {paymentMethod === 'creditCard' && (
              <div className="credit-card-details">
                <label htmlFor="cardNumber">Card Number:</label>
                <input type="text" id="cardNumber" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />

                <label htmlFor="expiryDate">Expiration Date:</label>
                <input type="text" id="expiryDate" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />

                <label htmlFor="cvv">CVV:</label>
                <input type="text" id="cvv" value={cvv} onChange={(e) => setCvv(e.target.value)} />
              </div>
            )}

            <button onClick={handleSubmit}>Submit Order</button>
          </div>
        </div>
      )}

      {succesed && (
        <SuccesModal>
          Thank you for your order!
          <ReactEmoji text="😊" className="smiling-face" />
        </SuccesModal>
      )}   </>
      ) : (
        <div className='choose-your-fav'>
          <h2>Start Order</h2>
          <button className='go-to-menu' >
            <Link to='/menu' style={{ textDecoration: 'none', color: '#ffffff' }}>
             <p> Go To Menu</p>
            </Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Orders;