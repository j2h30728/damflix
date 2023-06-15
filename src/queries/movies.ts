import { useQuery } from "@tanstack/react-query";

import { Movie } from "../types/movies";

export const useQuerMovieDetailData = (id: string) =>
  useQuery<Movie>({ queryKey: ["movie", id] });
