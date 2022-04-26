import { Action, createReducer, on } from "@ngrx/store";
import {
  actionPatientsFetchSuccess,
  actionPatientsToggleFavorites,
} from "./patients.actions";
import { PatientsState } from "./patients.model";

export const initialState: PatientsState = {
    patients: [],
};

const reducer = createReducer(
  initialState,
  on(actionPatientsFetchSuccess, (state, action) => ({
    ...state,
    patients: action["patient"].map((item) => ({...item, favorite: false})),
  })),
  on(actionPatientsToggleFavorites, (state, action) => {
    const updatePatients = state.patients.map((item) => {
      return item.defaultId === action.defaultId
        ? { ...item, favorite: action.favorite }
        : item;
    });
    console.log(action, action.favorite);
    return { ...state, patients: updatePatients };
  })
);

export function patientsReducer(state: PatientsState | undefined, action: Action) {
  return reducer(state, action);
}
