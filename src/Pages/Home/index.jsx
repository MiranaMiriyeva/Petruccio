import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as fasStar,
  faStar as farStar,
  faArrowAltCircleUp,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import { getTop } from "../../provider/backToTop";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";
const Home = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "30px",
      duration: 2500,
      reset: true,
    });

    sr.reveal(".home-text", { delay: 200, origin: "left" });
    sr.reveal(".home-img", { delay: 200, origin: "right" });
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
            <p>
              Experience the perfect blend of flavors with our pizzas.
              <br />
              Crafted with the freshest ingredients for your enjoyment.
            </p>
            <Link className="btn" to="/menu" onClick={() => getTop()}>
              Choose A Pizza
            </Link>
          </div>
          <div className="home-img">
            <img src="https://simbapizza.am/cache/1677643035.jpg" alt="home" />
          </div>
        </section>
      </>
      <section id="home-burger" className="home-burger">
        <div className="image myimage-burger">
          <img
            src="https://pngfile.net/download/bbPW45U2DUdrX1HEdkTUkhn5xfCiFQnLYxDIdsloGO9UveIwmfOwMGiWFU0Nqcc16pmt1vGVMY1gUfwwjTHp1oBBDAY1x3LmgNGbRZ8sL68zmYEec4XtPYpGmmg3umA0JV9uTN6e3GboOw8GXgjQOd6lrjALuBAmLKaq2BgMyETZ1JiWTygqwoOT1BpBa1pvhF3QIHyi/medium"
            alt=""
          />
        </div>
        <div className="content-burger">
          <h3>food made with love</h3>
          <p>
            Indulge in dishes crafted with love. From our kitchen to your plate,
            every bite tells a story of passion and flavor. Our commitment to
            quality ingredients and attention to detail ensures a culinary
            experience that delights the senses.
          </p>
          <Link className="btn" to="/menu" onClick={() => getTop()}>
            Order Now
          </Link>
        </div>
      </section>
      <section className="gallery" id="gallery">
        <h1 className="heading-gallery">
          <span>Our</span> Gallery{" "}
        </h1>
        <div className="main-gallery-box">
          <div className="box-gallery">
            <img
              className="image-gallery"
              src="https://www.paulinacocina.net/wp-content/uploads/2023/09/pizza-margherita-paulina-cocina-recetas.jpg"
              alt=""
            />
            <div className="content-gallery">
              <img
                src="https://cdn-icons-png.flaticon.com/512/7183/7183811.png"
                alt=""
              />
              <h3>flavorful pizza</h3>
              <p>
                Our flavorful pizza made with the finest ingredients ensures a
                taste sensation.Ensuring each bite bursts with flavor.
              </p>
            </div>
          </div>

          <div className="box-gallery">
            <img
              className="image-gallery"
              src="https://t3.ftcdn.net/jpg/03/50/41/38/360_F_350413831_Db4MUWuI16d1ZdVLSyS3EggemYEYTMmX.jpg"
              alt=""
            />
            <div className="content-gallery">
              <img
                src="https://static.vecteezy.com/system/resources/previews/012/397/059/original/icon-of-coffee-mocha-or-cappuccino-vector.jpg"
                alt=""
              />
              <h3>aromatic coffee</h3>
              <p>
              Experience the perfect blend of rich, aromatic coffee beans, freshly brewed to awaken your senses and elevate your day. .
              </p>
            </div>
          </div>
          <div className="box-gallery">
            <img
              className="image-gallery"
              src="https://b.zmtcdn.com/data/pictures/2/20486902/a0f880a8f6e81db444d9a5e71c412df4.jpg?fit=around|960:500&crop=960:500;*,*"
              alt=""
            />
            <div className="content-gallery">
              <img
                src="https://t3.ftcdn.net/jpg/02/36/03/66/360_F_236036622_ctUjaJTkIANvk9pJh0s5ZJRDWbM8ggT9.jpg"
                alt=""
              />
              <h3>tasty burger</h3>
              <p>
              Savor the ultimate burger experience with our juicy, handcrafted patties, bursting with rich, mouth-watering flavors.
              </p>
            </div>
          </div>
          <div className="box-gallery">
            <img
              className="image-gallery"
              src="https://media.istockphoto.com/id/537703317/tr/foto%C4%9Fraf/chicken-nuggets-with-ketchup.jpg?s=170667a&w=0&k=20&c=hx3t8-iWsJFfqIo5Fsy1aPuUa_3XTX5uyURelEa0vQE="
              alt=""
            />
            <div className="content-gallery">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2011/2011313.png"
                alt=""
              />
              <h3>delicate sides</h3>
              <p>
                Explore our delicate sides, designed to complement your main
                course. Complete your meal with our sides.
              </p>
            </div>
          </div>
          <div className="box-gallery">
            <img
              className="image-gallery"
              src="https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/rhoaiclqj1rrhfxnln5y"
              alt=""
            />
            <div className="content-gallery">
              <img
                src="https://cdn-icons-png.flaticon.com/512/6978/6978223.png"
                alt=""
              />
              <h3>hot shawarma</h3>
              <p>
              Marinated meat meets a symphony of spices, wrapped in soft, warm bread. A true taste of tradition
              </p>
            </div>
          </div>
          {/* <div className="box-gallery">
      <img className="image-gallery" src="https://img.freepik.com/free-photo/homemade-ketchup-mustard-mayonnaise-sauce_114579-53041.jpg" alt="" />
      <div className="content-gallery">
        <img src="src/images/s-1.png" alt="" />
        <h3>special sauces</h3>
        <p>
        Experience our special sauces, created with unique blends of spices.
        Enhance your dishes with our sauces, carefully crafted to elevate flavors.
        </p>
      </div>
    </div> */}
          <div className="box-gallery">
            <img
              className="image-gallery"
              src="https://www.restaurant-hospitality.com/sites/restaurant-hospitality.com/files/styles/article_featured_retina/public/uploads/2015/02/red-velvet.jpg?itok=RbLT1RCt"
              alt=""
            />
            <div className="content-gallery">
              <img
                src="https://media.istockphoto.com/id/1066261730/vector/cake-slice-drawing.jpg?s=612x612&w=0&k=20&c=BtUQfXODkc6EE_vZ_J8K-OCNt8xUnbkfhqxOMaAuiU8="
                alt=""
              />
              <h3>yummy sweets</h3>
              <p>
                Indulge in our yummy sweets, ranging from cakes to cookies.
                Treat yourself to our sweets, perfect for satisfying your
                cravings.
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
                <img src="https://pngimg.com/d/dough_PNG17.png" alt="box1" />
              </div>
              <div className="container-text">
                <p>Delicate Dough</p>
              </div>
            </div>
            <div className="c-mainbox">
              <div className="container-img">
                <img
                  src="https://freepngimg.com/save/17363-tomato-png-image/345x225"
                  alt="box2"
                />
              </div>
              <div className="container-text">
                <p>Organic Tomatoes</p>
              </div>
            </div>
            <div className="c-mainbox">
              <div className="container-img">
                <img
                  src="https://t3.ftcdn.net/jpg/03/27/31/56/360_F_327315656_xVG2OaOJfq5R0abiwGrcIaJz6DicSFjG.jpg"
                  alt="box3"
                />
              </div>
              <div className="container-text">
                <p>Alpine Cheese</p>
              </div>
            </div>
            <div className="c-mainbox">
              <div className="container-img">
                <img
                  src="https://pngimg.com/uploads/sausage/sausage_PNG98741.png"
                  alt="box4"
                />
              </div>
              <div className="container-text">
                <p>Italian Sausage</p>
              </div>
            </div>
            <div className="c-mainbox">
              <div className="container-img">
                <img
                  width={"100px"}
                  src="https://chefsmandala.com/wp-content/uploads/2018/03/Beef-Ground-II.jpg"
                  alt="box5"
                />
              </div>
              <div className="container-text">
                <p>Fresh Beef</p>
              </div>
            </div>
            <div className="c-mainbox">
              <div className="container-img">
                <img
                  width={"100px"}
                  src="https://m.media-amazon.com/images/I/71XMKwfQCzL._AC_UF1000,1000_QL80_.jpg"
                  alt="box6"
                />
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
            <img
              src="https://img.freepik.com/premium-photo/pizza-isolate-white-background-generative-ai_74760-2619.jpg"
              alt=""
            />
          </div>
          <div className="about-text">
            <h2>
              Discover Mouthwatering Pizzas
              <br /> For Every Craving
            </h2>
            <p>
              Whether you're a fan of classic flavors or crave something unique,
              <br />
              our pizzas are crafted with the finest ingredients to satisfy your
              taste buds. Indulge in our delicious range of pizzas, each one
              bursting with flavor and quality.
            </p>
            <Link className="btn" to="/menu" onClick={() => getTop()}>
              Explore Our Pizza Menu
            </Link>
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
            {/* <Swiper
        slidesPerView={3}
        spaceBetween={30}
              freeMode={true}
              
        pagination={{
          clickable: true,
   
        }}
        modules={[FreeMode, Pagination]}
              className="mySwiper"
              
              
      > */}
            <Swiper
              spaceBetween={10}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
              breakpoints={{
                // 1024px'den büyük ekranlar için 3 slide göster
                1124: {
                  slidesPerView: 3,
                },
                // 600px ile 1024px arası ekranlar için 2 slide göster
                800: {
                  slidesPerView: 2,
                },
                // 600px'den küçük ekranlar için 1 slide göster
                0: {
                  slidesPerView: 1,
                },
              }}
            >
              <SwiperSlide className="swiper-slide">
                {" "}
                <div className="box-review">
                  <img
                    src="https://reductress.com/wp-content/uploads/2019/06/petite-woman-1-820x500.jpg"
                    alt=""
                  />
                  <h3>Sarah Taylor</h3>
                  <div className="stars">
                    <FontAwesomeIcon icon={fasStar} />
                    <FontAwesomeIcon icon={fasStar} />
                    <FontAwesomeIcon icon={fasStar} />
                    <FontAwesomeIcon icon={fasStar} />
                    <FontAwesomeIcon icon={farStar} />
                  </div>
                  <p>
                    "The food at here was absolutely delicious! The atmosphere
                    was cozy and welcoming, and the service was top-notch. I
                    can't wait to come back for another meal."
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="box-review">
                  <img
                    src="https://t4.ftcdn.net/jpg/04/56/51/91/360_F_456519184_CDS9Trh77ukgYikJ7WwxjIj8z0ylOdG2.jpg"
                    alt=""
                  />
                  <h3>john deo</h3>
                  <div className="stars">
                    <FontAwesomeIcon icon={fasStar} />
                    <FontAwesomeIcon icon={fasStar} />
                    <FontAwesomeIcon icon={fasStar} />
                    <FontAwesomeIcon icon={fasStar} />
                    <FontAwesomeIcon icon={farStar} />
                  </div>
                  <p>
                    "My experience at here was fantastic. The flavors were
                    exquisite, and each dish was beautifully presented. The
                    staff was friendly and attentive."
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="box-review">
                  <img
                    src="https://techgirlsglobal.org/wp-content/uploads/2023/01/79F8E534-17E4-47A6-88A0-8B9D19811879-%E5%BC%B5%E6%81%A9%E6%85%88-Grace-Chang.jpg"
                    alt=""
                  />
                  <h3>Lee Hye-jin</h3>
                  <div className="stars">
                    <FontAwesomeIcon icon={fasStar} />
                    <FontAwesomeIcon icon={fasStar} />
                    <FontAwesomeIcon icon={fasStar} />
                    <FontAwesomeIcon icon={fasStar} />
                  </div>
                  <p>
                    "I had a wonderful time at here The food was exceptional,
                    with a great variety to choose from. The ambiance was
                    lovely, and the staff made sure we had everything we needed.
                    "
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="box-review">
                  <img
                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZha2UlMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D"
                    alt=""
                  />
                  <h3>Jack Smith</h3>
                  <div className="stars">
                    <FontAwesomeIcon icon={fasStar} />
                    <FontAwesomeIcon icon={fasStar} />
                    <FontAwesomeIcon icon={fasStar} />
                    <FontAwesomeIcon icon={fasStar} />
                    <FontAwesomeIcon icon={farStar} />
                  </div>
                  <p>
                    "I love this place! The burgers are always juicy and the
                    fries are crispy. The service is quick and the prices are
                    reasonable. Definitely my go-to spot for a quick bite."
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="box-review">
                  <img
                    src="https://images.unsplash.com/photo-1525517450344-d08c6a528e3c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                  <h3>Sophia Martinez</h3>
                  <div className="stars">
                    <FontAwesomeIcon icon={fasStar} />
                    <FontAwesomeIcon icon={fasStar} />
                    <FontAwesomeIcon icon={fasStar} />
                    <FontAwesomeIcon icon={fasStar} />
                  </div>
                  <p>
                    "Decent food, but nothing extraordinary. The menu is quite
                    limited and the ambiance could use some improvement.
                    However, the staff is friendly and the location is
                    convenient."
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="box-review">
                  <img
                    src="https://images.unsplash.com/photo-1481214110143-ed630356e1bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGZha2UlMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D"
                    alt=""
                  />
                  <h3>Emily Johnson</h3>
                  <div className="stars">
                    <FontAwesomeIcon icon={fasStar} />
                    <FontAwesomeIcon icon={fasStar} />
                    <FontAwesomeIcon icon={fasStar} />
                    <FontAwesomeIcon icon={fasStar} />
                    <FontAwesomeIcon icon={fasStar} />
                  </div>
                  <p>
                    "I was pleasantly surprised by the quality of the food here.
                    The burgers are flavorful and the portions are generous.
                    It's a great spot for a casual meal with friends."
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="box-review">
                  <img
                    src="https://images.unsplash.com/photo-1611403119860-57c4937ef987?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGZha2UlMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D"
                    alt=""
                  />
                  <h3>Ha Nguyen</h3>
                  <div className="stars">
                    <FontAwesomeIcon icon={fasStar} />
                    <FontAwesomeIcon icon={fasStar} />
                    <FontAwesomeIcon icon={fasStar} />
                    <FontAwesomeIcon icon={fasStar} />
                    <FontAwesomeIcon icon={fasStar} />
                  </div>
                  <p>
                    "The best fast food joint in town! The burgers are
                    mouthwatering and the milkshakes are to die for. I love the
                    retro vibe of the place too. Can't get enough of it."
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="box-review">
                  <img
                    src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM4fHxmYWtlJTIwcGVvcGxlfGVufDB8fDB8fHww"
                    alt=""
                  />
                  <h3>Ian Dooley</h3>
                  <div className="stars">
                    <FontAwesomeIcon icon={fasStar} />
                    <FontAwesomeIcon icon={fasStar} />
                    <FontAwesomeIcon icon={fasStar} />
                    <FontAwesomeIcon icon={fasStar} />
                    <FontAwesomeIcon icon={fasStar} />
                  </div>
                  <p>
                    "The food was good, the service was friendly, and the prices
                    were fair. It's not the fanciest place, but it hits the spot
                    when you're craving some classic fast food."
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        {/* review section ends */}
      </>
      <>
        {/* scroll top */}
        <a href="#home" className="scroll-top">
          <div
            style={{
              backgroundColor: "orange",
              padding: "10px 15px",
              borderRadius: "50%",
            }}
          >
            <FontAwesomeIcon
              icon={faArrowUp}
              style={{ color: "white", backgroundColor: "orange" }}
            />
          </div>
        </a>
      </>
    </div>
  );
};

export default Home;
