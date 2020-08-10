import { IRootState } from "./types";

const initialState: IRootState = {
  loginModalVisible: false,
  cartModalVisible: false,
  selectedProductId: null,
  selectedProductQuantity: 1,
  filters: {
    necklace: false,
    choker: false,
    ring: false,
    earrings: false,
  },
};

export const reducer = (state: IRootState = initialState, action: any) => {
  switch (action.type) {
    case "TOGGLE_LOGIN_MODAL_VISIBILITY":
      return { ...state, loginModalVisible: !state.loginModalVisible };
    case "TOGGLE_CART_MODAL_VISIBILITY":
      return { ...state, cartModalVisible: !state.cartModalVisible };
    case "SET_SELECTED_PRODUCT_ID":
      return { ...state, selectedProductId: action.payload.id };
    case "INCREMENT_SELECTED_PRODUCT_QUANTITY":
      return { ...state, selectedProductQuantity: state.selectedProductQuantity + 1 };
    case "DECREMENT_SELECTED_PRODUCT_QUANTITY":
      const selectedProductQuantity =
        state.selectedProductQuantity === 1 ? state.selectedProductQuantity : state.selectedProductQuantity - 1;
      return { ...state, selectedProductQuantity: selectedProductQuantity };
    case "TOGGLE_FILTER_VISIBILITY":
      const name = action.payload.name;
      const newFilters = { ...state.filters };
      newFilters[name] = !newFilters[name];
      return { ...state, filters: newFilters };
    default:
      return state;
  }
};
