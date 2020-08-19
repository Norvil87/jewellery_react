import { IActionType } from "./types";
import { IProducts } from "../components/types";

export const toggleLoginModalVisibility = (): IActionType => {
  return {
    type: "TOGGLE_LOGIN_MODAL_VISIBILITY",
  };
};

export const toggleAddItemModalVisibility = (): IActionType => {
  return {
    type: "TOGGLE_ADD_ITEM_MODAL_VISIBILITY",
  };
};

export const setSelectedProductId = (id: string): IActionType => {
  return {
    type: "SET_SELECTED_PRODUCT_ID",
    payload: {
      id,
    },
  };
};

export const incrementSelectedProductQuantity = (): IActionType => {
  return {
    type: "INCREMENT_SELECTED_PRODUCT_QUANTITY",
  };
};

export const decrementSelectedProductQuantity = (): IActionType => {
  return {
    type: "DECREMENT_SELECTED_PRODUCT_QUANTITY",
  };
};

export const toggleFilterCheckboxVisibility = (name: string): IActionType => {
  return {
    type: "TOGGLE_FILTER_CHECKBOX_VISIBILITY",
    payload: {
      name,
    },
  };
};

export const setFilterCheckboxVisibility = (name: string, visible: boolean): IActionType => {
  return {
    type: "SET_FILTER_CHECKBOX_VISIBILITY",
    payload: {
      name,
      visible,
    },
  };
};

export const setFilterVisibility = (visible: boolean): IActionType => {
  return {
    type: "SET_FILTER_VISIBILITY",
    payload: {
      visible,
    },
  };
};

export const setVisibleProducts = (products: IProducts): IActionType => {
  return {
    type: "SET_VISIBLE_PRODUCTS",
    payload: {
      products,
    },
  };
};

export const setPrice = (price: number[]): IActionType => {
  return {
    type: "SET_PRICE",
    payload: {
      price,
    },
  };
};

export const updateCartItems = (): IActionType => {
  return {
    type: "UPDATE_CART_ITEMS",
  };
};
