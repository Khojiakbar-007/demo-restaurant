import { createSelector } from "reselect";

const selectCart = (state) => state.shop.cart;

export const selectCartMealsNum = createSelector([selectCart], (cartItems) =>
  cartItems.reduce((acc, meal) => acc + meal.quantity, 0)
);
