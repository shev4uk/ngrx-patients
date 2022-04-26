import { createAction, props } from "@ngrx/store";

export const actionOrdersFetch = createAction("[Orders] Fetch Orders");

export const actionOrdersFetchSuccess = createAction(
  "[Orders] Fetch Orders Success",
  props<{ orders }>()
);

export const actionOrdersToggleFavorites = createAction(
  "[Orders] Toggle Favorites",
  props<{ orderNum: number, favorite: boolean }>()
);
