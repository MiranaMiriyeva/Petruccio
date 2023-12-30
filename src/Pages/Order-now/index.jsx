import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import "./style.css"; 
import { removeFromOrders } from '../../redux/actions/actions';
import Modal from '../Modals/Confirm';
import SuccesModal from '../Modals/SuccesOrder';
import ReactEmoji from 'react-emoji-render';

const Orders = () => {
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

  const handleSubmit = () => {
    let formIsValid = true;

    if (firstName === '') {
      formIsValid = false;
      document.getElementById('firstName').style.border = '1px solid red';
    } else {
      document.getElementById('firstName').style.border = '';
    }

    if (lastName === '') {
      formIsValid = false;
      document.getElementById('lastName').style.border = '1px solid red';
    } else {
      document.getElementById('lastName').style.border = '';
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

    if (showCardDetails) {
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

  return (
    <div>
      <h1 className='categoryname-orders'>Your Orders</h1>
      <div className='container-orders'>
        {orders.map(item => (
          <div className='card-container-orders' key={item.name}>
            <div className='card-orders'>
              <div className='baseline'>
                <h2 className='item-name-orders'>{item.name}</h2>
                <img width={'200px'} src={item.image} alt={item.name} />
              </div>
              <p className='description-orders'>{item.description}</p>
              <span className='order-count'></span>
              <button className='price-orders'>{item.price} $</button>
              <span className='trash-icon' onClick={() => dis(removeFromOrders(item.id))}>
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  style={{
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    color: 'red',
                    fontSize: '2em',
                  }}
                />
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <button className='confirm-cart' onClick={modalOpen} style={{ textDecoration: 'none', color: '#ffffff' }}>
        Confirm Cart
      </button>
      
      {modalOpened && (
        <Modal close={modalClosed}>
          <div className="order-form">
            <label htmlFor="firstName">Name:</label>
            <input type="text" id="firstName" name="firstName" className="required-input" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />

            <label htmlFor="lastName">Surname:</label>
            <input type="text" id="lastName" name="lastName" className="required-input" value={lastName} onChange={(e) => setLastName(e.target.value)} required />

            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" className="required-input" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />

            <label htmlFor="address">Adres:</label>
            <textarea id="address" name="address" rows="4" required className="required-input" value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
            
            <label>Payment Method:</label>
            <div className="payment-options">
              <div className="payment-option">
                <input type="radio" id="creditCard" name="paymentMethod" value="creditCard" onChange={handlePaymentMethodChange} />
                <label htmlFor="creditCard">Credit Card Payment</label>
              </div>

              <div className="payment-option">
                <input type="radio" id="cashOnDelivery" name="paymentMethod" value="cashOnDelivery" onChange={handlePaymentMethodChange} />
                <label htmlFor="cashOnDelivery">Cash on Delivery</label>
              </div>
            </div>

            {showCardDetails && (
              <div className="credit-card-details">
                <label htmlFor="cardNumber">Card Number:</label>
                <input type="text" id="cardNumber" name="cardNumber" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />

                <label htmlFor="expiryDate">Expiration Date:</label>
                <input type="text" id="expiryDate" name="expiryDate" placeholder="MM/YY" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />

                <label htmlFor="cvv">CVV:</label>
                <input type="text" id="cvv" name="cvv" value={cvv} onChange={(e) => setCvv(e.target.value)} />
              </div>
            )}

           

            {paymentError && (
              <p className="error-message"> * Please select a payment method.</p>
            )}

            <p className="error-message"> * Please fill out all required fields. We'll contact you using the provided phone number in case of any issues.</p>

            <button className="confirm-cart" onClick={handleSubmit} style={{ textDecoration: 'none', color: '#ffffff' }}>
              Finish Order
            </button>
          </div>
        </Modal>
      )}

      {succesed && (
        <SuccesModal close={modalok}>
          Thank you for your order!
            <ReactEmoji text="😊" className="smiling-face" />
        </SuccesModal>
      )}
    </div>
  );
};

export default Orders;
