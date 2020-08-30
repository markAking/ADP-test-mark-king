import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockDataService {
  characters: Array<object> = [
    {
      name: 'Luke Skywalker',
      url: 'https://swapi.dev/api/people/1/',
    },
    {
      name: 'Darth Vader',
      url: 'https://swapi.dev/api/people/4/',
    },
    {
      name: 'Obi-wan Kenobi',
      url: 'https://swapi.dev/api/people/unknown/',
    },
    {
      name: 'R2-D2',
      url: 'https://swapi.dev/api/people/3/',
    },
  ];
  get() {
    return of(this.characters);
  }
}
