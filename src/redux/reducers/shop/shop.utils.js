export const addMealToCartUtil = (state, mealToAdd) => {
  const cartCopy = [...state.cart];
  const indexOfMeal = cartCopy.findIndex((meal) => meal.id === mealToAdd.id);

  if (indexOfMeal === -1)
    return { ...state, cart: [...state.cart, { ...mealToAdd, quantity: 1 }] };

  cartCopy[indexOfMeal] = {
    ...cartCopy[indexOfMeal],
    quantity: cartCopy[indexOfMeal].quantity + 1,
  };
  // cartCopy[indexOfMeal].quantity++; // <- This was BUG
  return { ...state, cart: [...cartCopy] };
};

export const removeWholeMealFromCartUtil = (state, mealId) => {
  return { ...state, cart: state.cart.filter((meal) => meal.id !== mealId) };
};

export const removeOneMealFromCart = (state, mealId) => {
  const indexOfMeal = state.cart.findIndex((meal) => meal.id === mealId);
  if (state.cart[indexOfMeal]?.quantity === 1)
    return removeWholeMealFromCartUtil(state, mealId);
  else if (!state.cart[indexOfMeal]) return state; // if there is no meal

  const mealToRemove = state.cart[indexOfMeal];
  const cartCopy = [...state.cart];
  cartCopy[indexOfMeal] = {
    ...mealToRemove,
    quantity: mealToRemove.quantity - 1,
  };

  return { ...state, cart: cartCopy };
};

// export const saveToLocalStorage = (data, name) => {
//   const cart = useSelector((state) => state.shop.cart);
//   useEffect(() => {
//     return () => {
//       localStorage.setItem("cart", JSON.stringify(cart));
//     };
//   }, []);
// }