import { useQuery } from '@tanstack/react-query';

import { getQueryKey as getMovieDetailQueryKey } from '../pages/MovieDetail/loader';
import { getQueryKey as getMovieListQueryKey } from '../pages/MovieList/loader';
import { Genres, GetMovieDetailResponseData, GetMoviesResponseData } from '../types/movies';

type KeyofMovieListType = 'coming-soon' | 'now-playing' | 'popular';

export const useQueryMoviesData = (listType: string | undefined = 'popular') =>
  useQuery<GetMoviesResponseData>({ queryKey: getMovieListQueryKey(listType as KeyofMovieListType) });

export const useQueryMovieDetailData = (movieId: string | undefined = '') => {
  const shouldFetch = !!movieId;
  return useQuery<GetMovieDetailResponseData>({ enabled: shouldFetch, queryKey: getMovieDetailQueryKey(movieId) });
};

export const useQueryMovieCategories = () => useQuery<Genres>({ queryKey: ['movie', 'list?language=en'] });
