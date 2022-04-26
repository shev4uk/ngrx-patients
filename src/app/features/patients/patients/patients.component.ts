import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Store } from "@ngrx/store";

import { ROUTE_ANIMATIONS_ELEMENTS } from "../../../core/core.module";
import { actionPatientsFetch, actionPatientsToggleFavorites } from "../store/patients.actions";
import { selectPatients } from "../store/patients.selectors";

@Component({
  selector: "st-patients",
  templateUrl: "./patients.component.html",
  styleUrls: ["./patients.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientsComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  patients$ = this.store.select(selectPatients);

  constructor(private store: Store) {}

  ngOnInit() {}

  onFetchPatients() {
    this.store.dispatch(actionPatientsFetch());
  }

  onToggleFavotites(patient) {
    this.store.dispatch(actionPatientsToggleFavorites({ defaultId: patient.defaultId, favorite: !patient.favorite }));
  }
}
