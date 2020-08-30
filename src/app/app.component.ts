import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { SWapiState } from './services/state';
import { loadFilms } from './services/swapi.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private store$: Store<SWapiState>) {
    this.store$.dispatch(loadFilms());
  }
}
