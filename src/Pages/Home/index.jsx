import React, { useState } from 'react';
import './style.css'; 
import { Carousel } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';



const Home = () => {


  return (
    <div>
    <div className='home-background'>
      <div className='home-container'>
      <h1 className='home-title'>
          Welcome!<br />
          Are You Ready for a Delicious and Quick <span className='highlight-text'>Fast Food</span> Experience?
        </h1>
      </div>
      </div>
    
      <Carousel>
        <Carousel.Item>
           <img className='carousel-img' src="https://marketplace.canva.com/EAFNpGUA1K4/1/0/800w/canva-black-and-yellow-restaurant-%26-fast-food-facebook-cover-SKk_1e9NKg8.jpg" alt="pizza" /> 
        </Carousel.Item>
        <Carousel.Item>
        <img className='carousel-img' src="https://marketplace.canva.com/EAFzL899tRs/1/0/800w/canva-black-modern-pizza-food-promotion-facebook-cover-3DYmHPsB3FE.jpg" alt="pizza" /> 
        </Carousel.Item>
        <Carousel.Item>
           <img className='carousel-img' src="https://marketplace.canva.com/EAFj1LczOk4/1/0/800w/canva-orange-%26-black-hamburger-facebook-cover-1gWeaHNijH8.jpg" alt="pizza" /> 
        </Carousel.Item>
        <Carousel.Item>
        <img className='carousel-img' src="https://marketplace.canva.com/EAFcstgfmb0/1/0/800w/canva-black-white-modern-special-menu-food-facebook-cover-QtYBYbwQYu4.jpg" alt="pizza" /> 
        </Carousel.Item>
      </Carousel>
      <div className='main'>
        <img className='main-img' src="https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg" alt="pizza" />
        <div className='main-text'>
          <h3>The Summit of Flavor: Thin Crust, Abundant Toppings, Perfect Taste!</h3>
          <p>In our Fast Food Paradise, where a symphony of mouthwatering pizzas beckons, promising to transport your taste buds on a gastronomic journey to unparalleled heights of delight. 

           From classic favorites to innovative delights, our pizzas are a testament to the artistry of flavor, promising a feast for your senses. Discover the magic that unfolds when passion meets craftsmanship, and treat yourself to the extraordinary world of flavor that awaits you at our Fast Food Haven..</p>
          </div>           
      </div>
      <div className='main'>
        <div className='main-text'>
          <h3>Journey into Flavor: Explore Our Delectable Burger Kingdom!</h3>
          <p>Our burgers deliver a burst of flavor, enriched with special recipes and secret sauces. Each bite invites you to a flavor symphony where fresh ingredients and delicious patties dance in perfect harmony.

          Delicious patties crafted from high-quality meats meet carefully selected fresh vegetables and unique sauces. The light and tasty burger buns will take you on a journey of flavors with every bite.</p>
          </div>  
          
        <img className='main-img' src="https://www.tastingtable.com/img/gallery/what-makes-restaurant-burgers-taste-different-from-homemade-burgers-upgrade/l-intro-1662064407.jpg" alt="pizza" />         
      </div>
      <div className='pizza-details-container'>
        <div className='mini-cart'>
          <img src="https://www.deiorios.com/wp-content/uploads/2015/08/DeIorios-ingredients.jpg" alt="" />
          <h1>Fresh and Quality Ingredients</h1>
          <p>The secret to our pizzas lies in the fresh and quality ingredients felt in every slice. Our sauces, inspired by the essence of Italian cuisine, and our delightful cheese varieties, combined with a rich selection of vegetables, transform each bite into a flavor celebration.</p>
        </div>
        <div className='mini-cart'>
          <img src="https://imgmedia.lbb.in/media/2018/10/5bb49893fa65096b3e63cb52_1538562195559.jpg" alt="" />
          <h1>A Variety of Flavors</h1>
          <p>You can find an option suitable for every palate on our menu. From traditional cheese and pepperoni pizzas to special flavors crafted with exotic ingredients, we offer a wide range. If you want to create your own pizza, our customization options allow you to design the pizza of your dreams.</p>
        </div>
        <div className='mini-cart'>
          <img src="https://img.freepik.com/free-photo/pizza-packs-concept-food-delivery_78826-3234.jpg" alt="" />
          <h1>Swift Delivery to Any Location</h1>
          <p>We don't keep you waiting to satisfy your hunger! With our fast delivery service, your hot and fresh pizzas arrive right at your doorstep. To maintain the taste experience, all you have to do is place a phone call or order online.</p>
        </div>
        <div className='mini-cart'>
        <img src="https://www.theworldandthensome.com/wp-content/uploads/2022/09/shutterstock_1917126392.jpg" alt="" />
          <h1>Special for Fast Food Enthusiasts</h1>
          <p>Our menu, specially prepared for pizza enthusiasts, includes options for all ages and needs, from mega-sized pizzas to children's menus. Choose us for a pizza experience that will make you and your loved ones happy.</p>
        </div>
      </div>
    
   </div>
  );
};


export default Home;
