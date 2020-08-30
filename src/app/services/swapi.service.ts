import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { SWHero, SWHeroResp } from '../models/swhero.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  private swapiUrl = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) {}

  private handleError<T>(operation: string = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      alert(error.message);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getSWFilms(): Observable<any> {
    return this.http
      .get(`${this.swapiUrl}films`)
      .pipe(catchError(this.handleError('getHeroes', [])));
  }

  getSWHero(url: string): Observable<any> {
    return this.http
      .get(url)
      .pipe(catchError(this.handleError('getHeroes', [])));
  }
}
