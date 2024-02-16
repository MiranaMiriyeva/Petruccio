import React, { useEffect } from 'react';
import "./style.css"
const SuccesModal = ({ close, children }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      close();
    }, 4000);

    return () => clearTimeout(timeout);
  }, [close]);
  return (
    <div className='succes-container'>
      <div className='succes-modal'>
        {children}
        
       
      </div>
    </div>
  );
};

export default SuccesModal;
