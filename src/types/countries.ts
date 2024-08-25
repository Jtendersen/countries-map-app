export interface Continent {
  name: string;
}

export interface Language {
  name: string;
}

export interface Country {
  code: string;
  name: string;
  capital: string;
  continent: Continent;
  languages: Language[];
  emoji: string;
  awsRegion: string;
}

export interface CountriesData {
  countries: Country[];
}

export interface ExtendedCountry extends Country {
  latitude: number;
  longitude: number;
}
