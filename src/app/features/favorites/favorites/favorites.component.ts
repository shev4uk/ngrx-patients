import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { actionOrdersToggleFavorites } from 'app/features/orders/store/orders.actions';
import { actionPatientsToggleFavorites } from 'app/features/patients/store/patients.actions';
import { selectFavorites } from '../store/favorites.selectors';

@Component({
  selector: 'st-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritesComponent implements OnInit {

  favorites$ = this.store.select(selectFavorites);

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
  }

  onTogglePatientsFavotites(patient) {
    this.store.dispatch(actionPatientsToggleFavorites({ defaultId: patient.defaultId, favorite: false }));
  }

  onToggleOrdersFavotites(order) {
    this.store.dispatch(actionOrdersToggleFavorites({orderNum: order.orderNum, favorite: false}));
  }

}
