import { IActionType } from "./types";
import { IProduct } from "../components/types";

export const toggleLoginModalVisibility = (): IActionType => {
  return {
    type: "TOGGLE_LOGIN_MODAL_VISIBILITY",
  };
};

export const toggleCartModalVisibility = (): IActionType => {
  return {
    type: "TOGGLE_CART_MODAL_VISIBILITY",
  };
};

export const setSelectedProductId = (id: number): IActionType => {
  return {
    type: "SET_SELECTED_PRODUCT_ID",
    payload: {
      id,
    },
  };
};

export const incrementSelectedProducctQuantity = (): IActionType => {
  return {
    type: "INCREMENT_SELECTED_PRODUCT_QUANTITY",
  };
};

export const decrementSelectedProducctQuantity = (): IActionType => {
  return {
    type: "DECREMENT_SELECTED_PRODUCT_QUANTITY",
  };
};

export const toggleFilterVisibility = (name: string): IActionType => {
  return {
    type: "TOGGLE_FILTER_VISIBILITY",
    payload: {
      name,
    },
  };
};

export const setVisibleProducts = (products: IProduct[]): IActionType => {
  return {
    type: "SET_VISIBLE_PRODUCTS",
    payload: {
      products,
    },
  };
};
