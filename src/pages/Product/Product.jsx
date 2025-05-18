import React, { useContext } from "react";
import star from "../../assets/img/img20.png";
import { Link, useNavigate } from "react-router-dom";
import { OrganickContext } from "../../context";
import { GrAddCircle } from "react-icons/gr";
const Product = ({ el }) => {
  const nav = useNavigate();
  const { basket, setBasket } = useContext(OrganickContext);
  function AddToBasket(item) {
    let some = basket.some((el) => el._id === item._id);
    if (some) {
      let res = basket.map((el) => {
        return { ...el, quantity: el.quantity + 1 };
      });
      setBasket(res);
      localStorage.setItem("basket", JSON.stringify(res));
    } 
    else if (basket.length === 5) {
      alert("404");
    } 
    else {
      item.quantity = 1;
      let res = [...basket, item];
      setBasket(res);
      localStorage.setItem("basket", JSON.stringify(res));
    }
  }

  return (
    <>
      <div id="home">
        <div className="container">
          <div className="home">
            <div className="home--card" data-aos="zoom-in-up">
              <button>{el.category}</button>
              <a onClick={() => AddToBasket(el)}>
              <GrAddCircle/>
              </a>
              <img
                src={el.url}
                alt="img"
                onClick={() => nav(`/productDetail/${el._id}`)}
              />
              <h3>{el.name}</h3>
              <hr />
              <div className="home--card__price">
                <h4>{el.price}$</h4>
                <div className="home--card__price--rating">
                  <img src={star} alt="img" />
                  <h4>0.{el.rating}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
