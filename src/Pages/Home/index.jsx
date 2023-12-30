import React from 'react';
import './style.css'; 
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
      <div className='main'>
        <img className='main-img' src="https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg" alt="pizza" />
        <div className='main-text'>
          <h3>The Summit of Flavor: Thin Crust, Abundant Toppings, Perfect Taste!</h3>
          <p>In our Fast Food Paradise, where a symphony of mouthwatering pizzas beckons, promising to transport your taste buds on a gastronomic journey to unparalleled heights of delight. Our culinary artisans have meticulously curated a dazzling array of pizzas, each a masterpiece crafted with precision and passion.

          Embark on a culinary adventure with our pizzas, where a harmonious blend of meticulously selected ingredients dances upon a canvas of expertise, resulting in a tantalizing explosion of flavors. The heart of our creations lies in the finesse of a thin crust, expertly prepared to ensure each bite delivers an exquisite and unforgettable taste sensation.

          Indulge in the extraordinary as you explore a menu designed to elevate your dining experience. From classic favorites to innovative delights, our pizzas are a testament to the artistry of flavor, promising a feast for your senses. Discover the magic that unfolds when passion meets craftsmanship, and treat yourself to the extraordinary world of flavor that awaits you at our Fast Food Haven..</p>
          </div>           
      </div>
      <div className='main'>
        <div className='main-text'>
          <h3>Journey into Flavor: Explore Our Delectable Burger Kingdom!</h3>
          <p>Our burgers deliver a burst of flavor, enriched with special recipes and secret sauces. Each bite invites you to a flavor symphony where fresh ingredients and delicious patties dance in perfect harmony.

          Delicious patties crafted from high-quality meats meet carefully selected fresh vegetables and unique sauces. The light and tasty burger buns will take you on a journey of flavors with every bite.

          In our Fast Food Kingdom, burgers are more than just a meal; they are a flavor experience. Each burger is a masterpiece from the hands of passionate culinary artists. We invite you to discover these magnificent burgers that will satisfy your hunger and delight your taste buds. Join us on this gastronomic adventure to push the boundaries of flavor!</p>
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
