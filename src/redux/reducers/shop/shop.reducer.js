import { listOfMeals } from "./meals.data";
import ShopActionTypes from "./shop.types";
import {
  addMealToCartUtil,
  removeWholeMealFromCartUtil,
  removeOneMealFromCart,
} from "./shop.utils";

const INITIAL_STATE = {
  mealsList: listOfMeals,
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  // cart: [],
};

const shopReducer = (state = INITIAL_STATE, { type, payload }) => {
  console.log("hgsuk");
  switch (type) {
    case ShopActionTypes.ADD_MEAL_TO_CART: {
      const newState = addMealToCartUtil(state, payload);
      localStorage.setItem("cart", JSON.stringify(newState.cart));
      return newState;
    }
    case ShopActionTypes.REMOVE_ONE_MEAL_FROM_CART: {
      const newState = removeOneMealFromCart(state, payload);
      localStorage.setItem("cart", JSON.stringify(newState.cart));
      return newState; // payload is meal "id" here
    }
    case ShopActionTypes.REMOVE_WHOLE_MEAL_FROM_CART: {
      const newState = removeWholeMealFromCartUtil(state, payload);
      localStorage.setItem("cart", JSON.stringify(newState.cart));
      return newState; // payload is meal "id" here
    }
    default:
      return state;
  }
};

export default shopReducer;
