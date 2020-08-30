import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { MockDataService } from '../services/mock.data';
import { SwapiService } from '../services/swapi.service';

import * as SWheroSelectors from '../services/swapi.selectors';
import { SWapiState } from '../services/state';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  heroes = [];
  films = [];
  selectedHero: string;

  constructor(
    private store$: Store<SWapiState>,
    private dataService: MockDataService,
    private swapiService: SwapiService
  ) {}

  ngOnInit() {
    this.dataService.get().subscribe((res) => {
      this.heroes = res;
    });
  }

  onHeroChange(selectedHero) {
    this.swapiService.getSWHero(selectedHero.value).subscribe((swfilms) => {
      this.films = [];
      console.log(swfilms);
      if (swfilms && swfilms.films) {
        this.showMovies(swfilms.films);
      }
    });
  }

  showMovies(films: Array<any>) {
    this.store$
      .select(SWheroSelectors.selectFilms(films))
      .subscribe((swfilms) => {
        this.films = swfilms;
        console.log(swfilms);
      });
  }
}
