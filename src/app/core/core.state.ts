import {
  ActionReducerMap,
  MetaReducer,
  createFeatureSelector
} from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import { environment } from '../../environments/environment';

import { initStateFromLocalStorage } from './meta-reducers/init-state-from-local-storage.reducer';
import { debug } from './meta-reducers/debug.reducer';
import { AuthState } from './auth/auth.models';
import { authReducer } from './auth/auth.reducer';
import { RouterStateUrl } from './router/router.state';
import { settingsReducer } from './settings/settings.reducer';
import { SettingsState } from './settings/settings.model';
import { OrdersState } from 'app/features/orders/store/orders.model';
import { ordersReducer } from 'app/features/orders/store/orders.reducer';
import { FavoritesState } from 'app/features/favorites/store/favorites.model';
import { favoritesReducer } from 'app/features/favorites/store/favorites.reducer';
import { PatientsState } from 'app/features/patients/store/patients.model';
import { patientsReducer } from 'app/features/patients/store/patients.reducer';

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  settings: settingsReducer,
  router: routerReducer,
  orders: ordersReducer,
  favorites: favoritesReducer,
  patients: patientsReducer
};

export const metaReducers: MetaReducer<AppState>[] = [
  initStateFromLocalStorage
];

if (!environment.production) {
  if (!environment.test) {
    metaReducers.unshift(debug);
  }
}

export const selectAuthState = createFeatureSelector<AppState, AuthState>(
  'auth'
);

export const selectSettingsState = createFeatureSelector<
  AppState,
  SettingsState
>('settings');

export const selectRouterState = createFeatureSelector<
  AppState,
  RouterReducerState<RouterStateUrl>
>('router');

export const selectOrdersState = createFeatureSelector<
  AppState,
  OrdersState
>('orders');


export const selectFavoritesState = createFeatureSelector<
  AppState,
  FavoritesState
>('favorites');

export const selectPatientsState = createFeatureSelector<
  AppState,
  PatientsState
>('patients');



export interface AppState {
  auth: AuthState;
  settings: SettingsState;
  router: RouterReducerState<RouterStateUrl>;
  orders: OrdersState;
  favorites: FavoritesState;
  patients: PatientsState;
}
