import {
  createSelector,
  createFeatureSelector,
  MemoizedSelector,
} from '@ngrx/store';
import * as SWapiState from './swapi.reducer';

export const selectAll = (state: SWapiState.State) => state.swFilms;
export const getError = (state: SWapiState.State): any => state.error;
export const getIsLoading = (state: SWapiState.State): boolean =>
  state.isLoading;

export const selectFilmState: MemoizedSelector<
  object,
  SWapiState.State
> = createFeatureSelector<SWapiState.State>('swHeros');

export const selectAllFilms = createSelector(selectFilmState, (state) => {
  return state;
});

export const selectFilms = (films: Array<any>) =>
  createSelector(selectFilmState, (state) => {
    if (state) {
      return state.swFilms.results.filter((f) => films.includes(f.url));
    } else {
      return null;
    }
  });
