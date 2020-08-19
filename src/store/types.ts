import { IProducts, ICartProducts } from "../components/types";

export interface IRootState {
  visibleProducts: IProducts;
  loginModalVisible: boolean;
  addItemModalVisible: boolean;
  cartItems: ICartProducts;
  cartItemsTotal: number;
  selectedProductId: string;
  selectedProductQuantity: number;
  filterVisible: boolean;
  productFilters: { [name: string]: boolean };
  priceFilter: { [name: string]: number };
}

interface IToggleLoginModalVisibility {
  type: string;
}

interface IToggleCartModalVisibility {
  type: string;
}

interface IIncrementSelectedProducctQuantity {
  type: string;
}

interface IDecrementSelectedProducctQuantity {
  type: string;
}

interface ISetSelectedProductId {
  type: string;
  payload: { [id: string]: number };
}

interface IToggleCheckboxFilterVisibility {
  type: string;
  payload: any;
}

interface ISetPrice {
  type: string;
  payload: number[];
}

export type IActionType =
  | IToggleLoginModalVisibility
  | IToggleCartModalVisibility
  | IIncrementSelectedProducctQuantity
  | IDecrementSelectedProducctQuantity
  | ISetSelectedProductId
  | IToggleCheckboxFilterVisibility
  | ISetPrice;
