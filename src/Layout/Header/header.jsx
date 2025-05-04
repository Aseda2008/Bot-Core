import React from "react";
import logo from "../../assets/img/Logo.svg";
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";

import { IoSearch } from "react-icons/io5";
const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <img src={logo} alt="img" />
          <div className="header--nav">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <select>
              <option value="Pages">Pages</option>
              <option value="1">1Pages</option>
              <option value="2">2Pages</option>
              <option value="3">3Pages</option>
              <option value="4">4Pages</option>
            </select>
            <Link to={"/"}>Pages</Link>
            <Link to={"/"}>Shop</Link>
            <Link to={"/"}>Projects</Link>
            <Link to={"/"}>News</Link>
          </div>
       <div class="header--block">
       <div className="header--block__search">
            <input type="text" />
            <a><IoSearch /></a>
          </div>
          <div className="header--block__card">
              <a><MdShoppingCart /></a>
              <p>Cart (0)</p>
            </div>
       </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
