import type { QueryKey } from '@tanstack/react-query';
import type { LoaderFunctionArgs } from 'react-router-dom';

import { QueryClient } from '@tanstack/react-query';

import { GetMoviesResponseData, GetResponse } from '../../types/movies';

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
      queryClient.getQueryData<GetResponse<GetMoviesResponseData>>(queryKey) ??
      (await queryClient.fetchQuery<GetResponse<GetMoviesResponseData>>(queryKey))
    );
  };
