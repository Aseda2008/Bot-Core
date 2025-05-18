import React, { useContext } from "react";
import { OrganickContext } from "../../context";
import Product from "../Product/Product";
import Banner from "../../assets/img/BannerShop.svg";

const Shop = () => {
  const { organick } = useContext(OrganickContext);
  return (
    <section id="home">
      <div
        id="shop"
        style={{
          background: `url(${Banner}) no-repeat center/cover`,
          width: "100%",
          height: "50vh",
        }}
      ></div>
      <div className="container">
        <div className="shop">
          {organick?.map((el) => (
            <Product el={el} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
