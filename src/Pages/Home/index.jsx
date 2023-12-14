import React from 'react';
import './style.css'; 

const Home = () => {
  return (
    <div className='home-background'>
      <div className='home-container'>
      <h1 className='home-title'>
          Welcome!<br />
          Are You Ready for a Delicious and Quick <span className='highlight-text'>Fast Food</span> Experience?
        </h1>
      </div>
    </div>
  );
};

export default Home;
