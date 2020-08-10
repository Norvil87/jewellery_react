export interface IRootState {
  loginModalVisible: boolean;
  cartModalVisible: boolean;
  selectedProductId: number;
  selectedProductQuantity: number;
  filters: {[name: string]: boolean}
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

interface IToggleFilterVisibility {
  type: string;
  payload: any;
}

export type IActionType =
  | IToggleLoginModalVisibility
  | IToggleCartModalVisibility
  | IIncrementSelectedProducctQuantity
  | IDecrementSelectedProducctQuantity
  | ISetSelectedProductId
  | IToggleFilterVisibility;
