export const toggleLoginModalVisibility = () => {
  return {
    type: "TOGGLE_LOGIN_MODAL_VISIBILITY",
  };
};

export const toggleCartModalVisibility = () => {
  return {
    type: "TOGGLE_CART_MODAL_VISIBILITY",
  };
};

export const setSelectedProductId = (id: number) => {
  return {
    type: "SET_SELECTED_PRODUCT_ID",
    payload: {
      id: id,
    },
  };
};

export const incrementSelectedProducctQuantity = () => {
  return {
    type: "INCREMENT_SELECTED_PRODUCT_QUANTITY",
  };
};

export const decrementSelectedProducctQuantity = () => {
  return {
    type: "DECREMENT_SELECTED_PRODUCT_QUANTITY",
  };
};
