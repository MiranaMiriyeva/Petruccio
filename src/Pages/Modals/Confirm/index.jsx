import React from 'react';
import "./style.css"
const Modal = ({ close, children }) => {
  return (
    <div className='modal-container'>
      <div className='modal'>
        {children}
        <button className='close-modal' onClick={close}>X</button>
       
      </div>
    </div>
  );
};

export default Modal;
