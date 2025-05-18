import React, { useState } from "react";
import banner from "../../assets/img/img24.png";
import img25 from "../../assets/img/img25.svg";
import img26 from "../../assets/img/img26.svg";
import img27 from "../../assets/img/img27.svg";
import img28 from "../../assets/img/img28.svg";
import img29 from "../../assets/img/img29.svg";
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from "react-icons/fa";
import { BiBorderRadius } from "react-icons/bi";
import { MdOutlinePlace } from "react-icons/md";
import axios from "axios";
const Contact = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [Company,setCompany] = useState("")
  const [Subject,setSubject] = useState("")
  const [Message,setMessage] = useState("")
  // 7772551029:AAEt28o7fm07lr6UB3nJxffe3x4yHojnwr8
  function productSubmit(){
    const my_id = "2511453008"
    const token = "7772551029:AAEt28o7fm07lr6UB3nJxffe3x4yHojnwr8"
    const api_key = `https://api.telegram.org/bot${token}/sendMessage`
    const data = {
      chat_id:my_id,
      parse_model:"HTML",
      text:`Заказ:
      name:${name}
      email:${email}
      Company:${Company}
      Subject:${Subject}
      Message:${Message}
      `
    }
    axios.post(api_key,data)

  }
  return (
    <section id="contact">
      <div
        className="contactBG"
        style={{
          background: `url(${banner}) no-repeat center/cover`,
          height: "60vh",
          width: "100%",
        }}
      ></div>
      <div className="container">
        <div className="contact">
          <div class="contact--block">
            <img src={img25} alt="img" />
            <div class="contact--block__card">
              <h1>
                We'd love to talk about how we <br />
                can work together.
              </h1>
              <p>
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to <br />
                been the industry's standard dummy text ever since the 1500s,
                when an unknown <br />
                printer took a galley.
              </p>
              <div class="contact--block__card--massege">
            <img src={img26} alt="img" style={{width: "60px"}}/>
            <div class="contact--block__card--massege__text">
                <h3>Massege</h3>
            <p>support@organic.com</p>
            </div>
              </div>
               <div class="contact--block__card--massege">
            <img src={img27} alt="img" style={{width: "60px"}}/>
            <div class="contact--block__card--massege__text">
                <h3>Contact Us</h3>
            <p>+01 123 456 789</p>
            </div>
            
              </div>
              <div class="contact--block__card--icons">
                <div class="contact--block__card--icons__icon">
                    <a href="#"><FaInstagram /></a>
                </div>
                <div class="contact--block__card--icons__icon">
                    <a href="#"><FaFacebookF /></a>
                </div>
                 <div class="contact--block__card--icons__icon">
                    <a href="#"><FaTwitter /></a>
                </div>
                 <div class="contact--block__card--icons__icon">
                    <a href="#"><FaPinterestP /></a>
                </div>
              </div>
            </div>
          </div>
          <div class="contact--Farms" 
          style={{background:`url(${img28}) no-repeat center/cover`,
          width: "100%",
          height:"70vh",
          borderRadius:"25px"}}>
        <div class="contact--Farms__Location">
    <img src={img29} alt="img"/>
    <h1>Our Farms</h1>
    <p>Established fact that a reader will be distracted <br/>
    by the readable content of a page when looking <br/>
    a layout. The point of using.</p>
    <div class="contact--Farms__Location--address">
        <a href="#"><MdOutlinePlace /></a>
        <div class="contact--Farms__Location--address__text">
            <h3>New York, USA:</h3>
            <p>299 Park Avenue New York, <br/>
            New York 10171</p>
        </div>
    </div>
    <div class="contact--Farms__Location--address">
        <a href="#"><MdOutlinePlace /></a>
        <div class="contact--Farms__Location--address__text">
            <h3>New York, USA:</h3>
            <p>299 Park Avenue New York, <br/>
            New York 10171</p>
        </div>
    </div>
        </div>
          </div>
          <div class="contact--Massege">
           <div class="contact--Massege__inputs">
             <div class="contact--Massege__inputs--input">
                <h4>Full Name*</h4>
                <input type="text" placeholder="User Name" onChange={(e) => setName(e.target.value)}/>
            </div>
            <div class="contact--Massege__inputs--input">
                <h4>Your Email*</h4>
                <input type="text" placeholder="example@yourmail.com" onChange={(e) => setEmail(e.target.value)}/>
            </div>
           </div>
            <div class="contact--Massege__inputs">
             <div class="contact--Massege__inputs--input">
                <h4>Company*</h4>
                <input type="text" placeholder="yourcompany name here" onChange={(e) => setCompany(e.target.value)}/>
            </div>
             <div class="contact--Massege__inputs--input">
                <h4>Subject*</h4>
                <input type="text" placeholder="how can we help" onChange={(e) => setSubject(e.target.value)}/>
            </div>
            </div>
            <div class="contact--Massege__input">
                <h4>Message*</h4>
              <textarea placeholder="hello there,i would like to talk about how to..." onChange={(e) => setMessage(e.target.value)}>  
              </textarea>
            </div>
            <button onClick={productSubmit}>Send Message</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
