import { createSelector } from "@ngrx/store";
import { selectPatientsState } from "app/core/core.state";
import { PatientsState } from "./patients.model";

export const selectPatients = createSelector(
  selectPatientsState,
  (state: PatientsState) => state.patients
);
