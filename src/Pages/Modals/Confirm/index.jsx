import React from 'react';
import "./style.css"
const Modal = ({ close, children }) => {
  return (
    <div className='modal-container-confirm'>
      <div className='modal-confirm'>
        {children}
        <button className='close-modal-confirm' onClick={close}>X</button>
       
      </div>
    </div>
  );
};

export default Modal;
