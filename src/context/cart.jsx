import { createContext, useReducer } from "react";
import {
  CART_ACTIONS_TYPES,
  cartReducer,
  cartInitialState,
} from "../reducers/cart";
// * 1. Create the context to consume later on
export const CartContext = createContext();

// * 2. Create the provider
export const CartProvider = ({ children }) => {
  //   const [cart, setCart] = useState([]);

  //   const addToCart = (product) => {
  //     const productInCartIndex = cart.findIndex((item) => item.id === product.id);
  //     if (productInCartIndex >= 0) {
  //       const newCart = structuredClone(cart);
  //       newCart[productInCartIndex].quantity += 1;
  //       return setCart(newCart);
  //     }
  //     setCart((prevState) => [
  //       ...prevState,
  //       {
  //         ...product,
  //         quantity: 1,
  //       },
  //     ]);
  //   };

  //   const removeProductFromCart = (product) => {
  //     const productInCartIndex = cart.findIndex((item) => item.id === product.id);
  //     const newCart = structuredClone(cart);
  //     newCart[productInCartIndex].quantity -= 1;
  //     if (newCart[productInCartIndex].quantity === 0)
  //       return removeFromCart(product);
  //     return setCart(newCart);
  //   };

  //   const removeFromCart = (product) => {
  //     setCart((prevState) => prevState.filter((item) => item.id !== product.id));
  //   };

  //   const clearCart = () => {
  //     setCart([]);
  //   };

  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const addToCart = (product) =>
    dispatch({ type: CART_ACTIONS_TYPES.ADD_TO_CART, payload: product });
  const removeProductFromCart = (product) =>
    dispatch({
      type: CART_ACTIONS_TYPES.REMOVE_PRODUCT_FROM_CART,
      payload: product,
    });
  const removeFromCart = (product) =>
    dispatch({ type: CART_ACTIONS_TYPES.REMOVE_FROM_CART, payload: product });
  const clearCart = () => dispatch({ type: CART_ACTIONS_TYPES.CLEAR_CART });

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        removeProductFromCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
