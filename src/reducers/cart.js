export const CART_ACTIONS_TYPES = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  REMOVE_PRODUCT_FROM_CART: "REMOVE_PRODUCT_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
};

export const cartInitialState = JSON.parse(localStorage.getItem("cart")) || [];

export const updateLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const UPDATE_STATE_BY_ACTION = {
  [CART_ACTIONS_TYPES.ADD_TO_CART]: (state, actionPayload) => {
    const { id } = actionPayload;
    const productInCartIndex = state.findIndex((item) => item.id === id);
    if (productInCartIndex >= 0) {
      const newState = structuredClone(state);
      newState[productInCartIndex].quantity += 1;
      updateLocalStorage(newState);
      return newState;
    }
    const newState = [
      ...state,
      {
        ...actionPayload, //* Product
        quantity: 1,
      },
    ];
    updateLocalStorage(newState);
    return newState;
  },
  [CART_ACTIONS_TYPES.REMOVE_PRODUCT_FROM_CART]: (state, actionPayload) => {
    const { id } = actionPayload;
    const productInCartIndex = state.findIndex((item) => item.id === id);
    const newCart = structuredClone(state);
    newCart[productInCartIndex].quantity -= 1;
    if (newCart[productInCartIndex].quantity === 0) {
      const newState = state.filter((item) => item.id !== id);
      updateLocalStorage(newState);
      return newState;
    }
    updateLocalStorage(newCart);
    return newCart;
  },
  [CART_ACTIONS_TYPES.REMOVE_FROM_CART]: (state, actionPayload) => {
    const { id } = actionPayload;
    const newState = state.filter((item) => item.id !== id);
    updateLocalStorage(newState);
    return newState;
  },
  [CART_ACTIONS_TYPES.CLEAR_CART]: () => {
    updateLocalStorage([]);
    return [];
  },
};

// export const cartReducer = (state, action) => {
//   const { type: actionType, payload: actionPayload } = action;
//   switch (actionType) {
//     case CART_ACTIONS_TYPES.ADD_TO_CART: {
//       const { id } = actionPayload;
//       const productInCartIndex = state.findIndex((item) => item.id === id);
//       if (productInCartIndex >= 0) {
//         const newState = structuredClone(state);
//         newState[productInCartIndex].quantity += 1;
//         updateLocalStorage(newState);
//         return newState;
//       }
//       const newState = [
//         ...state,
//         {
//           ...actionPayload, //* Product
//           quantity: 1,
//         },
//       ];
//       updateLocalStorage(newState);
//       return newState;
//     }
//     case CART_ACTIONS_TYPES.REMOVE_PRODUCT_FROM_CART: {
//       const { id } = actionPayload;
//       const productInCartIndex = state.findIndex((item) => item.id === id);
//       const newCart = structuredClone(state);
//       newCart[productInCartIndex].quantity -= 1;
//       if (newCart[productInCartIndex].quantity === 0) {
//         const newState = state.filter((item) => item.id !== id);
//         updateLocalStorage(newState);
//         return newState;
//       }
//       updateLocalStorage(newCart);
//       return newCart;
//     }
//     case CART_ACTIONS_TYPES.REMOVE_FROM_CART: {
//       const { id } = actionPayload;
//       const newState = state.filter((item) => item.id !== id);
//       updateLocalStorage(newState);
//       return newState;
//     }
//     case CART_ACTIONS_TYPES.CLEAR_CART: {
//       updateLocalStorage(cartInitialState);
//       return cartInitialState;
//     }
//     default:
//       return state;
//   }
// };

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;
  const updateState = UPDATE_STATE_BY_ACTION[actionType];
  return updateState ? updateState(state, actionPayload) : state;
};
