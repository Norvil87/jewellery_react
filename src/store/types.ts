import { IProducts, ICartProducts } from "../components/types";

export interface IRootState {
  visibleProducts: IProducts;
  loginModalVisible: boolean;
  mobileMenuVisible: boolean;
  addItemModalVisible: boolean;
  cartItems: ICartProducts;
  cartItemsTotal: number;
  selectedProductId: string;
  selectedProductQuantity: number;
  filterVisible: boolean;
  productFilters: { [name: string]: boolean };
  priceFilter: { [name: string]: number };
}

export interface ISetLoginModalVisibility {
  type: string;
  payload: { visible: boolean };
}

interface ISetCartModalVisibility {
  type: string;
  payload: { visible: boolean };
}

interface IIncrementSelectedProductQuantity {
  type: string;
  payload: {};
}

interface IDecrementSelectedProductQuantity {
  type: string;
  payload: {};
}

interface ISetSelectedProduct {
  type: string;
  payload: { id: string };
}

interface IToggleCheckboxFilterVisibility {
  type: string;
  payload: { name: string };
}

interface ISetCheckboxFilterVisibility {
  type: string;
  payload: { name: string; visible: boolean };
}

interface ISetPrice {
  type: string;
  payload: number[];
}

interface ISetVisibleProducts {
  type: string;
  payload: { products: IProducts };
}

export type IActionType =
  | ISetLoginModalVisibility
  | ISetCartModalVisibility
  | IIncrementSelectedProductQuantity
  | IDecrementSelectedProductQuantity
  | ISetSelectedProduct
  | IToggleCheckboxFilterVisibility
  | ISetPrice
  | ISetVisibleProducts
  | ISetCheckboxFilterVisibility
