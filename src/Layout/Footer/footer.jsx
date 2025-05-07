import React from "react";
import bg from "../../assets/img/bg.svg";
import logo from "../../assets/img/logo.svg";
import { FaFacebook, FaInstagram, FaPinterestP, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer id="footer">
      <div class="container">
        <div class="footer">
        <img src={bg} alt="img"/>
          <div class="footer--block">
            <h1>
              Subscribe to <br />
              our Newsletter
            </h1>
            <div class="footer--block__sub">
              <input type="text" placeholder="Your Email Address" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div class="card">
            <div class="card--left">
              <h1>Contact Us</h1>
              <h4>Email</h4>
              <p>needhelp@Organia.com</p>
              <h4>Phone</h4>
              <p>666 888 888</p>
              <h4>Address</h4>
              <p>
                Email needhelp@Organia.com <br/>
                Phone 666 888 888 <br/>Address 88 road,
                borklyn street, USA
              </p>
            </div>
            <div class="card--line"></div>
            <div class="card--center">
              <img src={logo} alt="img" />
              <p>
                Simply dummy text of the printing and typesetting industry.{" "}
                <br />
                Lorem Ipsum simply dummy text of the printing{" "}
              </p>
              <div class="card--center__circle">
                <a><FaInstagram /></a>
                <a><FaFacebook /></a>
                <a><FaTwitter /></a>
                <a><FaPinterestP /></a>
              </div>
            </div>
            <div class="card--line"></div>
            <div class="card--rigth">
                <h1>Utility Pages</h1>
                <p>Style Guide</p>
                <p>404 Not Found</p>
                <p>Password Protected</p>
                <p>Licences</p>
                <p>Changelog</p>
            </div>
          </div>
        
      </div>
      <div class="bottom">
            <p>Copyright © Organick</p>
          </div>
    </footer>
  );
};

export default Footer;
