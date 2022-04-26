import { Action, createReducer, on } from "@ngrx/store";
import { actionFavoritesGetAll } from "./favorites.actions";
import { FavoritesState } from "./favorites.model";

export const initialState: FavoritesState = {
  favorites: [],
};

const reducer = createReducer(
  initialState,
  on(actionFavoritesGetAll, (state, action) => ({...state}))
);

export function favoritesReducer(state: FavoritesState | undefined, action: Action) {
  return reducer(state, action);
}
