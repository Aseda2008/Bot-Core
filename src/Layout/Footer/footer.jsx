import React from "react";
import bg from "../../assets/img/bg.svg";
import logo from "../../assets/img/logo.svg";
import { FaFacebook, FaInstagram, FaPinterestP, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">
        <img src={bg} alt="img"/>
          <div className="footer--block">
            <h1>
              Subscribe to <br />
              our Newsletter
            </h1>
            <div className="footer--block__sub">
              <input type="text" placeholder="Your Email Address" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div className="card">
            <div className="card--left">
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
            <div className="card--line"></div>
            <div className="card--center">
              <img src={logo} alt="img" />
              <p>
                Simply dummy text of the printing and typesetting industry.{" "}
                <br />
                Lorem Ipsum simply dummy text of the printing{" "}
              </p>
              <div className="card--center__circle">
               <a href="https://www.organickpastures.com/"><FaInstagram /></a>
                <a><FaFacebook /></a>
                <a><FaTwitter /></a>
                <a><FaPinterestP /></a>
              </div>
            </div>
            <div className="card--line"></div>
            <div className="card--rigth">
                <h1>Utility Pages</h1>
                <p>Style Guide</p>
                <p>404 Not Found</p>
                <p>Password Protected</p>
                <p>Licences</p>
                <p>Changelog</p>
            </div>
          </div>
        
      </div>
      <div className="bottom">
            <p>Copyright © Organick</p>
          </div>
    </footer>
  );
};

export default Footer;
