import React, { useContext } from "react";
import star from "../../assets/img/img20.png";
import { LiaOpencart } from "react-icons/lia";
import { Link, useNavigate } from "react-router-dom";
import { OrganickContext } from "../../context";
const Product = ({ el }) => {
  const nav = useNavigate()
  const {basket,setBasket} = useContext(OrganickContext)
  const someBasket = basket.some((item) => item._id === el._id)
  function AddToBasket(item){
    if(someBasket){
      let res = basket.map((el) => {
        return {...el,}
      })
    }

  }
  return (
    <>
      <section id="home">
        <div className="container">
          <div className="home">
            <div className="home--card" data-aos="zoom-in-up">
              <button>{el.category}</button>
              <Link to={"/basket"}><a>
                <LiaOpencart />
              </a></Link>
                <img src={el.url} alt="img" onClick={() => nav(`/productDetail/${el._id}`)}/>
                 <h3>{el.name}</h3>
              <hr />
              <div className="home--card__price">
                <h4>{el.price}$</h4>
                <div className="home--card__price--rating">
                  <img src={star} alt="img" />
                  <h4>{el.rating}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
