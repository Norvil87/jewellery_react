import { IRootState, IActionType } from "./types";
import { products } from "../components/data";
import { ICartProducts } from "../components/types";
import { ReducerAction } from "react";
import { setSelectedProductId } from "./actions";

const initialState: IRootState = {
  visibleProducts: products,
  loginModalVisible: false,
  addItemModalVisible: false,
  cartItemsTotal: 0,
  cartItems: {},
  selectedProductId: '1', // потом поставить null
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
    case "TOGGLE_LOGIN_MODAL_VISIBILITY":
      return { ...state, loginModalVisible: !state.loginModalVisible };
    case "TOGGLE_ADD_ITEM_MODAL_VISIBILITY":
      return { ...state, addItemModalVisible: !state.addItemModalVisible, selectedProductQuantity: 1 };
    case "SET_SELECTED_PRODUCT_ID":
      return { ...state, selectedProductId: action.payload.id };
    case "INCREMENT_SELECTED_PRODUCT_QUANTITY":
      return {
        ...state,
        selectedProductQuantity: state.selectedProductQuantity + 1,
      };
    case "DECREMENT_SELECTED_PRODUCT_QUANTITY":
      const selectedProductQuantity =
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
    case "SET_VISIBLE_PRODUCTS":
      return { ...state, visibleProducts: action.payload.products };
    case "SET_PRICE":
      const [min, max] = action.payload.price;
      const newPriceValues = { ...state.priceFilter, minCurrent: min, maxCurrent: max };
      return { ...state, priceFilter: newPriceValues };
    case "UPDATE_CART_ITEMS": {
      let newCartItems: ICartProducts = {...state.cartItems};
      const newItem = { id: state.selectedProductId, quantity: state.selectedProductQuantity };
      if (!Object.keys(newCartItems).length) {
        //newCartItems.push(newItem);
      } else {
        const itemInCart = newCartItems[state.selectedProductId];
        if (itemInCart === undefined) {
          //newCartItems.push(newItem);
        } else {
          //itemInCart.quantity = state.selectedProductQuantity;
        }
      }

      return { ...state, cartItems: newCartItems };
    }
    default:
      return state;
  }
};
