import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  addMealToCart,
  removeOneMealFromCart,
} from "../../redux/reducers/shop/shop.actions";
import { ImageContainer } from "./meal-description.styles";

const MealDescriptionPage = () => {
  const dispatch = useDispatch();
  const mealId = useParams().mealId;

  const mealInCart = useSelector((state) =>
    state.shop.cart.find((meal) => {
      return `${meal.id}` === mealId;
    })
  );

  // get meal info 
  const meal = useSelector((state) => state.shop.mealsList[mealId]);
  const { name, description, price, weight, url } = meal;

  const quantity = mealInCart?.quantity || 0;
  const totalSum = quantity * price;

  return (
    <section className="menu-meal">
      <div className="container">
        <ImageContainer imageUrl={url} />

        <div className="info">
          <div className="description">
            <h3>{name}</h3>
            <p>{description}</p>
          </div>

          <div className="properties">
            <span className="weight"> Вес: {weight} г </span>
            <div className="price"> Цена: {price} UZS </div>

            <div className="buttons">
              <div
                onClick={() => dispatch(removeOneMealFromCart(meal.id))}
                className="button"
              >
                -
              </div>
              <span className="quantity">{quantity}</span>
              <div
                onClick={() => dispatch(addMealToCart(meal))}
                className="button"
              >
                +
              </div>
            </div>

            <div className="total-amount"> Общая сумма: {totalSum} UZS</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MealDescriptionPage;
