import React from 'react';
import "./style.css"
import { Link } from 'react-router-dom';
const Modal = ({ close, children }) => {
  return (
    <div className='modal-container'>
      <div className='modal'>
        {children}
        <button className='close-modal' onClick={close}>X</button>
        <button className='go-to-menu' >
          <Link to='/order' style={{ textDecoration: 'none', color: '#ffffff' }}>
            Go To Order
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Modal;
