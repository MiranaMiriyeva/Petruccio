import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import "./style.css";
import { decreaseItemCount, increaseItemCount, removeFromOrders } from '../../redux/actions/actions';
import ReactEmoji from 'react-emoji-render';
import { Link } from 'react-router-dom';
import SuccessModal from '../Modals/SuccesOrder';
import Confirm from '../Modals/Confirm';

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
  const cashOnDelivery = document.getElementById("cashOnDelivery")

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
  const modalConfirmClosed = () => {
    setSuccesed(false);
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
  
    if (paymentMethod === 'creditCard') {
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
    <div >
         {orders.length > 0 ? (
          <>
      <h1 className='categoryname-orders'>Your Orders</h1>
      <div className='container-orders'>
        {orders.map(item => (
          <div className='card-container-orders' key={item.name}>
            <div className='card-orders'>
              <div className='baseline'>
              
                <img width={'200px'} src={item.image} alt={item.name} />
                <div className="card-orders-details">
                  <h2 className='item-name-orders'>{item.name}</h2>
                  <button className='price-orders'>$ {item.price * item.count} </button>
                </div>
               
              </div>
             <div className='left-side-orders'>
                <div className="actions">
                 
                  <button onClick={() => handleDecrease(item.id)}>
                    {item.count > 1 ? ("-") :
                      (<FontAwesomeIcon
                  icon={faTrashAlt}
                  style={{
                   
                    color: 'orange',
                    fontSize: '0.8em',
                  }}
                />)}</button>
              <span className='order-count'>{item.count}</span>
             <button onClick={() => handleIncrease(item.id)}>+</button>
             </div>
            
              
              <span className='trash-icon' onClick={() => dis(removeFromOrders(item.id))}>
             Remove
              </span>
            </div>
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
            <input type="text" id="firstName" placeholder='John' value={firstName} onChange={(e) => setFirstName(e.target.value)} />

            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="tel" id="phoneNumber" placeholder='+555-555-5555' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />

            <label htmlFor="address">Address:</label>
            <textarea id="address" rows="4" placeholder='1234 Elm Street, Apt 5, NY' value={address} onChange={(e) => setAddress(e.target.value)}></textarea>

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
                <input type="text" id="cardNumber" placeholder='1234 5678 9012 3456'  value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />

                <label htmlFor="expiryDate">Expiration Date:</label>
                <input type="text" id="expiryDate" placeholder='11/11' value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />

                <label htmlFor="cvv">CVV:</label>
                <input type="text" id="cvv" placeholder='123' value={cvv} onChange={(e) => setCvv(e.target.value)} />
              </div>
            )}

            <button onClick={handleSubmit}>Submit Order</button>
          </div>
        </div>
      )}

      {succesed && (
        <Confirm close={modalConfirmClosed}>
          <div className='confirm'>
          <img className='tick-icon' src="https://static.vecteezy.com/system/resources/previews/010/147/759/non_2x/tick-icon-accept-approve-sign-design-free-png.png" alt="" />
          Thank you for your order!
          </div>
          
        </Confirm>
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