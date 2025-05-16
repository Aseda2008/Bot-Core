import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { OrganickContext } from "../../context";
import banner from "../../assets/img/Banner.svg";
import { IoArrowForwardCircle } from "react-icons/io5";
import star from "../../assets/img/img20.png";
import { Link } from "react-router-dom";

const CardDetails = () => {
  const { shopId } = useParams();
  const [productDateli, setproductDateli] = useState(null);
  const [count, setCount] = useState(1);
  const { organick } = useContext(OrganickContext);
  function getDeatails() {
    let res = organick.find((el) => el._id === +shopId);
    setproductDateli(res);
  }
  useEffect(() => {
    getDeatails();
  }, []);
  return (
    <div id="Details">
      <div
        className="banner"
        style={{
          background: `url(${banner}) no-repeat center`,
          backgroundPosition: "center",
          height: "70vh",
          marginBottom: "30px",
        }}
      ></div>
      <div className="container">
        <div className="Details">
          <div class="Details--left">
            <button>{productDateli?.category}</button>
            <img src={productDateli?.url} alt="img" />
          </div>
          <div class="Details--right">
            <h1>{productDateli?.name}</h1>
            <div class="Details--right__star">
              <img src={star} alt="img" />
              <h2>{productDateli?.rating}</h2>
            </div>
            <h2>$0.{productDateli?.price}</h2>
            <p>{productDateli?.des}</p>
            <div class="Details--right__Quantity">
              <h2>Quantity :</h2>
              <h3>
                {" "}
                <p onClick={() => setCount(count === 1 ? 1 : count - 1)}>-</p>
                {count} <p onClick={() => setCount(count + 1)}>+</p>
              </h3>
              <button>
                Add To Cart
                <IoArrowForwardCircle />
              </button>
            </div>
          </div>
        </div>
        <div class="Details--bottom">
          <div class="Details--bottom__Product">
            <button
              style={{
                background: "#274c5b",
                color: "#ffffff",
                fontSize: "15px",
                width: "190px",
                padding: " 5px",
                height: "50px",
                borderRadius: " 10px",
              }}
            >
              Product Description
            </button>
<Link to={`/ServiceDetails/${productDateli?._id}`}>  <button
    style={{
      background: "#EFF6F1",
      color: "#274c5b",
      fontSize: "15px",
      width: "250px",
      padding: "5px",
      height: "50px",
      borderRadius: "10px",
    }}
  >
    Additional Info
  </button></Link>

          </div>
          <p>
            Welcome to the world of natural and organic. Here you can discover
            the bounty of nature. <br />
            We have grown on the principles of health, ecology, and care. We aim
            to give our customers a healthy <br />
            chemical-free meal for perfect nutrition. It offers about 8–10%
            carbs. Simple sugars — such as glucose and <br />
            fructose — make up 70% and 80% of the carbs in raw.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
