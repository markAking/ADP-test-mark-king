import { createAction, props } from '@ngrx/store';
import { SWHero, SWHeroResp } from '../models/swhero.model';

export const loadFilms = createAction('[SWAPI] Load SWfilms');

export const loadFilmsSuccess = createAction(
  '[SWAPI] Load SWfilms Sucess',
  props<{ payload: { items: SWHeroResp } }>()
);

export const loadFilmsError = createAction(
  '[SWAPI] Load SWfilms Error',
  props<{ payload: { error: any } }>()
);
