import React, { useState } from "react";
import logo from "../../assets/img/Logo.svg";
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuSquareMenu } from "react-icons/lu";
const Header = () => {
  const [menuOpen,setMenuOpen] = useState(false)
  function togglMenu(){
    setMenuOpen(!menuOpen)
  }
  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <img src={logo} alt="img"/>
          <div className="header--nav">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <select>
              <option value="Pages">Pages</option>
              <option value="Home">Home</option>
              <option value="Shop">Shop</option>
              <option value="Projects">Projects</option>
              <option value="News">News</option>
              <option value="Admin">Admin</option>
            </select>
            <Link to={"/"}>Shop</Link>
            <Link to={"/"}>Projects</Link>
            <Link to={"/news"}>News</Link>
            <Link to={"/admin"}>Admin</Link>
          </div>
       <div className="header--block">
          <div className="header--block__card">
              <a><MdShoppingCart /></a>
              <p>Cart (0)</p>
            </div>
            <div className="header--block__menu">
            <button onClick={() => {togglMenu()}}><LuSquareMenu /></button>
                 {menuOpen && (
        <div className="header--block__menu--menuBlock">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/shop"}>Shop</Link>
          <Link to={"/projects"}>Projects</Link>
          <Link to={"/news"}>News</Link>
          <Link to={"/admin"}>Admin</Link>
        </div>
      )}
          </div>
      
       </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
