import { useQuery } from '@tanstack/react-query';

import { queryKey as homeQueryKey } from '../pages/Home/loader';
import { Genres, GetMovieDetailResponseData, GetMoviesResponseData } from '../types/movies';

export const useQueryMoviesData = () => useQuery<GetMoviesResponseData>({ queryKey: homeQueryKey });

export const useQueryMovieDetailData = (movieId: string | undefined) => {
  const shouldFetch = !!movieId;
  return useQuery<GetMovieDetailResponseData>({ enabled: shouldFetch, queryKey: ['movie', movieId] });
};

export const useQueryMovieCategories = () => useQuery<Genres>({ queryKey: ['movie', 'list?language=en'] });
