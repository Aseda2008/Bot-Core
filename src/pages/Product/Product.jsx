import React from "react";

const Product = ({ el }) => {
  return (
    <>
      <section id="home">
        <div className="container">
          <div className="home">
            <div className="home--card" data-aos="zoom-in-up">
              <button>{el.category}</button>
              <img src={el.url} alt="img" />
              <h3>{el.name}</h3>
              <hr />
              <h4>{el.price}com</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
