import React from 'react';
import "./style.css"
const SuccesModal = ({ close, children }) => {
  return (
    <div className='succes-container'>
      <div className='succes-modal'>
        {children}
        <button className='succes-close-modal' onClick={close}>OK</button>
       
      </div>
    </div>
  );
};

export default SuccesModal;
