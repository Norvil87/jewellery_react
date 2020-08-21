import { ISetLoginModalVisibility, IActionType } from "./types";
import { IProducts } from "../components/types";

export const setLoginModalVisibility = (visible: boolean): IActionType => {
  return {
    type: "SET_LOGIN_MODAL_VISIBILITY",
    payload: {
      visible,
    },
  };
};

export const setMobileMenuVisibility = (visible: boolean): IActionType => {
  return {
    type: "SET_MOBILE_MENU_VISIBILITY",
    payload: {
      visible,
    },
  };
};

export const setAddItemModalVisibility = (visible: boolean): IActionType => {
  return {
    type: "SET_ADD_ITEM_MODAL_VISIBILITY",
    payload: {
      visible,
    },
  };
};

export const setCurrentPage = (forward?: boolean, number?: number): IActionType => {
  return {
    type: "SET_CURRENT_PAGE",
    payload: {
      forward,
      number,
    },
  };
};

export const setSelectedProduct = (id: string): IActionType => {
  return {
    type: "SET_SELECTED_PRODUCT",
    payload: {
      id,
    },
  };
};

export const incrementSelectedProductQuantity = (): IActionType => {
  return {
    type: "INCREMENT_SELECTED_PRODUCT_QUANTITY",
    payload: {},
  };
};

export const decrementSelectedProductQuantity = (): IActionType => {
  return {
    type: "DECREMENT_SELECTED_PRODUCT_QUANTITY",
    payload: {},
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

export const setFilteredProducts = (products: IProducts): IActionType => {
  return {
    type: "SET_FILTERED_PRODUCTS",
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
    payload: {},
  };
};
