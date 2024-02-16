import React, {  useEffect}  from 'react';
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasStar, faStar as farStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Home = () => {
  useEffect(() => {
 

    const sr = ScrollReveal ({
      distance: '30px', 
      duration: 2500,
      reset: true
    });
    sr.reveal('.home-text',{delay:200, origin:'left'});
    sr.reveal('.home-img',{delay:200, origin:'right'});
   
  }, []);

  return (
    <div>
      <>
        {/* home section */}
        <section className="home" id="home">
          <div className="home-text">
            <h1>
              <span>Welcome</span> to The world of Tasty &amp; Fresh Pizza
            </h1>
            <p>Experience the perfect blend of flavors with our pizzas.<br />
            Crafted with the freshest ingredients for your enjoyment.
            </p>
            <Link className='btn' to='/menu'>Choose A Pizza</Link>
          </div>
          <div className="home-img">
            <img src="img/home.png" alt="home" />
          </div>
        </section>
      </>
      <section id="home-burger" className="home-burger">
  <div className="image myimage-burger">
    <img  src="src/images/home-img.png" alt="" />
  </div>
  <div className="content-burger">
    <h3>food made with love</h3>
    <p>
    Indulge in dishes crafted with love. From our kitchen to your plate, every bite tells a story of passion and flavor. Our commitment to quality ingredients and attention to detail ensures a culinary experience that delights the senses.
    </p>
    <Link className='btn' to='/menu'>Order Now</Link>
  </div>
</section>
<section className="gallery" id="gallery">
  <h1 className="heading-gallery">
    <span>Our</span> Gallery{" "}
  </h1>
  <div className="main-gallery-box">
    <div className="box-gallery">
      <img className="image-gallery" src="https://www.mashed.com/img/gallery/delicious-homemade-sauces-that-will-upgrade-any-meal/intro-1615237740.jpg" alt="" />
      <div className="content-gallery">
        <img src="src/images/s-1.png" alt="" />
        <h3>special sauces</h3>
        <p>
        Experience our special sauces, created with unique blends of spices.
        Enhance your dishes with our sauces, carefully crafted to elevate flavors.
        </p>
      </div>
    </div>
    <div className="box-gallery">
      <img className="image-gallery" src="src/images/s-img-2.jpg" alt="" />
      <div className="content-gallery">
        <img src="src/images/s-1.png" alt="" />
        <h3>flavorful pizza</h3>
        <p>
          Our flavorful pizza made with the finest ingredients ensures a taste sensation.
          Indulge in our pizza crafted with care, ensuring each bite bursts with flavor.
        </p>
      </div>
    </div>
    <div className="box-gallery">
      <img className="image-gallery" src="src/images/s-img-3.jpg" alt="" />
      <div className="content-gallery">
        <img src="src/images/s-1.png" alt="" />
        <h3>yummy sweets</h3>
        <p>
        Indulge in our yummy sweets, ranging from cakes to cookies.
        Treat yourself to our sweets, perfect for satisfying your cravings.
        </p>
      </div>
    </div>
    <div className="box-gallery">
      <img className="image-gallery" src="src/images/s-img-4.jpg" alt="" />
      <div className="content-gallery">
        <img src="src/images/s-1.png" alt="" />
        <h3>handmade lemonades</h3>
        <p>
        Quench your thirst with our refreshing handmade lemonades.
        Refresh yourself with our lemonades, made from freshly squeezed lemons.
        </p>
      </div>
    </div>
    <div className="box-gallery">
      <img className="image-gallery" src="https://b.zmtcdn.com/data/pictures/2/20486902/a0f880a8f6e81db444d9a5e71c412df4.jpg?fit=around|960:500&crop=960:500;*,*" alt="" />
      <div className="content-gallery">
        <img src="src/images/s-1.png" alt="" />
        <h3>tasty burger</h3>
        <p>
        Quench your thirst with our refreshing handmade lemonades.
        Refresh yourself with our lemonades, made from freshly squeezed lemons.
        </p>
      </div>
    </div>
    <div className="box-gallery">
      <img className="image-gallery" src="https://media.istockphoto.com/id/537703317/tr/foto%C4%9Fraf/chicken-nuggets-with-ketchup.jpg?s=170667a&w=0&k=20&c=hx3t8-iWsJFfqIo5Fsy1aPuUa_3XTX5uyURelEa0vQE=" alt="" />
      <div className="content-gallery">
        <img src="src/images/s-1.png" alt="" />
        <h3>delicate sides</h3>
        <p>
        Explore our delicate sides, designed to complement your main course.
        Complete your meal with our sides, prepared with care to enhance flavors.
        </p>
      </div>
    </div>
  </div>
</section>




      <>
        <section className="container">
          <div className="main-text">
          <h1 className="heading-review">
      {" "}
      Our Fresh <span> Ingridients</span>{" "}
    </h1>
          </div>
          <div className="container-box">
            <div className="c-mainbox">
              <div className="container-img">
                <img src="img/b1.png" alt="box1" />
              </div>
              <div className="container-text">
                <p>Delicate Dough</p>
              </div>
            </div>
            <div className="c-mainbox">
              <div className="container-img">
                <img src="img/b2.png" alt="box2" />
              </div>
              <div className="container-text">
                <p>Organic Tomatoes</p>
              </div>
            </div>
            <div className="c-mainbox">
              <div className="container-img">
                <img src="img/b3.png" alt="box3" />
              </div>
              <div className="container-text">
                <p>Alpine Cheese</p>
              </div>
            </div>
            <div className="c-mainbox">
              <div className="container-img">
                <img src="img/b4.png" alt="box4" />
              </div>
              <div className="container-text">
                <p>Italian Sausage</p>
              </div>
            </div>
            <div className="c-mainbox">
              <div className="container-img">
                <img width={"100px"} src="https://chefsmandala.com/wp-content/uploads/2018/03/Beef-Ground-II.jpg" alt="box5" />
              </div>
              <div className="container-text">
                <p>Fresh Beef</p>
              </div>
            </div>
            <div className="c-mainbox">
              <div className="container-img">
                <img width={"100px"} src="https://m.media-amazon.com/images/I/71XMKwfQCzL._AC_UF1000,1000_QL80_.jpg" alt="box6" />
              </div>
              <div className="container-text">
                <p>Champignon Mushroom</p>
              </div>
            </div>
          </div>
        </section> 
      </>
      <>
     
        <section className="about" id="about">
          <div className="about-img">
            <img src="img/a.png" alt="" />
          </div>
          <div className="about-text">
            <h2>
              Discover Mouthwatering Pizzas
              <br /> For Every Craving
            </h2>
            <p>
              Whether you're a fan of classic flavors or crave something unique,
              <br />
              our pizzas are crafted with the finest ingredients to satisfy your taste buds.
              Indulge in our delicious range of pizzas, each one bursting with flavor and quality.
            </p>
            <Link className='btn' to='/menu'>Explore Our Pizza Menu</Link>
          </div>

        </section>
      </>
      
<>
  {/* review section starts  */}
  <section className="review" id="review">
    <h1 className="heading-review">
      {" "}
      Our Customers <span> Reviews</span>{" "}
    </h1>
    <div className="box-container-review">
      <div className="box-review">
        <img src="src/images/pic1.png" alt="" />
        <h3>Sarah Taylor</h3>
        <div className="stars">
      <FontAwesomeIcon icon={fasStar} />
      <FontAwesomeIcon icon={fasStar} />
      <FontAwesomeIcon icon={fasStar} />
      <FontAwesomeIcon icon={fasStar} />
      <FontAwesomeIcon icon={farStar} />
    </div>
        <p>
        "The food at here was absolutely delicious! The atmosphere was cozy and welcoming, and the service was top-notch. I can't wait to come back for another meal."
        </p>
      </div>
      <div className="box-review">
        <img src="src/images/pic2.png" alt="" />
        <h3>john deo</h3>
        <div className="stars">
      <FontAwesomeIcon icon={fasStar} />
      <FontAwesomeIcon icon={fasStar} />
      <FontAwesomeIcon icon={fasStar} />
      <FontAwesomeIcon icon={fasStar} />
      <FontAwesomeIcon icon={farStar} />
    </div>
        <p>
        "My experience at here was fantastic. The flavors were exquisite, and each dish was beautifully presented. The staff was friendly and attentive, making it a memorable dining experience."
        </p>
      </div>
      <div className="box-review">
        <img src="src/images/pic3.png" alt="" />
        <h3>Lee Hye-jin</h3>
        <div className="stars">
      <FontAwesomeIcon icon={fasStar} />
      <FontAwesomeIcon icon={fasStar} />
      <FontAwesomeIcon icon={fasStar} />
      <FontAwesomeIcon icon={fasStar} />
    </div>
        <p>
        "I had a wonderful time at here The food was exceptional, with a great variety to choose from. The ambiance was lovely, and the staff made sure we had everything we needed. I highly recommend it to anyone looking for a great meal."
        </p>
      </div>
    </div>
  </section>
  {/* review section ends */}
</>
      <>
    
        {/* scroll top */}
        <a href="#home" className="scroll-top">
          <i className="bx bx-up-arrow-alt" />
        </a>
      </>
    </div>
  );
};

export default Home;
