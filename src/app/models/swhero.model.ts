export interface SWHero {
  name: string;
  height: number;
  mass: number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: any;
  species: any;
  vehicles: any;
  starships: any;
  created: string;
  edited: string;
  url: string;
}

export interface characters {
  name: string;
  url: string;
}

export interface SWHeroResp {
  results?: SWHero[];
  next?: string;
  previous?: string;
}
