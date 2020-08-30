import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { SwapiService } from './swapi.service';

import { loadFilms, loadFilmsSuccess, loadFilmsError } from './swapi.actions';

@Injectable()
export class SWapiEffects {
  loadloadFilms$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadFilms),
      exhaustMap((action) =>
        this.swapiService.getSWFilms().pipe(
          map((SWHeroResp) =>
            loadFilmsSuccess({ payload: { items: SWHeroResp } })
          ),
          catchError((errors) =>
            of(loadFilmsError({ payload: { error: errors } }))
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private swapiService: SwapiService) {}
}
