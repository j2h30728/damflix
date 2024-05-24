import type { InfiniteData, QueryKey } from '@tanstack/react-query';
import type { LoaderFunctionArgs } from 'react-router-dom';

import { QueryClient } from '@tanstack/react-query';

import { getMovieListFetcher } from '../../api/movie';
import { GetMoviesResponseData } from '../../types/movie';

export enum MovieListTypeQueryKey {
  'coming-soon' = 'upcoming',
  'now-playing' = 'now_playing',
  popular = 'popular',
}

export const getQueryKey = (type: keyof typeof MovieListTypeQueryKey): QueryKey => [
  'movie',
  `${MovieListTypeQueryKey[type]}?language=ko`,
];

export const loader =
  (queryClient: QueryClient) =>
  async ({ params }: LoaderFunctionArgs) => {
    const type = !Object.keys(params).includes('listType')
      ? MovieListTypeQueryKey.popular
      : (params.listType as keyof typeof MovieListTypeQueryKey);

    const queryKey = getQueryKey(type);

    return (
      queryClient.getQueryData<InfiniteData<GetMoviesResponseData>>(queryKey) ??
      (await queryClient.fetchInfiniteQuery({
        queryFn: async () => getMovieListFetcher({ pageParam: 1, queryKey }),
        queryKey,
      }))
    );
  };
