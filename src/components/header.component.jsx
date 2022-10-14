import React from "react";
import { useSelector } from "react-redux";
import { selectCartMealsNum } from "../redux/reducers/shop/shop.selectors";
import { Link } from "react-router-dom";

const Header = () => {
  const cartMealsNum = useSelector((state) => selectCartMealsNum(state));
  return (
    <header className="container-fluid">
      <div className="container">
        <Link to='/' className="logo">LOGOS</Link>

        <div className="cart">
          <Link to={'/cart'} className="button">
            <span>Корзина</span>
            <span className="vertical-line">|</span>
            <span className="icon">{cartMealsNum}</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
