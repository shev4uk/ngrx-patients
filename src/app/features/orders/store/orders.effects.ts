import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { EMPTY, Observable, of } from "rxjs";
import { mergeMap, map, catchError, exhaustMap } from "rxjs/operators";

import { OrdersService } from "../orders.service";
import { actionOrdersFetch, actionOrdersFetchSuccess } from "./orders.actions";

@Injectable()
export class OrdersEffects {
  orders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionOrdersFetch),
      exhaustMap(() =>
        this.ordersService.getAllOrders().pipe(
          map((orders: any) => actionOrdersFetchSuccess(orders)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private ordersService: OrdersService,
    private actions$: Actions
  ) {}
}
