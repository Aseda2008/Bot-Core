import React, { useContext } from "react";
import { OrganickContext } from "../../context";
import star from "../../assets/img/img20.png";
import { CiCircleMinus } from "react-icons/ci";
import { TbBackground } from "react-icons/tb";
import { Link } from "react-router-dom";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { color } from "framer-motion";

const Basket = () => {
  const { basket,setBasket } = useContext(OrganickContext);
  let totalPrice = basket.reduce((acc,el) => {
    return acc + el.price * el.quantity
  }  ,0)
 function DelBasket(){
    localStorage.removeItem("basket");
    setBasket([]);
 }
  return (
    <div id="Basket">
      <div class="container">
        <div class="Basket">
          <div class="Basket--basket">
            {basket?.map((el) => (
              <div className="Basket--basket__card" data-aos="zoom-in-up">
                <div class="Basket--basket__card--left">
                  <button>{el.category}</button>
                  <img
                    src={el.url}
                    alt="img"
                    onClick={() => nav(`/productDetail/${el._id}`)}
                  />
                </div>
                <div class="Basket--basket__card--right">
                  <a onClick={() => AddToBasket(el)}>
                    <CiCircleMinus />
                  </a>
                  <h3>{el.name}</h3>
                  <div className="Basket--basket__card--right__price">
                    <h4>0.{el.price * el.quantity}$</h4>
                    <div className="Basket--basket__card--right__price--rating">
                      <h4>0.{el.rating}</h4>
                      <img src={star} alt="img" />
                    </div>
                  </div>
                  <h1>
                    <p>-</p>
                    {el.quantity}
                    <p>+</p>
                  </h1>
                </div>
              </div>
            ))}
          </div>
          <div class="Basket--block">
        
            <div class="Basket--block__bar">
              <div
                class="Basket--block__bar--full"
                style={{
                  background:
                    basket.length === 1
                      ? "green"
                      : basket.length === 2
                      ? "yellowgreen"
                      : basket.length === 3
                      ? "orange"
                      : basket.length === 4
                      ? "orangered"
                      : basket.length === 5
                      ? "red"
                      : null,
                      width:
                      basket.length === 1
                      ? "20%"
                      : basket.length === 2
                      ? "40%"
                      : basket.length === 3
                      ? "60%"
                      : basket.length === 4
                      ? "80%"
                      : basket.length === 5
                      ? "100%"
                      : null,
                      color:"white"
                      

                }}
              >
                  <p>
                  {basket.length === 1
                      ? "20%"
                      : basket.length === 2
                      ? "40%"
                      : basket.length === 3
                      ? "60%"
                      : basket.length === 4
                      ? "80%"
                      : basket.length === 5
                      ? "100%"
                      : "0%"}
                      </p>
              </div>
            </div>
            <div class="Basket--block__totalPriceBlock">
            <div class="Basket--block__totalPriceBlock--totalPrice">
            <h1>Totalprice:</h1>
                <h1>0.{totalPrice}$</h1>
            </div>
            </div>
            <div class="Basket--block__btn">
              <Link to={"/shop"}>  <button>Add Product <MdOutlineArrowRightAlt /></button></Link>
            <button onClick={() => DelBasket()}>Delete Product </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
