import React, { useEffect } from 'react';
import "./style.css"
const Modal = ({ close, children }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      close();
    }, 4000);

    return () => clearTimeout(timeout);
  }, [close]);

  return (
    <div className='modal-container'>
      <div className='modal'>
        {children}

      </div>
    </div>
  );
};

export default Modal;
