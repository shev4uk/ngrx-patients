import { createSelector } from "@ngrx/store";
import { selectOrdersState } from "app/core/core.state";
import { OrdersState } from "./orders.model";

export const selectOrders = createSelector(
  selectOrdersState,
  (state: OrdersState) => state.orders
);
