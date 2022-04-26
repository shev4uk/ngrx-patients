import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { EMPTY, Observable, of } from "rxjs";
import { mergeMap, map, catchError, exhaustMap } from "rxjs/operators";

import { PatientsService } from "../patients.service";
import { actionPatientsFetch, actionPatientsFetchSuccess } from "./patients.actions";

@Injectable()
export class PatientsEffects {
  patients$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionPatientsFetch),
      exhaustMap(() =>
        this.patientsService.getAllPatients().pipe(
          map((patients: any) => actionPatientsFetchSuccess(patients)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private patientsService: PatientsService,
    private actions$: Actions
  ) {}
}
