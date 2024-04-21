import React, { useEffect } from 'react';
import "./style.css"
const Confirm = ({ close, children }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      close();
    }, 5000);

    return () => clearTimeout(timeout);
  }, [close]);
  return (
    <div className='modal-container-confirm'>
      <div className='modal-confirm'>
        {children}
       
      </div>
    </div>
  );
};

export default Confirm;
