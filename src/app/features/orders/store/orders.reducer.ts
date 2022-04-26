import { Action, createReducer, on } from "@ngrx/store";
import {
  actionOrdersFetchSuccess,
  actionOrdersToggleFavorites,
} from "./orders.actions";
import { OrdersState } from "./orders.model";

export const initialState: OrdersState = {
  orders: [],
};

const reducer = createReducer(
  initialState,
  on(actionOrdersFetchSuccess, (state, action) => ({
    ...state,
    orders: action["order"].map((item) => ({...item, favorite: false})),
  })),
  on(actionOrdersToggleFavorites, (state, action) => {
    const updateOrders = state.orders.map((item) => {
      return item.orderNum === action.orderNum
        ? { ...item, favorite: action.favorite }
        : item;
    });
    return { ...state, orders: updateOrders };
  })
);

export function ordersReducer(state: OrdersState | undefined, action: Action) {
  return reducer(state, action);
}
