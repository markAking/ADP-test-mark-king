import { Action, createReducer, on } from '@ngrx/store';
import { loadFilms, loadFilmsSuccess, loadFilmsError } from './swapi.actions';
import { SWHero, SWHeroResp } from '../models/swhero.model';

export interface State {
  swFilms?: SWHeroResp;
  isLoading?: boolean;
  error?: any;
}

export const initialState: State = {
  swFilms: null,
  isLoading: true,
  error: null,
};

const SWReducer = createReducer(
  initialState,
  on(loadFilms, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(loadFilmsSuccess, (state, { payload }) => ({
    ...state,
    swFilms: payload.items,
    isLoading: false,
    error: null,
  })),
  on(loadFilmsError, (state, { payload }) => ({
    ...state,
    isLoading: false,
    error: payload.error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return SWReducer(state, action);
}
