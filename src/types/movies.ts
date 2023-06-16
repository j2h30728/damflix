export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface GetMoviesResponseData {
  page: number;
  results: Array<Movie>;
  total_pages: number;
  total_results: number;
}

export interface GetMovieDetailResponseData {
  adult: string;
  backdrop_path: string;
  belongs_to_collection: BelongToCollection;
  budget: number;
  genres: Array<Genres>;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Array<ProductionCompanies>;
  production_countries: Array<ProductionCountries>;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Array<SpokenLanguages>;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

type BelongToCollection = { backdrop_path: string; id: number; name: string; poster_path: string };
export type Genres = { id: number; name: string };
type ProductionCompanies = { id: number; logo_path: string; name: string; origin_country: string };
type ProductionCountries = { iso_3166_1: string; name: string };
type SpokenLanguages = { english_name: string; iso_639_1: string; name: string };

export interface GetResponse<T> {
  data: T;
  status: number;
  statusText: string;
}
