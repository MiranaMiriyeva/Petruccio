import React, { useEffect } from 'react';
import "./style.css"
const SuccessModal = ({ close, children }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      close();
    }, 4000);

    return () => clearTimeout(timeout);
  }, [close]);
  return (
    <div className='success-container'>
      <div className='success-modal'>
        {children}
        
       
      </div>
    </div>
  );
};

export default SuccessModal;
