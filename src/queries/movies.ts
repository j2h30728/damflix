import { useQuery } from '@tanstack/react-query';

import { queryKey as homeQueryKey } from '../pages/Home/loader';
import { getQueryKey } from '../pages/MovieDetail/loader';
import { queryKey as nowPlayingQueryKey } from '../pages/NowPlaying/loader';
import { queryKey as upComingQueryKey } from '../pages/Upcoming/loader';
import { Genres, GetMovieDetailResponseData, GetMoviesResponseData } from '../types/movies';

export const useQueryMoviesData = () => useQuery<GetMoviesResponseData>({ queryKey: homeQueryKey });

export const useQueryNowPlayingMoviesData = () => useQuery<GetMoviesResponseData>({ queryKey: nowPlayingQueryKey });

export const useQueryUpComingMoviesData = () => useQuery<GetMoviesResponseData>({ queryKey: upComingQueryKey });

export const useQueryMovieDetailData = (movieId: string | undefined = '') => {
  const shouldFetch = !!movieId;
  return useQuery<GetMovieDetailResponseData>({ enabled: shouldFetch, queryKey: getQueryKey(movieId) });
};

export const useQueryMovieCategories = () => useQuery<Genres>({ queryKey: ['movie', 'list?language=en'] });
