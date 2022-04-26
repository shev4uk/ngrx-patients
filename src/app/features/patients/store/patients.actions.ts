import { createAction, props } from "@ngrx/store";

export const actionPatientsFetch = createAction("[Patients] Fetch Patients");

export const actionPatientsFetchSuccess = createAction(
  "[Patients] Fetch Patients Success",
  props<{ patients }>()
);

export const actionPatientsToggleFavorites = createAction(
  "[Patients] Toggle Favorites",
  props<{ defaultId: string, favorite: boolean }>()
);
