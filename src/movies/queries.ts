import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import { getMovieListFetcher } from '../api/movies';
import { getQueryKey as getMovieDetailQueryKey } from './pages/MovieDetail/loader';
import { getQueryKey as getMovieListQueryKey } from './pages/MovieList/loader';
import { Genres, GetMovieDetailResponseData, GetMoviesResponseData } from './types';

type KeyOfMovieListType = 'coming-soon' | 'now-playing' | 'popular';

export const useQueryMoviesData = (listType: string | undefined = 'popular') => {
  const queryKey = getMovieListQueryKey(listType as KeyOfMovieListType);
  return useInfiniteQuery<GetMoviesResponseData, Error>({
    getNextPageParam: lastPage => {
      const nextPage = lastPage.page !== lastPage.total_pages ? lastPage.page + 1 : undefined;
      return nextPage;
    },
    queryFn: ({ pageParam = 1, queryKey }) => getMovieListFetcher({ pageParam, queryKey }),
    queryKey: queryKey,
  });
};

export const useQueryMovieDetailData = (movieId: string | undefined = '') => {
  const shouldFetch = !!movieId;
  return useQuery<GetMovieDetailResponseData>({ enabled: shouldFetch, queryKey: getMovieDetailQueryKey(movieId) });
};

export const useQueryMovieCategories = () => useQuery<Genres>({ queryKey: ['movie', 'list?language=en'] });
