import { IRootState, IActionType } from "./types";
import { products } from "../components/data";
import { ICartProducts } from "../components/types";
import { ReducerAction } from "react";
import { ActionFromReducer } from "redux";

const initialState: IRootState = {
  visibleProducts: {},
  filteredProducts: products,
  loginModalVisible: false,
  addItemModalVisible: false,
  mobileMenuVisible: false,
  productsPerPage: 9,
  currentPage: 1,
  cartItemsTotal: 0,
  cartItems: {},
  selectedProductId: "1", // потом поставить null
  selectedProductQuantity: 1,
  filterVisible: true,
  productFilters: {
    necklace: true,
    choker: true,
    ring: true,
    earrings: true,
  },
  priceFilter: {
    minDefault: 55,
    maxDefault: 215,
    minCurrent: 55,
    maxCurrent: 215,
  },
};

export const reducer = (state: IRootState = initialState, action: any) => {
  switch (action.type) {
    case "SET_LOGIN_MODAL_VISIBILITY":
      return { ...state, loginModalVisible: action.payload.visible };
    case "SET_MOBILE_MENU_VISIBILITY":
      return { ...state, mobileMenuVisible: action.payload.visible };
    case "SET_ADD_ITEM_MODAL_VISIBILITY":
      return { ...state, addItemModalVisible: action.payload.visible };
    case "SET_SELECTED_PRODUCT": {
      let selectedProductQuantity = 1;
      for (const id in Object.keys(state.cartItems)) {
        if (id === action.payload.id) {
          selectedProductQuantity = state.cartItems[id];
        }
      }
      return { ...state, selectedProductId: action.payload.id, selectedProductQuantity: selectedProductQuantity };
    }
    case "INCREMENT_SELECTED_PRODUCT_QUANTITY":
      return {
        ...state,
        selectedProductQuantity: state.selectedProductQuantity + 1,
      };
    case "DECREMENT_SELECTED_PRODUCT_QUANTITY":
      let selectedProductQuantity =
        state.selectedProductQuantity === 1 ? state.selectedProductQuantity : state.selectedProductQuantity - 1;
      return { ...state, selectedProductQuantity: selectedProductQuantity };
    case "TOGGLE_FILTER_CHECKBOX_VISIBILITY": {
      const name = action.payload.name;
      const newFilters = { ...state.productFilters };
      newFilters[name] = !newFilters[name];
      return { ...state, productFilters: newFilters };
    }
    case "SET_FILTER_CHECKBOX_VISIBILITY":
      const { name, visible } = action.payload;
      const newFilters = { ...state.productFilters };
      newFilters[name] = visible;
      return { ...state, productFilters: newFilters };
    case "SET_FILTER_VISIBILITY":
      return { ...state, filterVisible: action.payload.visible };
    case "SET_FILTERED_PRODUCTS":
      return { ...state, filteredProducts: action.payload.products };
    case "SET_PRICE":
      const [min, max] = action.payload.price;
      const newPriceValues = { ...state.priceFilter, minCurrent: min, maxCurrent: max };
      return { ...state, priceFilter: newPriceValues };
    case "UPDATE_CART_ITEMS": {
      let newCartItems: ICartProducts = { ...state.cartItems };
      newCartItems[state.selectedProductId] = state.selectedProductQuantity;
      let sum = 0;
      for (const value of Object.values(newCartItems)) {
        sum += value;
      }

      return { ...state, cartItems: newCartItems, cartItemsTotal: sum };
    }
    case "SET_CURRENT_PAGE":
      const { forward, number } = action.payload;
      let nextPage = state.currentPage;
      const checkNextPage = () => {
        return Math.ceil(Object.keys(state.filteredProducts).length / state.productsPerPage) > state.currentPage;
      };
      if (number) {
        nextPage = number;
      } else {
        if (forward && checkNextPage()) {
          nextPage++;
        } else if (!forward && state.currentPage > 1) {
          nextPage--;
        }
      }

      return { ...state, currentPage: nextPage };
    default:
      return state;
  }
};
