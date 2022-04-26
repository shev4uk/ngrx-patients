import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Store } from "@ngrx/store";

import { ROUTE_ANIMATIONS_ELEMENTS } from "../../../core/core.module";
import { actionOrdersToggleFavorites, actionOrdersFetch } from "../store/orders.actions";
import { selectOrders } from "../store/orders.selectors";

@Component({
  selector: "st-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  orders$ = this.store.select(selectOrders);

  constructor(
    private store: Store
  ) {}

  ngOnInit() {}

  onFetchOrders() {
    this.store.dispatch(actionOrdersFetch());
  }

  onAddToFavotites(order) {
    this.store.dispatch(actionOrdersToggleFavorites({orderNum: order.orderNum, favorite: !order.favorite}));
  }
}
