import React from "react";
import { useSelector } from "react-redux";
import CartPageItem from "../components/cart-page-item.component";

const CartPage = () => {
  const cartMeals = useSelector((state) => state.shop.cart);
  return (
    <section className="cart-items container-fluid">
      <div className="container">
        {cartMeals.map((meal) => (
          <CartPageItem mealInfo={meal} key={meal.id} />
        ))}
      </div>
    </section>
  );
};

export default CartPage;
