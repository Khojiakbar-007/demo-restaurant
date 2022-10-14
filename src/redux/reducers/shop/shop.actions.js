export const addMealToCart = (mealInfo) => ({
  type: "ADD_MEAL_TO_CART",
  payload: mealInfo,
});

export const removeWholeMealFromCart = (mealId) => ({
  type: "REMOVE_WHOLE_MEAL_FROM_CART",
  payload: mealId,
});

export const removeOneMealFromCart = (mealId) => ({
  type: "REMOVE_ONE_MEAL_FROM_CART",
  payload: mealId,
});
