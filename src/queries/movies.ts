import { useQuery } from "@tanstack/react-query";

import { Movie } from "../types/movies";

export const useQueryPopularMovies = () =>
  useQuery<Array<Movie>>({ queryKey: ["movie", "popular"] });

export const useQueryNoPlayingMovies = () =>
  useQuery<Array<Movie>>({ queryKey: ["movie", "now_playing"] });

export const useQuerUpcomingMovies = () =>
  useQuery<Array<Movie>>({ queryKey: ["movie", "upcoming"] });
