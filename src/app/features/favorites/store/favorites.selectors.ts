import { createSelector } from "@ngrx/store";
import { selectOrders } from "../../orders/store/orders.selectors";
import { selectPatients } from "app/features/patients/store/patients.selectors";

export const selectFavorites = createSelector(
  selectOrders,
  selectPatients,
  (favoritesOrders: any, favoritesPatients: any) => {
      return [...favoritesOrders, ...favoritesPatients].filter((item) => item.favorite)
  }
);
