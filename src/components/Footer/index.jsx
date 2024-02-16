import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div>
    <section className="contact" id="contact">
          <div className="main-contact">
            <div className="contact-content">
              <h4>Services</h4>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#menu">Menu</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </div>
            <div className="contact-content">
              <h4>Delivery</h4>
              <li>
                <a href="#home">Uber Eats</a>
              </li>
              <li>
                <a href="#about">DoorDash</a>
              </li>
              <li>
                <a href="#menu">ChowNow</a>
              </li>
              <li>
                <a href="#contact">Toast TakeOut</a>
              </li>
            </div>
            <div className="contact-content">
              <h4>Contact</h4>
              <li>
                <a href="#home">Contact Us</a>
              </li>
              <li>
                <a href="#about">Press Center</a>
              </li>
              <li>
                <a href="#menu">Careers</a>
              </li>
              <li>
                <a href="#contact">FAQ</a>
              </li>
            </div>
            <div className="contact-content">
              <h4>Follow Us</h4>
              <li>
                <a href="#home">TikTok</a>
              </li>
              <li>
                <a href="#about">Twitter</a>
              </li>
              <li>
                <a href="#menu">Facebook</a>
              </li>
              <li>
                <a href="#menu">Instagramm</a>
              </li>
            </div>
          </div>
        </section>
        <div className="last-text">
           <p>&copy; 2024 Petruccio. All rights reserved.</p>
        </div></div>
  );
};

export default Footer;
