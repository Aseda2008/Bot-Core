import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { OrganickContext } from '../../context';
import banner from "../../assets/img/i.svg";
import WhatweGrow from "../../assets/img/What we Grow.svg";
import img1 from "../../assets/img/icon (2).svg"
import img2 from "../../assets/img/icon (3).svg"
import img3 from "../../assets/img/icon (4).svg"
import img4 from "../../assets/img/icon (5).svg"
import img5 from "../../assets/img/icon (6).svg"
import img6 from "../../assets/img/icon (7).svg"
import img7 from "../../assets/img/service.svg"
import img8 from "../../assets/img/Only.svg"
import { SlArrowRightCircle } from 'react-icons/sl';
import { BsCaretRightFill } from 'react-icons/bs';
 function ServiceDetails() {
const {shopId} = useParams()
const {organick} = useContext(OrganickContext)
const [detail,setDetail] = useState({})
function getId(){
  let res = organick.find((el) => el._id === +shopId)
  setDetail(res)
}
useEffect(() => {
  getId()
},[])
console.log(detail);

  return (
    <div id="service">
      <div
        className="service"
        style={{
          background: `url(${banner}) no-repeat center`,
          backgroundPosition: "center",
          height: "70vh",
          marginBottom: "30px",
        }}
      ></div>
      <div className="container">
       <div className="service">
         <div className="service--WhatweGrow">
          <img src={WhatweGrow} alt="img" />
          <h1>Better Agriculture for <br /> Better Future</h1>
        </div>
        <div class="service--block">
         <div class="service--block__left">
         <img src={img1} alt="img"/>
          <h2>Dairy Products</h2>
          <p>Sed ut perspiciatis unde omnis iste natus error <br/>
          sit voluptat accusantium doloremqlaudantium.<br/>
           Sed ut perspiciatis</p>
            <img src={img2} alt="img"/>
          <h2>Store Services</h2>
          <p>Sed ut perspiciatis unde omnis iste natus error <br/>
          sit voluptat accusantium doloremqlaudantium.<br/>
           Sed ut perspiciatis</p>
            <img src={img3} alt="img"/>
          <h2>Delivery Services</h2>
          <p>Sed ut perspiciatis unde omnis iste natus error <br/>
          sit voluptat accusantium doloremqlaudantium.<br/>
           Sed ut perspiciatis</p>
        </div>
          <img src={detail?.url} alt="img"/>
        <div class="service--block__right">
           <img src={img4} alt="img"/>
          <h2>Agricultural Services</h2>
          <p>Sed ut perspiciatis unde omnis iste natus error <br/>
          sit voluptat accusantium doloremqlaudantium.<br/>
           Sed ut perspiciatis</p>
            <img src={img5} alt="img"/>
          <h2>Organic Products</h2>
          <p>Sed ut perspiciatis unde omnis iste natus error <br/>
          sit voluptat accusantium doloremqlaudantium.<br/>
           Sed ut perspiciatis</p>
            <img src={img6} alt="img"/>
          <h2>Fresh Vegetables</h2>
          <p>Sed ut perspiciatis unde omnis iste natus error <br/>
          sit voluptat accusantium doloremqlaudantium.<br/>
           Sed ut perspiciatis</p>
        </div>
        </div>
   <center> <button>Explore More<SlArrowRightCircle/></button></center>
       </div>

      </div>
      <div className="service--organick" style={{
        background:`url(${img7}) no-repeat center/cover`,
      height:"130vh",
      }}
      >
      <img src={img8} alt="img"/>
      <h1>Everyday Fresh & Clean</h1>
      <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased <br/>to been the industry's standard dummy text ever since the </p>
      <div class="service--organick__cricle">
        <a href="https://www.youtube.com/watch?v=UnuP4vrLvc4"><BsCaretRightFill/></a>
      </div>
       
      </div>
    </div>
  );
 } 

export default ServiceDetails;
