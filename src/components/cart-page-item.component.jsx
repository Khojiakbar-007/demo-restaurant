import React from "react";
import {
  addMealToCart,
  removeOneMealFromCart,
  removeWholeMealFromCart,
} from "../redux/reducers/shop/shop.actions";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const CartPageItem = ({ mealInfo }) => {
  const { name, quantity, price, url, id } = mealInfo;
  const dispatch = useDispatch();

  const navigate = useNavigate();
  return (
    <div className="cart-item">
      <Link to={`/meals/${id}`} className="img-container">
        <img src={url} alt="" />
      </Link>

      <h3 onClick={() => navigate(`/meals/${id}`)}>{name}</h3>

      <div className="buttons-in-card">
        <div
          className="button"
          onClick={() => dispatch(removeOneMealFromCart(id))}
        >
          -
        </div>
        <span className="quantity">{quantity}</span>
        <div
          className="button"
          onClick={() => dispatch(addMealToCart(mealInfo))}
        >
          +
        </div>
      </div>

      <div className="price">{quantity * price} UZS</div>

      <div
        onClick={() => dispatch(removeWholeMealFromCart(id))}
        className="button delete"
      >
        +
      </div>
    </div>
  );
};

export default CartPageItem;
